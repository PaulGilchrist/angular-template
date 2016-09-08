/// <reference path="../../typings/index.d.ts" />
//Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
/* App Routing */
import { routing } from './app.routing';
/* App Services */
import { IdentityService } from './services/identity.service';
/* App Root */
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { TokenComponent } from './login/token.component';
import { TopNavComponent } from './nav/nav-top.component';
/* Modules to pre-load.  Not needed if lazy loading */
import { DemosModule } from './demos/demos.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        TokenComponent,
        TopNavComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        DemosModule,
        routing
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        IdentityService
    ]
})
export class AppModule {}