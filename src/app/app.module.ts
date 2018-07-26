import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AdalService, AdalGuard } from 'adal-angular4';

/* Shared Modules */
import { SharedModule } from './shared-module/shared.module';

/* App Root */
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { TokenComponent } from './components/token/token.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';

import { AuthInterceptor } from './services/auth.interceptor';
import { LoggingInterceptor } from './services/logging.interceptor';

import * as $ from 'jquery';
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
    	AppComponent,
		HomeComponent,
		TokenComponent,
		NavTopComponent
	],
	exports: [
		SharedModule
	],
	imports: [
    	BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([
				// Static Loading
				{ path: '', redirectTo: '/home', pathMatch: 'full' },
				{ path: 'home', component: HomeComponent },
				{ path: 'token', component: TokenComponent, canActivate: [AdalGuard] },
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
		AdalService,
		AdalGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true, }, // Time how long each http rerquests takes
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, } // Add token to all API requests
	]
})
export class AppModule { }
