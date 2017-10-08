// Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, NoPreloading } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
/* Shared Modules */
import { SharedModule } from './shared-module/shared.module';
/* App Services */
import { IdentityService } from './services/identity.service';
/* App Root */
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/login/token.component';
import { TopNavComponent } from './components/nav/nav-top.component';

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
        IdentityService
    ]
})
export class AppModule {}
