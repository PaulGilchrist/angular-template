/// <reference path="../../typings/index.d.ts" />
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app.routes');
var core_2 = require('@angular/core');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var drag_demo_component_1 = require('./demos/drag-demo.component');
var floor_demo_component_1 = require('./demos/floor-demo.component');
var graph_demo_component_1 = require('./demos/graph-demo.component');
var help_component_1 = require('./help/help.component');
var help_home_component_1 = require('./help/help-home.component');
var home_component_1 = require('./home.component');
var pdf_demo_component_1 = require('./demos/pdf-demo.component');
var token_component_1 = require('./login/token.component');
var user_home_component_1 = require('./user/user-home.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                drag_demo_component_1.DragDemoComponent,
                floor_demo_component_1.FloorDemoComponent,
                graph_demo_component_1.GraphDemoComponent,
                help_component_1.HelpComponent,
                help_home_component_1.HelpHomeComponent,
                home_component_1.HomeComponent,
                pdf_demo_component_1.PdfDemoComponent,
                token_component_1.TokenComponent,
                user_home_component_1.UserHomeComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            providers: [app_routes_1.appRouterProviders, core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
