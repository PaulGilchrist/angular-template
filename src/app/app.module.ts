// Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
/* Shared Modules */
import { SharedModule } from './shared-module/shared.module';
/* App Routing */
import { routing } from './app.routing';
/* App Services */
import { IdentityService } from './services/identity.service';
/* App Root */
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { TokenComponent } from './login/token.component';
import { TopNavComponent } from './nav/nav-top.component';

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
        RouterModule,
        SharedModule,
        routing
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: Window, useValue: window },
        IdentityService
    ]
})
export class AppModule {}
