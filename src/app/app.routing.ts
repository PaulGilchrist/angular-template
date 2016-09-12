import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './home.component';
import { TokenComponent } from './login/token.component';

const routes: Routes = [
    // Static Loading
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'token', component: TokenComponent },
    // Lazy Loading
    {
        path: 'demos',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./demos/demos.module').DemosModule);
            });
        })
    },
    {
        path: 'user',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./user/user.module').UserModule);
            });
        })
    },
    {
        path: 'help',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./help/help.module').HelpModule);
            });
        })
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
