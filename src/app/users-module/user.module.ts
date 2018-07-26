import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import * as $ from 'jquery';
import 'animate.css';
import { confirm, alert } from 'jquery-confirm';
import * as _ from 'underscore';
import * as toastr from 'toastr';

import { SharedModule } from '../shared-module/shared.module';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserTestComponent } from './components/user-test/user-test.component';

import { UserService } from './services/user.service';

@NgModule({
	declarations: [
		AddressFormComponent,
		UserFormComponent,
		UserListComponent,
		UserHomeComponent,
		UserTestComponent
	], // directives, components, and pipes owned by this NgModule
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forChild([
			{ path: '', component: UserHomeComponent }
		]),
		SharedModule, // Required to leverage table sorting and filtering
	],
	providers: [
		UserService
	]
})
export class UserModule {}
