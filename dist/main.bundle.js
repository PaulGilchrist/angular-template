webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos-module/demos.module": [
		"../../../../../src/app/demos-module/demos.module.ts",
		"demos.module",
		"common"
	],
	"./floor-module/floor.module": [
		"../../../../../src/app/demos-module/floor-module/floor.module.ts",
		"floor.module"
	],
	"./help-module/help.module": [
		"../../../../../src/app/help-module/help.module.ts",
		"help.module"
	],
	"./users-module/user.module": [
		"../../../../../src/app/users-module/user.module.ts",
		"user.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular modules and components
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var http_2 = __webpack_require__("../../../common/@angular/common/http.es5.js");
__webpack_require__("../../../../bootstrap/dist/js/npm.js");
/* Shared Modules */
var shared_module_1 = __webpack_require__("../../../../../src/app/shared-module/shared.module.ts");
/* App Services */
var identity_service_1 = __webpack_require__("../../../../../src/app/services/identity.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* App Root */
var app_component_1 = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var token_component_1 = __webpack_require__("../../../../../src/app/components/token/token.component.ts");
var nav_top_component_1 = __webpack_require__("../../../../../src/app/components/nav/nav-top.component.ts");
var auth_interceptor_1 = __webpack_require__("../../../../../src/app/services/auth.interceptor.ts");
var logging_interceptor_1 = __webpack_require__("../../../../../src/app/services/logging.interceptor.ts");
var AppModule = /** @class */ (function () {
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
            exports: [
                shared_module_1.SharedModule
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    // Static Loading
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'token', component: token_component_1.TokenComponent },
                    // Lazy Loading
                    { path: 'demos', loadChildren: './demos-module/demos.module#DemosModule' },
                    { path: 'user', loadChildren: './users-module/user.module#UserModule' },
                    { path: 'help', loadChildren: './help-module/help.module#HelpModule' },
                ], { preloadingStrategy: router_1.NoPreloading }),
                shared_module_1.SharedModule
            ],
            providers: [
                // { provide: LocationStrategy, useClass: HashLocationStrategy },
                { provide: Window, useValue: window },
                { provide: http_2.HTTP_INTERCEPTORS, useClass: auth_interceptor_1.AuthInterceptor, multi: true, },
                { provide: http_2.HTTP_INTERCEPTORS, useClass: logging_interceptor_1.LoggingInterceptor, multi: true, },
                identity_service_1.IdentityService,
                settings_service_1.SettingsService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n/*\r\n Place CSS in Angular component styleUrls: [] when not re-used globally\r\n This helps ensure component specific CSS moves with the component\r\n    and is removed from the project if the component is removed\r\n*/\r\n.animated {\r\n    /* Keep in mind smartphones and tables are usually not capable of complex animations like cubic-bezier */\r\n    -webkit-animation-duration: 0.5s;\r\n    animation-duration: 0.5s;\r\n}\r\n@media (min-width: 768px) {\r\n    main {\r\n        padding-top: 80px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <header class='container'>\r\n        <nav-top></nav-top>\r\n    </header>\r\n    <main class='container'>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_settingsService) {
        this._settingsService = _settingsService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Get Application settings from API at application startup
        this._settingsService.getSettings().subscribe();
        // Extend jQuery to allow for simpler animations
        $.fn.extend({
            animateCss: function (animationName) {
                // Remove animation if it is still an added class
                $(this).removeClass('animated ' + animationName);
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    // Remove animation now that it is complete
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [__webpack_require__("../../../../../src/app/components/app/app.component.css")],
            template: __webpack_require__("../../../../../src/app/components/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    box-shadow:6px 6px 10px rgba(0,0,0,0.4);\r\n}\r\n.flash {\r\n    -webkit-animation-duration: 2s;\r\n    animation-duration: 2s;\r\n}\r\n.sub-section {\r\n    margin: 0 0 32px 0;\r\n    padding: 16px 24px;\r\n    background: #f5f6f7;\r\n    border-left: 4px solid #8BC34A;\r\n    border-radius: 4px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Angular, TypeScript, Bootstrap, and Visual Studio Code</div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"sub-section\">\r\n            <p>This site was put together to demonstrate code examples for Angular, Typescript, and Bootstrap developed in a Visual Studio Code hosted IDE.  This combination of tools allows for a browser and device agnostic highly responsive application.  Open standard tools such as NPM (node package manager), Gulp (task runner), Jasmine (unit testing), Karma (test runner), and Git (version control) are also leveraged.  This project runs very well using Node for hosting and Visual Studio Code, but can alos work equally well using .Net or .Net core and Visual Studio, Sublime, Atom, and more.  This environment detects code changes, automaticly hot swapping changes and refresh all connected browsers improving development and debugging time efficiency.</p>\r\n            <p>Angular’s powerful client side JavaScript library is the key to this applications architecture.  Although developed as a lightweight template or starting point for new projects, examples exist throughout the code demonstrating Angular, Typescript, and Bootstrap capabilities and best practices.  Make sure to check out the “Features” section below for a list of Angular features demonstrated in this project.</p>\r\n            <p>As Angular, Typescript, Bootstrap, or Visual Studio changes or best practices evolve, this template will be updates to ensure it always remains a good starting point for any new project.</p>\r\n            <br />\r\n            <input (click)=\"_router.navigate(['help']);\" type=\"button\" class=\"btn btn-primary animated flash\" value=\"Getting Started\"><br />\r\n            <br />\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8\">\r\n                    <h4>Module Architecture</h4>\r\n                    <img class=\"img-responsive img-rounded animated slideInLeft\" src=\"./assets/architecture-diagram.png\" />\r\n                    <br />\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <h4>Module Scope: Page Example</h4>\r\n                    <img class=\"img-responsive img-rounded animated slideInRight\" src=\"./assets/module-scope.png\" />\r\n                    <br />\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div class=\"clearfix\">\r\n                    <div class=\"pull-left\"><a href=\"https://angular.io/\">Learn more about Angular 2.0 development</a></div>\r\n                    <div class=\"pull-right\">\r\n                        Learn more about <a href=\"http://www.typescriptlang.org/\">Typescript</a>, <a href=\"http://getbootstrap.com/\">Bootstrap</a>, or <a href=\"https://www.visualstudio.com/en-us/visual-studio-homepage-vs.aspx\">Visual Studio</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"sub-section\">\r\n            <h4>Angular's Value Proposition</h4>\r\n            <ul>\r\n                <li>Better supports stateless server design and its associated horizontal scalability</li>\r\n                <li>Better supports scalability through offloading server processing</li>\r\n                <li>Better supports SQL scalability as changes can remain on the client between pages, and only sent to the server when needing to persist beyond the session</li>\r\n                <li>Built in validation and dirty checking ensure data is not passed back to the server that did not change or that did not meet quality requirements</li>\r\n                <li>Better supports a more rapidly responding and interactive client experience</li>\r\n                <li>Better supports separation of concerns where front-end is for presentation, and backend is for data access</li>\r\n                <li>Extremely readable HTML, and complete separation of model, view and controller functionality</li>\r\n                <li>Allows natural syntax for building a page from components, and even nesting components inside other components</li>\r\n                <li>Built in support for client side unit testing</li>\r\n                <li>Components isolation model lends itself nicely to unit testing</li>\r\n                <li>CSS scoping at the component level and not just the page level</li>\r\n                <li>Best client framework when wanting to extend JavaScript with TypeScript</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"panel-title\"><h4>Template Features - Angular</h4></div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <ul>\r\n                            <li>One way binding {{'\\{\\{\\}\\}'}}</li>\r\n                            <li>Event binding ()</li>\r\n                            <li>Target property binding [] </li>\r\n                            <li>Two way binding [()] </li>\r\n                            <li>Structural directives *</li>\r\n                            <li>Local template variables #</li>\r\n                            <li>Components</li>\r\n                            <li>Component scoped CSS</li>\r\n                            <li>Injectors</li>\r\n                            <li>Lifecycle hooks</li>\r\n                            <li>Modules</li>\r\n                            <li>Routers (parent and child)</li>\r\n                            <li>Services</li>\r\n                            <li>Custom pipes</li>\r\n                            <li>Form validation</li>\r\n                            <li>AJAX calls</li>\r\n                            <li>Async observables</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"panel-title\"><h4>Recently Added </h4></div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <ul>\r\n                            <li>Webpack module loading with minification, mangling, bundling</li>\r\n                            <li>Hot reload debugging</li>\r\n                            <li>Module lazy loading</li>\r\n                            <li>Karma/Jasmine unit testing</li>\r\n                            <li>Help page discussing all usage details</li>\r\n                            <li>Form dirty checking</li>\r\n                            <li>Progress bar component</li>\r\n                            <li>Modal component</li>\r\n                            <li>Catch leaving page containing changed data, prompting for bulk save</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-5 col-sm-offset-2\">\r\n                <div class=\"panel panel-info\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"panel-title\"><h4>Template Features - Other</h4></div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <ul>\r\n                            <li>Animations and Transitions</li>\r\n                            <li>Auto re-compile, re-test, browser refresh on change</li>\r\n                            <li>Azure/Git continuous deployment (dev\\master)</li>\r\n                            <li>Bootstrap grids, forms, nav, panels, tables, etc.</li>\r\n                            <li>Drag and Drop</li>\r\n                            <li>Graphs, charts, and dashboards (using D3)</li>\r\n                            <li>Gulp post build automation</li>\r\n                            <li>Header scroll awareness</li>\r\n                            <li>Mock data support</li>\r\n                            <li>OAuth bearer tokens</li>\r\n                            <li>PDF Printing</li>\r\n                            <li>RegEx form validation</li>\r\n                            <li>Responsive sidebar</li>\r\n                            <li>SVG manipulation via CSS</li>\r\n                            <li>Table caching, sorting, and search filtering</li>\r\n                            <li>TypeScript</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-warning\">\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"panel-title\"><h4>To Do List</h4></div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <ul>\r\n                            <li>API endpoint to receive client errors.  Abstract all logging through client service.</li>\r\n                            <li>API feedback endpoint and client side UI</li>\r\n                            <li>Document key files and their purpose (ex: gulpfile.js, karma.conf.js, package.json, tsconfig.json, etc.)</li>\r\n                            <li>HTML minification (when supported)</li>\r\n                            <li>Ahead of Time compilation (when supported in webpack)</li>\r\n                            <li>Service interface definitions to ensure mock data interface matches production interface</li>\r\n                        </ul>\r\n                    </div>\r\n                    <div id=\"closableMessage\">\r\n                        <div class=\"panel-footer\">\r\n                            <a href=\"#closableMessage\" data-dismiss=\"alert\" class=\"close\">&times;</a>\r\n                            <h5>This site is still in development and experience may change</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        Begin your development effort with this template.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        window['appInsights'].trackPageView("home.component");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav a {\r\n    color: #ccc;\r\n    text-shadow: 1px 1px 2px rgba(255,255,255,0.5); /* Always use rgba for text and box shadows */\r\n    text-transform: uppercase;\r\n    transition: 500ms all;\r\n}\r\n.nav a:hover {\r\n    color: #fff;\r\n    font-weight: bold;\r\n    letter-spacing: 0.075em;\r\n    padding-top: 10px;\r\n    transition: 500ms all;\r\n}\r\n.navbar {\r\n    padding: 10px 0;\r\n    transition: 500ms all;\r\n}\r\n.navbar-shrink {\r\n    padding: 0 0;\r\n    opacity: 0.9;\r\n    transition: 500ms all;\r\n}\r\n.navbar i {\r\n    color: #ccc;\r\n    margin: 5px 5px 0 -5px;\r\n}\r\n.navbar-brand {\r\n    color: #ccc;\r\n    text-shadow: 1px 1px 2px rgba(255,255,255,0.5); /* Always use rgba for text-shadow and boxshadow */\r\n    transition: 500ms all;\r\n}\r\n.navbar-brand:hover {\r\n    color: #fff;\r\n    transition: 500ms all;\r\n}\r\n.navbar-nav>li.active>a {\r\n    height: 50px;\r\n}\r\n@media (max-width: 768px) { /* Hide brand icon on small screens */\r\n    i {\r\n        display: none;\r\n    }\r\n}\r\n@media (min-width: 768px) {\r\n    body {\r\n        padding-top: 80px;\r\n    }\r\n    .navbar-static-top { /* we use this instead of navbar-fixed-top so we can remove it on smaller screens */\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        left: 0;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav-top.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\" (window:scroll)=\"onScroll($event)\" [class.navbar-shrink]=\"shrinkNavbar\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <div class=\"clearfix\" [routerLink]=\"['home']\">\r\n                <i class=\"navbar-left fa fa-home fa-3x\"></i>\r\n                <span class=\"navbar-left navbar-brand\">Angular 2 Template</span>\r\n            </div>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['home']\">Home</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['demos/blockchain']\">Blockchain</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['demos/drag']\">Drag</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['demos/editor']\">Editor</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['demos/graph']\">Graph</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['demos/floor']\">Floor</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['user']\">User</a></li>\r\n                <li routerLinkActive=\"active\"><a [routerLink]=\"['help']\">Help</a></li>\r\n                <li *ngIf=\"identityService.user\"  routerLinkActive=\"active\"><a [routerLink]=\"['token']\">Token</a></li>\r\n            </ul>\r\n            <form class=\"navbar-form navbar-right\">\r\n                <input *ngIf=\"!identityService.user\" (click)=\"login()\" type=\"button\" class=\"btn btn-primary\" value=\"Login\">\r\n                <input *ngIf=\"identityService.user\" (click)=\"logout()\" type=\"button\" class=\"btn sm btn-default\" value=\"Logout\">\r\n            </form>\r\n            <div *ngIf=\"identityService.user\" class=\"nav navbar-right hidden-xs hidden-sm\">\r\n                <span class=\"navbar-text\">{{ this.identityService.user.profile['given_name'] + ' ' + this.identityService.user.profile['family_name'] }}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav-top.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var identity_service_1 = __webpack_require__("../../../../../src/app/services/identity.service.ts");
var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(_location, _router, identityService) {
        this._location = _location;
        this._router = _router;
        this.identityService = identityService;
        this.shrinkNavbar = false;
    }
    TopNavComponent.prototype.onScroll = function (event) {
        // Shrink the header top and bottom padding when scrolling beyond 300px
        this.shrinkNavbar = ((window.pageYOffset || document.documentElement.scrollTop) > 300);
    };
    TopNavComponent.prototype.ngOnInit = function () {
    };
    ;
    TopNavComponent.prototype.currentPage = function (path) {
        var result = false;
        var locationPath = this._location.path();
        if (path.length === 0) {
            // Root
            result = (locationPath.length === 0);
        }
        else {
            // Does the current path start with "path"?
            result = (locationPath.indexOf(path) === 0);
        }
        return result;
    };
    TopNavComponent.prototype.login = function () {
        var _this = this;
        this.identityService.getUser().subscribe(function (user) {
            console.log(_this.identityService.user);
        }, function (error) {
            console.log(error);
        });
    };
    TopNavComponent.prototype.logout = function () {
        this.identityService.clearToken();
        this._router.navigate(['home']);
    };
    TopNavComponent = __decorate([
        core_1.Component({
            selector: 'nav-top',
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav-top.component.css")],
            template: __webpack_require__("../../../../../src/app/components/nav/nav-top.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof identity_service_1.IdentityService !== "undefined" && identity_service_1.IdentityService) === "function" && _c || Object])
    ], TopNavComponent);
    return TopNavComponent;
    var _a, _b, _c;
}());
exports.TopNavComponent = TopNavComponent;
//# sourceMappingURL=nav-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/token/token.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='this.identityService.user' class=\"panel panel-default animated slideInUp\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<a href=\"#tokenView\" data-toggle=\"collapse\"><h4>{{ identityService.user.profile['given_name'] + ' ' + identityService.user.profile['family_name'] }}</h4></a>\r\n\t</div>\r\n\t<div class=\"panel-collapse collapse in\" id=\"tokenView\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<div class=\"form-horizontal\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"aud\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Audience of the token. When the token is issued to a client application, the audience is the client_id of the client.\">Audience ID</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"aud\" class=\"form-control\" disabled [value]=\"identityService.user.profile['aud']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"iss\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Identifies the token issuer\">Issuer</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"iss\" class=\"form-control\" disabled [value]=\"identityService.user.profile['iss']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"iat\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Issued at time. The time when the JWT was issued. The time is represented as the number of seconds from January 1, 1970 (1970-01-01T0:0:0Z) UTC until the time the token was issued.\">Issued At</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"iat\" class=\"form-control\" disabled [value]=\"getDateString(identityService.user.profile['iat'])\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['nbf']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"nbf\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Not before time. The time when the token becomes effective. For the token to be valid, the current date/time must be greater than or equal to the Nbf value. The time is represented as the number of seconds from January 1, 1970 (1970-01-01T0:0:0Z) UTC until the time the token was issued.\">Not Valid Before</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"nbf\" class=\"form-control\" disabled [value]=\"getDateString(identityService.user.profile['nbf'])\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"exp\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Expiration time. The time when the token expires. For the token to be valid, the current date/time must be less than or equal to the exp value. The time is represented as the number of seconds from January 1, 1970 (1970-01-01T0:0:0Z) UTC until the time the token was issued.\">Expires</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"exp\" class=\"form-control\" disabled [value]=\"getDateString(identityService.user.profile['exp'])\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['ver']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"ver\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Version. The version of the JWT token, typically 1.0.\">Version</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"ver\" class=\"form-control\" disabled [value]=\"identityService.user.profile['ver']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['tid']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"tid\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Tenant identifier (ID) of the Azure AD tenant that issued the token.\">Tenant Identifier</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"tid\" class=\"form-control\" disabled [value]=\"identityService.user.profile['tid']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['amr']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"amr\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"\">Amr</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"amr\" class=\"form-control\" disabled [value]=\"identityService.user.profile['amr']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"roles\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"\">Roles</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"roles\" class=\"form-control\" disabled [value]=\"identityService.user.profile['roles']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['oid']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"oid\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Object identifier (ID) of the user object in Azure AD.\">Object Identifier</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"oid\" class=\"form-control\" disabled [value]=\"identityService.user.profile['oid']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['email']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"upn\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Email Address\">Email</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"email\" class=\"form-control\" disabled [value]=\"identityService.user.profile['email']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['upn']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"upn\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"User principal name of the user.\">User Principal Name</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"upn\" class=\"form-control\" disabled [value]=\"identityService.user.profile['upn']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['unique_name']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"unique_name\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"A unique identifier for that can be displayed to the user. This is usually a user principal name (UPN).\">Unique Name</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"unique_name\" class=\"form-control\" disabled [value]=\"identityService.user.profile['unique_name']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"sub\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Token subject identifier. This is a persistent and immutable identifier for the user that the token describes. Use this value in caching logic.\">Subject Identifier</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"sub\" class=\"form-control\" disabled [value]=\"identityService.user.profile['sub']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['family_name']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"family_name\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"User’s last name or surname. The application can display this value.\">Last Name</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"family_name\" class=\"form-control\" disabled [value]=\"identityService.user.profile['family_name']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['given_name']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"given_name\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"User’s first name. The application can display this value.\">First Name</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"given_name\" class=\"form-control\" disabled [value]=\"identityService.user.profile['given_name']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"nonce\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"\">One Use Security Key</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"nonce\" class=\"form-control\" disabled [value]=\"identityService.user.profile['nonce']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['pwd_exp']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"pwd_exp\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"\">Password Expires</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"pwd_exp\" class=\"form-control\" disabled [value]=\"identityService.user.profile['pwd_exp']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"identityService.user.profile['pwd_url']\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"pwd_url\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"\">Password Change URL</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"pwd_url\" class=\"form-control\" disabled [value]=\"identityService.user.profile['pwd_url']\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t<label for=\"aud\" class=\"control-label text-info\" data-toggle=\"tooltip\" title=\"Raw header options with token that can be cut and pasted into tools such as Postman or Fiddler to test secured API endpoints.\">Headers</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t<textarea rows=\"20\" class=\"form-control\" disabled>{{ 'Content-Type: application/json\\nAuthorization: Bearer ' + identityService.token }}</textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel-footer\">\r\n\t\t<button class=\"btn btn-default\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</button>\r\n\t\t<button class=\"btn btn-default\" (click)=\"renew()\"><i class=\"fa fa-cloud-download\"></i> Renew</button>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/token/token.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var $ = __webpack_require__("../../../../jquery/dist/jquery.js");
__webpack_require__("../../../../bootstrap/dist/js/npm.js");
var identity_service_1 = __webpack_require__("../../../../../src/app/services/identity.service.ts");
var TokenComponent = /** @class */ (function () {
    function TokenComponent(_location, _router, identityService) {
        this._location = _location;
        this._router = _router;
        this.identityService = identityService;
    }
    TokenComponent.prototype.ngOnInit = function () {
        //Initialize tooltips just for this component
        $(document).ready(function () {
            $('my-token [data-toggle="tooltip"]').tooltip({ container: 'body' });
        });
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
        // Remove token from both memory and local storage
        this.identityService.clearToken();
        // Redirect back to the home page now that there is no longer token info to display
        this._router.navigate(['home']);
    };
    TokenComponent.prototype.renew = function () {
        // Test renewing a currently valid token without UI
        this.identityService.getToken().subscribe();
        // Should refresh the screen after a second (or after token has been replaced)
    };
    ;
    TokenComponent = __decorate([
        core_1.Component({
            selector: 'my-token',
            template: __webpack_require__("../../../../../src/app/components/token/token.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof identity_service_1.IdentityService !== "undefined" && identity_service_1.IdentityService) === "function" && _c || Object])
    ], TokenComponent);
    return TokenComponent;
    var _a, _b, _c;
}());
exports.TokenComponent = TokenComponent;
//# sourceMappingURL=token.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var identity_service_1 = __webpack_require__("../../../../../src/app/services/identity.service.ts");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(_identityService) {
        this._identityService = _identityService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (this._identityService.token) {
            // Clone the request to add the new header.
            var authReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + this._identityService.token } });
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof identity_service_1.IdentityService !== "undefined" && identity_service_1.IdentityService) === "function" && _a || Object])
    ], AuthInterceptor);
    return AuthInterceptor;
    var _a;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/services/identity.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var AuthenticationContext = __webpack_require__("../../../../adal-angular/lib/adal.js");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var IdentityService = /** @class */ (function () {
    function IdentityService(_settingsService) {
        this._settingsService = _settingsService;
        this.token = null;
        this.user = null;
        this.Roles = {
            Admin: "Admin",
            User: "User",
        };
    }
    IdentityService.prototype.clearToken = function () {
        this.token = null;
        this.user = null;
    };
    IdentityService.prototype.getToken = function () {
        var _this = this;
        //Gets the current token for the signed in user
        return this._settingsService.getSettings()
            .do(function (settings) {
            _this.context = new AuthenticationContext({
                clientId: settings.azureAuthProvider.clientId,
                tenant: settings.azureAuthProvider.tenant,
                cacheLocation: "localStorage",
                extraQueryParameter: "domain_hint=" + settings.azureAuthProvider.domainHint,
                expireOffsetSeconds: 900 // 15 minutes.  For testing set to 3480 = 58 min so should time out after 2 minutes
            });
            if (_this.context.isCallback(window.location.hash)) {
                _this.context.handleWindowCallback();
            }
            else {
                var token = _this.context.getCachedToken(settings.azureAuthProvider.clientId);
                var user = _this.context.getCachedUser();
                if (!token || token.length === 0 || !user) {
                    _this.context.login();
                    return Observable_1.Observable.throw('Token or User not in cache so starting login');
                }
            }
            try {
                _this.context.acquireToken(settings.azureAuthProvider.clientId, function (error, token) {
                    if (error) {
                        return Observable_1.Observable.throw('Error aquiring token - ' + error);
                    }
                    else {
                        _this.token = token;
                        return Observable_1.Observable.of(token);
                    }
                });
            }
            catch (error) {
                _this.context.login();
                return Observable_1.Observable.throw('Error during aquiring token so starting login - ' + error);
            }
        })
            .map(function (res) { return _this.token; })
            .catch(this.handleError);
    };
    IdentityService.prototype.getUser = function () {
        var _this = this;
        return this.getToken()
            .do(function (token) {
            _this.context.getUser(function (msg, user) {
                if (msg) {
                    return Observable_1.Observable.throw('Error getting user - ' + msg);
                }
                else {
                    _this.user = user;
                    return Observable_1.Observable.of(user);
                }
            });
        })
            .map(function (res) { return _this.user; })
            .catch(this.handleError);
    };
    IdentityService.prototype.getRoles = function () {
        return this.getUser()
            .map(function (user) { return user.profile["roles"]; })
            .catch(this.handleError);
    };
    IdentityService.prototype.isInAllRoles = function () {
        var neededRoles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            neededRoles[_i] = arguments[_i];
        }
        return this.getRoles()
            .map(function (roles) {
            roles = roles.toLocaleLowerCase();
            return neededRoles.every(function (neededRole) { return roles.includes(neededRole.toLocaleLowerCase()); });
        })
            .catch(this.handleError);
    };
    IdentityService.prototype.isInRole = function (neededRole) {
        neededRole = neededRole.toLocaleLowerCase();
        return this.getRoles()
            .map(function (roles) {
            roles = roles.toLocaleLowerCase();
            return roles.includes(neededRole);
        })
            .catch(this.handleError);
    };
    IdentityService.prototype.handleError = function (error) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return Observable_1.Observable.throw(error || 'Server error');
    };
    IdentityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _a || Object])
    ], IdentityService);
    return IdentityService;
    var _a;
}());
exports.IdentityService = IdentityService;
//# sourceMappingURL=identity.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/logging.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../common/@angular/common/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                var elapsed = Date.now() - started;
                console.log("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        });
    };
    LoggingInterceptor = __decorate([
        core_1.Injectable()
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var CONFIG = __webpack_require__("../../../../../src/settings.json");
var SettingsService = /** @class */ (function () {
    // Assumes HTTP_PROVIDERS was added as a provider at a higher level
    function SettingsService(http) {
        this.http = http;
        this.settings = null;
        this._settingsUrl = 'api/settings';
        //Production will request settings from the server API, but development will pull the same settings directly from the settings file since node is not running in webpack dev
        if (process.env.ENV !== 'production') {
            this.settings = CONFIG;
        }
    }
    SettingsService.prototype.getSettings = function () {
        var _this = this;
        if (this.settings) {
            // Return existing settings as an observable
            return Observable_1.Observable.of(this.settings);
        }
        else {
            // Get settings from API
            return this.http.get(this._settingsUrl)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.settings = data; // Save the settings inside the service
            })
                .catch(function (error) {
                return Observable_1.Observable.throw('Error getting settings - ' + error);
            });
        }
    };
    SettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], SettingsService);
    return SettingsService;
    var _a;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/app/shared-module/components/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"now\" [attr.aria-valuemin]=\"min\" [attr.aria-valuemax]=\"max\" [style.width]=\"now/10 + '%'\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared-module/components/progress-bar/progress-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.now = 0;
        this.min = 0;
        this.max = 1000;
    }
    ProgressBarComponent.prototype.ngOnDestroy = function () {
        // Stop the client side processing
        clearInterval(this._interval);
    };
    ProgressBarComponent.prototype.ngOnInit = function () {
        // Animate the progress bar every 100 milliseconds
        var _this = this;
        this._interval = setInterval(function () {
            _this.now++;
            if (_this.now > _this.max) {
                // Start over
                _this.now = _this.min;
            }
        }, 100);
    };
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'progress-bar',
            template: __webpack_require__("../../../../../src/app/shared-module/components/progress-bar/progress-bar.component.html")
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;
//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-module/pipes/filter-objects.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FilterObjectsPipe = /** @class */ (function () {
    function FilterObjectsPipe() {
    }
    // Filters out any object where none of its properties contain the passed in search string
    FilterObjectsPipe.prototype.transform = function (input, query) {
        if (input != null && query != null && query.length > 0) {
            return input.filter(function (item) {
                for (var key in item) {
                    if (typeof item[key] === 'string') {
                        var inputLower = item[key].toLowerCase();
                        var queryLower = query.toLowerCase();
                        if (inputLower.indexOf(queryLower) !== -1) {
                            return true;
                        }
                    }
                }
            });
        }
        else {
            return input;
        }
    };
    FilterObjectsPipe = __decorate([
        core_1.Pipe({ name: 'filterObjects' })
    ], FilterObjectsPipe);
    return FilterObjectsPipe;
}());
exports.FilterObjectsPipe = FilterObjectsPipe;
//# sourceMappingURL=filter-objects.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared-module/pipes/sort-objects.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SortObjectsPipe = /** @class */ (function () {
    function SortObjectsPipe() {
    }
    // Currently can only sort where (typeof input[field] === "string")
    // Will enhance later to support numbers and dates
    SortObjectsPipe.prototype.transform = function (input, field, desc) {
        if (desc === void 0) { desc = false; }
        if (input && field) {
            return input.sort(function (a, b) {
                if (a[field] < b[field]) {
                    return desc ? 1 : -1;
                }
                if (b[field] < a[field]) {
                    return desc ? -1 : 1;
                }
                return 0;
            });
        }
        return input;
    };
    SortObjectsPipe = __decorate([
        core_1.Pipe({ name: 'sortObjects' })
    ], SortObjectsPipe);
    return SortObjectsPipe;
}());
exports.SortObjectsPipe = SortObjectsPipe;
//# sourceMappingURL=sort-objects.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared-module/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var progress_bar_component_1 = __webpack_require__("../../../../../src/app/shared-module/components/progress-bar/progress-bar.component.ts");
var filter_objects_pipe_1 = __webpack_require__("../../../../../src/app/shared-module/pipes/filter-objects.pipe.ts");
var sort_objects_pipe_1 = __webpack_require__("../../../../../src/app/shared-module/pipes/sort-objects.pipe.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            exports: [
                filter_objects_pipe_1.FilterObjectsPipe,
                progress_bar_component_1.ProgressBarComponent,
                sort_objects_pipe_1.SortObjectsPipe
            ],
            declarations: [
                filter_objects_pipe_1.FilterObjectsPipe,
                progress_bar_component_1.ProgressBarComponent,
                sort_objects_pipe_1.SortObjectsPipe
            ],
            imports: [
                common_1.CommonModule
            ],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/settings.json":
/***/ (function(module, exports) {

module.exports = {"apiUrl":"https://apidev2.azurewebsites.net","azureAuthProvider":{"aadInstance":"https://login.microsoftonline.com/{0}","clientId":"bd065891-b008-4968-9b26-5f2bcb9c1b66","domainHint":"pulte.com","tenant":"pulte.onmicrosoft.com"}}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map