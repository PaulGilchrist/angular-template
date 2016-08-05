/// <reference path="../../typings/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), forms_1.provideForms(), forms_1.disableDeprecatedForms()])
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=main.js.map
