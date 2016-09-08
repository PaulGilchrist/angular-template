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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var common_2 = require('@angular/common');
var help_component_1 = require('./help.component');
var help_home_component_1 = require('./help-home.component');
var help_nav_component_1 = require('./help-nav.component');
var HelpModule = (function () {
    function HelpModule() {
    }
    HelpModule = __decorate([
        core_1.NgModule({
            declarations: [
                help_component_1.HelpComponent,
                help_home_component_1.HelpHomeComponent,
                help_nav_component_1.HelpNavComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            providers: [
                { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], HelpModule);
    return HelpModule;
}());
exports.HelpModule = HelpModule;

//# sourceMappingURL=help.module.js.map
