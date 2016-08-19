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
var identity_service_1 = require('../services/identity.service');
var TopNavComponent = (function () {
    function TopNavComponent(_location, _router, _identityService) {
        this._location = _location;
        this._router = _router;
        this._identityService = _identityService;
        this.shrinkNavbar = false;
        this.user = {
            identity: {
                isAuthenticated: false
            }
        };
    }
    TopNavComponent.prototype.onScroll = function (event) {
        //Shrink the header top and bottom padding when scrolling beyond 300px
        this.shrinkNavbar = ((window.pageYOffset || document.documentElement.scrollTop) > 300);
    };
    TopNavComponent.prototype.ngOnInit = function () {
        this.user.identity.isAuthenticated = this._identityService.isTokenValid();
        if (this.user.identity.isAuthenticated) {
            this.user.identity.name = this._identityService.token.name;
        }
        else {
            this.user.identity.name = null;
        }
    };
    ;
    TopNavComponent.prototype.currentPage = function (path) {
        var result = false;
        var locationPath = this._location.path();
        if (path.length == 0) {
            //Root
            result = (locationPath.length == 0);
        }
        else {
            //Does the current path start with "path"?
            result = (locationPath.indexOf(path) == 0);
        }
        return result;
    };
    TopNavComponent.prototype.login = function () {
        if (!this._identityService.isTokenValid()) {
            //No need to call this asyncronously because it will actually leave the website to redirect to the login server
            this._identityService.getToken();
        }
        else {
            this.user.identity.isAuthenticated = true;
            this.user.identity.name = this._identityService.token.name;
        }
        ;
    };
    TopNavComponent.prototype.logout = function () {
        this._identityService.clearToken();
        this.user.identity.isAuthenticated = false;
        this.user.identity.name = null;
        this._router.navigate(['home']);
    };
    TopNavComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES],
            selector: 'nav-top',
            styleUrls: ['app/nav/nav-top.component.css'],
            templateUrl: 'app/nav/nav-top.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.Router, identity_service_1.IdentityService])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;
//# sourceMappingURL=nav-top.component.js.map