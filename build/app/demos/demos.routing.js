"use strict";
var router_1 = require('@angular/router');
//Components
var drag_demo_component_1 = require('./drag-demo.component');
var floor_demo_component_1 = require('./floor-demo.component');
var graph_demo_component_1 = require('./graph-demo.component');
var pdf_demo_component_1 = require('./pdf-demo.component');
exports.routing = router_1.RouterModule.forChild([
    { path: 'drag', component: drag_demo_component_1.DragDemoComponent },
    { path: 'floor', component: floor_demo_component_1.FloorDemoComponent },
    { path: 'graph', component: graph_demo_component_1.GraphDemoComponent },
    { path: 'pdf', component: pdf_demo_component_1.PdfDemoComponent },
]);

//# sourceMappingURL=demos.routing.js.map
