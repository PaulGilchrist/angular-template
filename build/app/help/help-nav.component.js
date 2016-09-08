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
var HelpNavComponent = (function () {
    function HelpNavComponent(_location, _router) {
        this._location = _location;
        this._router = _router;
    }
    HelpNavComponent.prototype.currentPage = function (path) {
        var result = false;
        var locationPath = this._location.path();
        if (path.length == 0) {
            //Root
            result = (locationPath.length == 0);
        }
        else {
            //Does the current path start with "path"?
            result = (locationPath == path);
        }
        return result;
    };
    HelpNavComponent = __decorate([
        core_1.Component({
            selector: 'help-nav',
            styleUrls: ['app/help/help-nav.component.css'],
            templateUrl: 'app/help/help-nav.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.Router])
    ], HelpNavComponent);
    return HelpNavComponent;
}());
exports.HelpNavComponent = HelpNavComponent;

//# sourceMappingURL=help-nav.component.js.map
