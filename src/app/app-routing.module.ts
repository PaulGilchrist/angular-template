import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
    // Static Loading
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    // Lazy Loading
    { path: 'main', loadChildren: () => import('./main-module/main.module').then(m => m.MainModule) },
    { path: 'demos', loadChildren: () => import('./demos-module/demos.module').then(m => m.DemosModule) },
    { path: 'user', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule) },
    { path: 'help', loadChildren: () => import('./help-module/help.module').then(m => m.HelpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
