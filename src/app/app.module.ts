import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SharedModule } from './shared-module/shared.module';

// Providers
import { AppInsightsService } from './services/app-insights.service';
//import { AuthInterceptor } from './services/auth.interceptor';
//import { LoggingInterceptor } from './services/logging.interceptor';

// Declarations
import { AppComponent } from './components/app/app.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';

// Other
import { environment } from '../environments/environment';
import { ConnectivityService } from './shared-module/services/connectivity.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavTopComponent
    ],
    exports: [],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [environment.apiUrl],
                sendAccessToken: true
            }
        }),
        ServiceWorkerModule.register('sw-worker.js', { enabled: environment.production }), // Replaced ngsw-worker.js to add ability to open application from notification
        SharedModule
    ],
    providers: [
        AppInsightsService,
        ConnectivityService
        //{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }, // Time how long each http rerquests takes
        //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Add token to all API requests
    ]
})
export class AppModule { }
