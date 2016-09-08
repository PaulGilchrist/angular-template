import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home.component'
import { TokenComponent } from './login/token.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'demos', loadChildren: 'app/demos/demos.module#DemosModule' }, //This one is a little slow loading
    { path: 'token', component: TokenComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'help', loadChildren: 'app/help/help.module#HelpModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);