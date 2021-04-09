import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './authGuard';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastrModule } from 'ngx-toastr';

// Providers
import { AppInsightsService } from './services/app-insights.service';
import { ConnectivityService } from 'angular-connectivity';
//import { AuthInterceptor } from './services/auth.interceptor';
//import { LoggingInterceptor } from './services/logging.interceptor';



// Declarations
import { AppComponent } from './components/app/app.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';

// Other
import { environment } from '../environments/environment';

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
        ToastrModule.forRoot(),
        ServiceWorkerModule.register('sw-worker.js', { enabled: environment.production }) // Replaced ngsw-worker.js to add ability to open application from notification
    ],
    providers: [
        AppInsightsService,
        AuthGuard,
        ConnectivityService,
        //{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }, // Time how long each http rerquests takes
        //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Add token to all API requests
    ]
})
export class AppModule { }
