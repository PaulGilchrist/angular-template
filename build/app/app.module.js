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
/// <reference path="../../typings/index.d.ts" />
//Angular modules and components
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
/* App Routing */
var app_routing_1 = require('./app.routing');
/* App Services */
var identity_service_1 = require('./services/identity.service');
/* App Root */
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var token_component_1 = require('./login/token.component');
var nav_top_component_1 = require('./nav/nav-top.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                token_component_1.TokenComponent,
                nav_top_component_1.TopNavComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                app_routing_1.routing
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                identity_service_1.IdentityService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
