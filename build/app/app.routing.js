"use strict";
var router_1 = require('@angular/router');
//Components
var home_component_1 = require('./home.component');
var token_component_1 = require('./login/token.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'demos', loadChildren: 'app/demos/demos.module#DemosModule' },
    { path: 'token', component: token_component_1.TokenComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'help', loadChildren: 'app/help/help.module#HelpModule' },
];
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=app.routing.js.map
