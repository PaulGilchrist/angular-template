import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
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
                resolve(require('./demos-module/demos.module').DemosModule);
            });
        })
    },
    {
        path: 'user',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./users-module/user.module').UserModule);
            });
        })
    },
    {
        path: 'help',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./help-module/help.module').HelpModule);
            });
        })
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});
