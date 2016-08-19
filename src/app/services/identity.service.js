"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var config_data_1 = require('../data/config.data');
var IdentityService = (function () {
    function IdentityService() {
        //Private variables
        this._authProvider = config_data_1.CONFIG.authProvider;
        this._expireOffsetMilliseconds = 30 * 60 * 1000;
        this._renewInProgress = false;
        this._state = null;
    }
    //Public functions
    IdentityService.prototype.clearToken = function () {
        //Stop auto renewal of token
        clearInterval(this.refreshTimer);
        //Use state randonly generated data to protect against cross-site request forgery
        localStorage.removeItem("id_token");
        this.id_token = null;
        //We can not remove the token object as it might be bound.
        //m.token = null;
        localStorage.removeItem("state");
        this._state = null;
    };
    IdentityService.prototype.appendAuthHeader = function (headers) {
        //Will pass an expired header if that is all we have
        if (this.id_token) {
            headers.append('Authorization', 'Bearer ' + this.id_token);
        }
        return headers;
    };
    IdentityService.prototype.getToken = function () {
        //Save current URL to local storage before redirecting through the OAuth implicit flow process
        localStorage.setItem("redirectUrl", location.href);
        //Get a new token even if the current one has not yet expired
        var url = null;
        //Use state randonly generated data to protect against cross-site request forgery
        this._state = this.getUuid();
        localStorage.setItem("state", this._state);
        //Setup url
        if (this._authProvider.name == "AzureAD") {
            url = this._authProvider.authUrl + "?response_type=id_token&client_id=" + this._authProvider.clientId + "&redirect_uri=" + encodeURIComponent(this._authProvider.redirectUrl) + "&state=" + this._state + "&nonce=" + this._state;
        }
        else if (this._authProvider.name == "Google") {
            url = this._authProvider.authUrl + "?scope=" + encodeURIComponent("openid email") + "&response_type=id_token&client_id=" + this._authProvider.clientId + "&redirect_uri=" + encodeURIComponent(this._authProvider.redirectUrl) + "&state=" + this._state;
        }
        ;
        if (url != null) {
            window.location.replace(url);
        }
    };
    IdentityService.prototype.isTokenValid = function () {
        //Returns true if token exists and has not yet expired
        var isTokenValid = false;
        //Check to see if token is in memory
        if (this.id_token == null) {
            //Token is not in memory, but may be in local storage
            this.id_token = localStorage.getItem("id_token");
            if (this.id_token != null) {
                this.token = this.extractToken(this.id_token);
                //Set the token refresh timer
                if (this.refreshTimer == null) {
                    this.refreshTimer = setInterval(this.renewToken, this._expireOffsetMilliseconds); //If the token gets within 30 minutes of expiring (usual half life), then try and refresh it
                }
            }
        }
        if (this.id_token != null) {
            //We have a token, but still need to check it is not expired
            var expireDate = new Date(this.token.exp * 1000);
            var now = new Date();
            if (expireDate < now) {
                //The token is expired so remove it from memory and local storage
                this.clearToken();
            }
            else {
                //Both scenarios of renewing the token or using the existing token are both valid
                isTokenValid = true;
            }
        }
        return isTokenValid;
    };
    IdentityService.prototype.renewToken = function () {
        var _self = this;
        //Renew existing token before it expires
        console.log("identitySvc.renewToken()");
        //Assumes the current token is still valid and uses its information for hints to prevent login UI
        if (!this._renewInProgress && this.isTokenValid()) {
            this._renewInProgress = true;
            this._state = this.getUuid();
            localStorage.setItem("state", this._state);
            var uri = null;
            //Setup uri
            if (this._authProvider.name == "AzureAD") {
                uri = this._authProvider.authUrl + "?response_type=id_token&client_id=" + this._authProvider.clientId + "&redirect_uri=" + encodeURIComponent(this._authProvider.redirectUrl) + "&state=" + this._state + "&nonce=" + this._state;
                uri += '&prompt=none&login_hint=' + encodeURIComponent(this.getLoginHint()) + '&domain_hint=' + encodeURIComponent(this.getDomainHint());
            }
            else if (this._authProvider.name == "Google") {
                //Google token does not give user email informaiton so there is no login or domain hints
                uri = this._authProvider.authUrl + "?scope=email&response_type=id_token&client_id=" + this._authProvider.clientId + "&redirect_uri=" + encodeURIComponent(this._authProvider.redirectUrl) + "&state=" + this._state + "&nonce=" + this._state;
                uri += '&prompt=none&login_hint=' + encodeURIComponent(this.getLoginHint());
            }
            if (uri != null) {
                //We do not want the iFrame to redirect to anywhere after getting a token or it would launch a 2nd copy of the application unneccessarily
                localStorage.removeItem("redirectUrl");
                //Do not redirect the current page, but rather make the call in an iframe since a refresh has no UI, and we want to stay on the current page
                var frameHandle = this.addIFrame("tokenRenewFrame");
                frameHandle.src = 'about:blank';
                this.loadFrame(uri, "tokenRenewFrame");
                //Wait then try and reload the token from local storage
                setTimeout(function () {
                    _self._renewInProgress = false;
                    //If the renew succeeds, memory will be updated with the new token
                    //If the renew fails, the old token should still be valid for several more minutes, so it will be reloaded into local storage
                    _self.id_token = localStorage.getItem("id_token");
                    if (_self.id_token != null) {
                        _self.token = _self.extractToken(_self.id_token);
                        console.log('Token renewed successfully.  New expiration = ' + new Date(_self.token.exp * 1000));
                    }
                    else {
                        console.log('Token renewal failed.  Expiration = ' + new Date(_self.token.exp * 1000));
                        //Try again in 5 minutes
                        setTimeout(_self.renewToken, 300000);
                    }
                }, 60000); //Give a minute for the renewal to complete before pulling the renewed token
            }
        }
    };
    IdentityService.prototype.base64DecodeStringUrlSafe = function (base64IdToken) {
        // html5 should support atob function for decoding
        if (window.atob) {
            return window.atob(base64IdToken);
        }
        // TODO add support for this
        console.log('Browser is not supported');
        return null;
    };
    IdentityService.prototype.decodeJwt = function (jwtToken) {
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            console.log('The returned token is not parseable.');
            return null;
        }
        var crackedToken = {
            header: matches[1],
            payload: matches[2],
            signature: matches[3]
        };
        return crackedToken;
    };
    IdentityService.prototype.base64Decode = function (encodedBase64) {
        try {
            var base64Decoded = this.base64DecodeStringUrlSafe(encodedBase64);
            if (!base64Decoded) {
                console.log('identity.base64Decode -> Could not be base64 url safe decoded.');
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            console.log('identity.base64Decode -> Could not be decoded: ' + err.stack);
        }
        return null;
    };
    IdentityService.prototype.extractHeader = function (jwtToken) {
        // id token will be decoded to get the username
        var decodedJwt = this.decodeJwt(jwtToken);
        if (decodedJwt) {
            return this.base64Decode(decodedJwt.header);
        }
        return null;
    };
    IdentityService.prototype.extractSignature = function (jwtToken) {
        // id token will be decoded to get the username
        var decodedJwt = this.decodeJwt(jwtToken);
        if (decodedJwt) {
            return this.base64Decode(decodedJwt.signature);
        }
        return null;
    };
    IdentityService.prototype.extractToken = function (encodedToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedToken);
        var base64Token = null;
        if (decodedToken) {
            base64Token = decodedToken.payload;
        }
        else {
            base64Token = encodedToken;
        }
        try {
            var base64Decoded = this.base64DecodeStringUrlSafe(base64Token);
            if (!base64Decoded) {
                console.log('The returned token could not be base64 url safe decoded.');
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            console.log('The returned token could not be decoded: ' + err.stack);
        }
        return null;
    };
    IdentityService.prototype.getDomainHint = function () {
        if (this.token && this.token.upn && this.token.upn.indexOf('@') > -1) {
            var parts = this.token.upn.split('@');
            // local part can include @ in quotes. Sending last part handles that.
            return parts[parts.length - 1];
        }
        return '';
    };
    IdentityService.prototype.getLoginHint = function () {
        var login_hint = '';
        if (this._authProvider.name == "AzureAD") {
            if (this.token && this.token.upn) {
                login_hint = this.token.upn;
            }
        }
        else if (this._authProvider.name == "Google") {
            if (this.token && this.token.email) {
                login_hint = this.token.email;
            }
        }
        ;
        return login_hint;
    };
    IdentityService.prototype.getUuid = function () {
        //Generate an RFC4122 version 4 UUID
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    IdentityService.prototype.addIFrame = function (iframeId) {
        var iFrame = document.getElementById(iframeId);
        if (!iFrame) {
            if (document.createElement && document.documentElement && (window.navigator.userAgent.indexOf('MSIE 5.0') === -1)) {
                var ifr = document.createElement('iframe');
                ifr.setAttribute('id', iframeId);
                ifr.style.visibility = 'hidden';
                ifr.style.position = 'absolute';
                ifr.style.width = ifr.style.height = ifr.border = '0px';
                iFrame = (document.getElementsByTagName('body')[0].appendChild(ifr));
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML('beforeEnd', '<iframe name="' + iframeId + '" id="' + iframeId + '" style="display:none"></iframe>');
            }
            if (window.frames && window.frames[iframeId]) {
                iFrame = window.frames[iframeId];
            }
        }
        return iFrame;
    };
    IdentityService.prototype.removeIFrame = function (iframeId) {
        var iFrame = document.getElementById(iframeId);
        iFrame.parentNode.removeChild(iFrame);
    };
    IdentityService.prototype.loadFrame = function (url, iframeId) {
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        var _self = this;
        setTimeout(function () {
            var frameHandle = _self.addIFrame(iframeId);
            if (frameHandle.src === '' || frameHandle.src === 'about:blank') {
                frameHandle.src = url;
                _self.loadFrame(url, iframeId);
            }
        }, 500);
    };
    IdentityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], IdentityService);
    return IdentityService;
}());
exports.IdentityService = IdentityService;
//# sourceMappingURL=identity.service.js.map