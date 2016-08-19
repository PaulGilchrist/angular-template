"use strict";
var help_component_1 = require('./help.component');
var help_home_component_1 = require('./help-home.component');
exports.helpRoutes = [
    {
        path: '',
        redirectTo: '/help',
        pathMatch: 'full'
    },
    {
        path: 'help',
        component: help_component_1.HelpComponent,
        children: [
            { path: '', component: help_home_component_1.HelpHomeComponent },
        ]
    }
];
//# sourceMappingURL=help.routes.js.map