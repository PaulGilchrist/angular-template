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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var identity_service_1 = require('./../services/identity.service');
var TokenComponent = (function () {
    function TokenComponent(_location, _router, _identityService) {
        this._location = _location;
        this._router = _router;
        this._identityService = _identityService;
        this.token = null;
        this.id_token = null;
    }
    TokenComponent.prototype.ngOnInit = function () {
        if (this._identityService.isTokenValid()) {
            this.token = this._identityService.token;
            this.token.displayName = this.token.given_name + ' ' + this.token.family_name;
            this.id_token = this._identityService.id_token;
        }
        else {
            toastr.error('Not logged in');
            this._location.go('/main');
        }
    };
    ;
    TokenComponent.prototype.getDateString = function (num) {
        var returnString = '';
        if (num) {
            returnString = num + ' (' + new Date(num * 1000) + ')';
        }
        return returnString;
    };
    ;
    TokenComponent.prototype.logout = function () {
        //Remove token from both memory and local storage
        this._identityService.clearToken();
        //Redirect back to the home page now that there is no longer token info to display
        this._router.navigate(['home']);
    };
    TokenComponent.prototype.renew = function () {
        //Test renewing a currently valid token without UI
        this._identityService.renewToken();
        //Should refresh the screen after a second (or after token has been replaced)
    };
    ;
    TokenComponent = __decorate([
        core_1.Component({
            selector: 'my-token',
            templateUrl: 'app/login/token.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.Router, identity_service_1.IdentityService])
    ], TokenComponent);
    return TokenComponent;
}());
exports.TokenComponent = TokenComponent;
//# sourceMappingURL=token.component.js.map