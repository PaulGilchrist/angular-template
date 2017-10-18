// Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, NoPreloading } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
/* Shared Modules */
import { SharedModule } from './shared-module/shared.module';
/* App Services */
import { IdentityService } from './services/identity.service';
import { SettingsService } from './services/settings.service';
/* App Root */
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/token/token.component';
import { TopNavComponent } from './components/nav/nav-top.component';

import { AuthInterceptor } from './services/auth.interceptor';
import { LoggingInterceptor } from './services/logging.interceptor';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        TokenComponent,
        TopNavComponent
    ],
    exports: [
        SharedModule
    ],
    imports: [
		BrowserModule,
		HttpModule,
        RouterModule.forRoot([
                // Static Loading
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: HomeComponent },
                { path: 'token', component: TokenComponent },
                // Lazy Loading
                { path: 'demos', loadChildren: './demos-module/demos.module#DemosModule' },
                { path: 'user', loadChildren: './users-module/user.module#UserModule' },
                { path: 'help', loadChildren: './help-module/help.module#HelpModule' },
            ],
            {preloadingStrategy: NoPreloading}
        ),
        SharedModule
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: Window, useValue: window },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, }, // Add token to all API requests
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true, }, // Time how long each http rerquests takes
		IdentityService,
		SettingsService
    ]
})
export class AppModule {}
