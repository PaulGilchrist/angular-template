"use strict";
var router_1 = require('@angular/router');
//Child Routes
var help_routing_1 = require('./help/help.routing');
//Components
var home_component_1 = require('./home.component');
var drag_demo_component_1 = require('./demos/drag-demo.component');
var floor_demo_component_1 = require('./demos/floor-demo.component');
var graph_demo_component_1 = require('./demos/graph-demo.component');
var pdf_demo_component_1 = require('./demos/pdf-demo.component');
var token_component_1 = require('./login/token.component');
var user_home_component_1 = require('./user/user-home.component');
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'demos/drag', component: drag_demo_component_1.DragDemoComponent },
    { path: 'demos/floor', component: floor_demo_component_1.FloorDemoComponent },
    { path: 'demos/graph', component: graph_demo_component_1.GraphDemoComponent },
    { path: 'demos/pdf', component: pdf_demo_component_1.PdfDemoComponent },
    { path: 'token', component: token_component_1.TokenComponent },
    { path: 'user', component: user_home_component_1.UserHomeComponent }
].concat(help_routing_1.helpRoutes);
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
