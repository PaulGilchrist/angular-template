import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { CONFIG } from '../data/config.data';

@Injectable()
export class IdentityService {
    // Public variables
    public id_token: any;
    public refreshTimer: any;
    public token: any;

    // Private variables
    _authProvider = CONFIG.authProvider;
    _expireOffsetMilliseconds: number = 30*60*1000;
    _renewInProgress: boolean = false;
    _state: string = null;

    // Public functions
    public clearToken(): void {
        // Stop auto renewal of token
        clearInterval(this.refreshTimer);
        // Use state randonly generated data to protect against cross-site request forgery
        localStorage.removeItem('id_token');
        this.id_token = null;
        // We can not remove the token object as it might be bound.
        // m.token = null;
        localStorage.removeItem('state');
        this._state = null;
    }

    public appendAuthHeader(headers: Headers): any {
        // Will pass an expired header if that is all we have
        if(this.id_token) {
            headers.append('Authorization', 'Bearer ' + this.id_token);
        }
        return headers;
    }

    public getToken(): void {
        // Save current URL to local storage before redirecting through the OAuth implicit flow process
        localStorage.setItem('redirectUrl', location.href);
        // Get a new token even if the current one has not yet expired
        let url: string = null;
        // Use state randonly generated data to protect against cross-site request forgery
        this._state = this.getUuid();
        localStorage.setItem('state', this._state);
        // Setup url
        if(this._authProvider.name === 'AzureAD') {
            url = this._authProvider.authUrl + '?response_type=id_token&client_id=' + this._authProvider.clientId + '&redirect_uri=' + encodeURIComponent(this._authProvider.redirectUrl) + '&state=' + this._state + '&nonce=' + this._state;
        } else if (this._authProvider.name === 'Google') {
            url = this._authProvider.authUrl + '?scope=' + encodeURIComponent('openid email') + '&response_type=id_token&client_id=' + this._authProvider.clientId + '&redirect_uri=' + encodeURIComponent(this._authProvider.redirectUrl) + '&state=' + this._state;
        };
        if(url != null) {
                window.location.replace(url);
        }
    }

    public isTokenValid(): boolean {
        // Returns true if token exists and has not yet expired
        let isTokenValid = false;
        // Check to see if token is in memory
        if(this.id_token == null) {
            // Token is not in memory, but may be in local storage
            this.id_token = localStorage.getItem('id_token');
            if(this.id_token != null) {
                this.token = this.extractToken(this.id_token);
                // Set the token refresh timer
                if(this.refreshTimer == null) {
                    this.refreshTimer = setInterval(this.renewToken, this._expireOffsetMilliseconds); // If the token gets within 30 minutes of expiring (usual half life), then try and refresh it
                    // this.refreshTimer = setInterval(this.renewToken, 120000); //2 minutes
                }
            }
        }
        if(this.id_token != null) {
            // We have a token, but still need to check it is not expired
            let expireDate = new Date(this.token.exp * 1000);
            let now = new Date();
            if(expireDate < now) {
                // The token is expired so remove it from memory and local storage
                this.clearToken();
            } else {
                // Both scenarios of renewing the token or using the existing token are both valid
                isTokenValid = true;
            }
        }
        return isTokenValid;
    }

    public renewToken(): void {
        let _self = this;
        // Renew existing token before it expires
        console.log('identitySvc.renewToken()');
        // Assumes the current token is still valid and uses its information for hints to prevent login UI
        if(!this._renewInProgress && this.isTokenValid()) {
            this._renewInProgress = true;
            this._state = this.getUuid();
            localStorage.setItem('state', this._state);
            let uri: string = null;
            // Setup uri
            if(this._authProvider.name === 'AzureAD') {
                uri = this._authProvider.authUrl + '?response_type=id_token&client_id=' + this._authProvider.clientId  + '&redirect_uri=' + encodeURIComponent(this._authProvider.redirectUrl) + '&state=' + this._state + '&nonce=' + this._state;
                uri += '&prompt=none&login_hint=' + encodeURIComponent(this.getLoginHint()) + '&domain_hint=' + encodeURIComponent(this.getDomainHint());
            } else if (this._authProvider.name === 'Google') {
                // Google token does not give user email informaiton so there is no login or domain hints
                uri = this._authProvider.authUrl + '?scope=email&response_type=id_token&client_id=' + this._authProvider.clientId  + '&redirect_uri=' + encodeURIComponent(this._authProvider.redirectUrl) + '&state=' + this._state + '&nonce=' + this._state;
                uri += '&prompt=none&login_hint=' + encodeURIComponent(this.getLoginHint());
            }
            if(uri != null) {
                // We do not want the iFrame to redirect to anywhere after getting a token or it would launch a 2nd copy of the application unneccessarily
                localStorage.removeItem('redirectUrl');
                // Do not redirect the current page, but rather make the call in an iframe since a refresh has no UI, and we want to stay on the current page
                let frameHandle = this.addIFrame('tokenRenewFrame');
                frameHandle.src = 'about:blank';
                this.loadFrame(uri, 'tokenRenewFrame');
                // Wait then try and reload the token from local storage
                setTimeout(function () {
                    _self._renewInProgress = false;
                    // If the renew succeeds, memory will be updated with the new token
                    // If the renew fails, the old token should still be valid for several more minutes, so it will be reloaded into local storage
                    _self.id_token = localStorage.getItem('id_token');
                    if(_self.id_token != null) {
                        _self.token = _self.extractToken(_self.id_token);
                        console.log('Token renewed successfully.  New expiration = ' + new Date(_self.token.exp * 1000));
                    } else {
                        console.log('Token renewal failed.  Expiration = ' + new Date(_self.token.exp * 1000));
                        // Try again in 5 minutes
                        setTimeout(_self.renewToken, 300000);
                    }
                }, 60000); // Give a minute for the renewal to complete before pulling the renewed token
            }
        }
    }

    base64DecodeStringUrlSafe(base64IdToken: string): string {
        // html5 should support atob function for decoding
        if (window.atob) {
            return window.atob(base64IdToken);
        }
        // TODO add support for this
        console.log('Browser is not supported');
        return null;
    }

    decodeJwt(jwtToken: string): any {
        let idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        let matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            console.log('The returned token is not parseable.');
            return null;
        }
        let crackedToken = {
            header: matches[1],
            payload: matches[2],
            signature: matches[3]
        };
        return crackedToken;
    }

    base64Decode(encodedBase64: string): any {
        try {
            let base64Decoded = this.base64DecodeStringUrlSafe(encodedBase64);
            if (!base64Decoded) {
                console.log('identity.base64Decode -> Could not be base64 url safe decoded.');
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        } catch (err) {
            console.log('identity.base64Decode -> Could not be decoded: ' + err.stack);
        }
        return null;
    }

    extractHeader(jwtToken: string): any {
        // id token will be decoded to get the username
        let decodedJwt = this.decodeJwt(jwtToken);
        if(decodedJwt) {
            return this.base64Decode(decodedJwt.header);
        }
        return null;
    }

    extractSignature(jwtToken: string): any {
        // id token will be decoded to get the username
        let decodedJwt = this.decodeJwt(jwtToken);
        if(decodedJwt) {
            return this.base64Decode(decodedJwt.signature);
        }
        return null;
    }

    extractToken(encodedToken: string): any {
        // id token will be decoded to get the username
        let decodedToken = this.decodeJwt(encodedToken);
        let base64Token: string = null;
        if(decodedToken) {
            base64Token = decodedToken.payload;
        } else {
            base64Token = encodedToken;
        }
        try {
            let base64Decoded = this.base64DecodeStringUrlSafe(base64Token);
            if (!base64Decoded) {
                console.log('The returned token could not be base64 url safe decoded.');
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        } catch (err) {
            console.log('The returned token could not be decoded: ' + err.stack);
        }
        return null;
    }

    getDomainHint(): string {
        if (this.token && this.token.upn && this.token.upn.indexOf('@') > -1) {
            let parts: string = this.token.upn.split('@');
            // local part can include @ in quotes. Sending last part handles that.
            return parts[parts.length - 1];
        }
        return '';
    }

    getLoginHint(): string {
        let login_hint = '';
        if(this._authProvider.name === 'AzureAD') {
            if(this.token && this.token.upn) {
                login_hint = this.token.upn;
            }
        } else if(this._authProvider.name === 'Google') {
            if(this.token && this.token.email) {
                login_hint = this.token.email;
            }
        };
        return login_hint;
    }

    getUuid(): string {
        // Generate an RFC4122 version 4 UUID
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    public addIFrame(iframeId: string): HTMLIFrameElement {
        let iFrame: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById(iframeId);
        if (!iFrame) {
            if (document.createElement && document.documentElement && (window.navigator.userAgent.indexOf('MSIE 5.0') === -1)) {
                let ifr = document.createElement('iframe');
                ifr.setAttribute('id', iframeId);
                ifr.style.visibility = 'hidden';
                ifr.style.position = 'absolute';
                ifr.style.width = ifr.style.height = ifr.border = '0px';
                iFrame = <HTMLIFrameElement>(document.getElementsByTagName('body')[0].appendChild(ifr));
            } else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML('beforeEnd', '<iframe name=' + iframeId + ' id=' + iframeId + ' style=\'display:none\'></iframe>');
            }
            if (window.frames && window.frames[iframeId]) {
                iFrame = window.frames[iframeId];
            }
        }
        return iFrame;
    }

    removeIFrame(iframeId: string): void {
        let iFrame: HTMLElement  = document.getElementById(iframeId);
        iFrame.parentNode.removeChild(iFrame);
    }

    loadFrame(url: string, iframeId: string): void {
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        let _self = this;
        setTimeout(function () {
            let frameHandle = _self.addIFrame(iframeId);
            if (frameHandle.src === '' || frameHandle.src === 'about:blank') {
                frameHandle.src = url;
                _self.loadFrame(url, iframeId);
            }
        }, 500);
    }

}
