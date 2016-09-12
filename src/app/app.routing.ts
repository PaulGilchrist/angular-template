import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home.component'
import { TokenComponent } from './login/token.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'demos',
        // Lazy load module and pack into separate webpack chunk
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./demos/demos.module').DemosModule);
            })
        })
    }, //This one is a little slow loading
    {
        path: 'token',
        component: TokenComponent
    },
    {
        path: 'user',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./user/user.module').UserModule);
            })
        })
    },
    {
        path: 'help',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./help/help.module').HelpModule);
            })
        })
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);