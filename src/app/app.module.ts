/// <reference path="../../typings/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { HttpModule }    from '@angular/http';
import { RouterModule }    from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { appRouting } from './app.routing';
import { IdentityService } from './services/identity.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { TokenComponent } from './login/token.component';
import { TopNavComponent } from './nav/nav-top.component';
//App modules
import { DemosModule } from './demos/demos.module';
import { HelpModule } from './help/help.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TokenComponent,
        TopNavComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        BrowserModule,
        //FormsModule,
        //HttpModule,
        RouterModule,
        DemosModule,
        HelpModule,
        UserModule,
        appRouting
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        IdentityService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}