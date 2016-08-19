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
var help_nav_component_1 = require('./help-nav.component');
var HelpComponent = (function () {
    function HelpComponent() {
        this.showNav = true;
    }
    HelpComponent.prototype.toggleNav = function () {
        this.showNav = !this.showNav;
    };
    HelpComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, help_nav_component_1.HelpNavComponent],
            selector: 'my-help',
            styleUrls: ['app/help/help.component.css'],
            templateUrl: 'app/help/help.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HelpComponent);
    return HelpComponent;
}());
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=help.component.js.map