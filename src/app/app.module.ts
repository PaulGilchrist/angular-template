import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Shared Modules */
import { SharedModule } from './shared-module/shared.module';
/* App Services */
import { IdentityService } from './services/identity.service';
/* App Root */
import { AppComponent } from './components/app/app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppTokenComponent } from './components/app-token/app-token.component';
import { AppNavTopComponent } from './components/app-nav/app-nav-top.component';

import { AuthInterceptor } from './services/auth.interceptor';
import { LoggingInterceptor } from './services/logging.interceptor';

import * as $ from 'jquery';
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
    	AppComponent,
		AppHomeComponent,
		AppTokenComponent,
		AppNavTopComponent
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
				{ path: 'home', component: AppHomeComponent },
				{ path: 'token', component: AppTokenComponent },
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
		IdentityService,
		{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true, }, // Time how long each http rerquests takes
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, } // Add token to all API requests
	]
})
export class AppModule { }
