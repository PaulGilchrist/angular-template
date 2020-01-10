import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

// Providers
import { AdalGuard } from 'adal-angular4';

// Declarations
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/token/token.component';

const routes: Routes = [
    // Static Loading
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'token', component: TokenComponent, canActivate: [AdalGuard] },
    // Lazy Loading
    {
        path: 'demos',
        loadChildren: () => import('./demos-module/demos.module').then(m => m.DemosModule)
    },
    { path: 'user', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule) },
    { path: 'help', loadChildren: () => import('./help-module/help.module').then(m => m.HelpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }