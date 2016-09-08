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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var app_routing_1 = require('./app.routing');
var address_form_component_1 = require('./user/address-form.component');
var app_component_1 = require('./app.component');
var d3_graph_component_1 = require('./components/d3-graph.component');
var drag_demo_component_1 = require('./demos/drag-demo.component');
var dragula_directive_1 = require('./directives/dragula.directive');
var filter_objects_pipe_1 = require('./pipes/filter-objects.pipe');
var floor_demo_component_1 = require('./demos/floor-demo.component');
var graph_demo_component_1 = require('./demos/graph-demo.component');
var help_component_1 = require('./help/help.component');
var help_home_component_1 = require('./help/help-home.component');
var help_nav_component_1 = require('./help/help-nav.component');
var home_component_1 = require('./home.component');
var modal_demo_component_1 = require('./demos/modal-demo.component');
var pdf_demo_component_1 = require('./demos/pdf-demo.component');
var progress_bar_component_1 = require('./nav/progress-bar.component');
var sort_objects_pipe_1 = require('./pipes/sort-objects.pipe');
var token_component_1 = require('./login/token.component');
var nav_top_component_1 = require('./nav/nav-top.component');
var user_form_component_1 = require('./user/user-form.component');
var user_list_component_1 = require('./user/user-list.component');
var user_home_component_1 = require('./user/user-home.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                address_form_component_1.AddressFormComponent,
                app_component_1.AppComponent,
                d3_graph_component_1.D3GraphComponent,
                drag_demo_component_1.DragDemoComponent,
                dragula_directive_1.Dragula,
                filter_objects_pipe_1.FilterObjectsPipe,
                floor_demo_component_1.FloorDemoComponent,
                graph_demo_component_1.GraphDemoComponent,
                help_component_1.HelpComponent,
                help_home_component_1.HelpHomeComponent,
                help_nav_component_1.HelpNavComponent,
                home_component_1.HomeComponent,
                modal_demo_component_1.ModalDemoComponent,
                pdf_demo_component_1.PdfDemoComponent,
                progress_bar_component_1.ProgressBarComponent,
                sort_objects_pipe_1.SortObjectsPipe,
                token_component_1.TokenComponent,
                nav_top_component_1.TopNavComponent,
                user_form_component_1.UserFormComponent,
                user_list_component_1.UserListComponent,
                user_home_component_1.UserHomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
