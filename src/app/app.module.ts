import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdalService, AdalGuard } from 'adal-angular4';
import { ToastrModule } from 'ngx-toastr';

/* Shared Modules */
import { SharedModule } from './shared-module/shared.module';

/* App Root */
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/token/token.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';

import { AppInsightsService } from './services/app-insights.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoggingInterceptor } from './services/logging.interceptor';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, TokenComponent, NavTopComponent],
  exports: [SharedModule],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
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
      ],
      { preloadingStrategy: NoPreloading }
    ),
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AdalService,
    AdalGuard,
    AppInsightsService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }, // Time how long each http rerquests takes
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Add token to all API requests
  ]
})
export class AppModule {}
