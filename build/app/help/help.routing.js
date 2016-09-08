"use strict";
var router_1 = require('@angular/router');
var help_component_1 = require('./help.component');
var help_home_component_1 = require('./help-home.component');
exports.routing = router_1.RouterModule.forChild([
    {
        path: '',
        component: help_component_1.HelpComponent,
        children: [
            { path: '', component: help_home_component_1.HelpHomeComponent }
        ]
    }
]);

//# sourceMappingURL=help.routing.js.map
