import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import * as toastr from 'toastr';

import { SharedModule } from '../shared-module/shared.module';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserShellComponent } from './components/user-shell/user-shell.component';

import { UserService } from './services/user.service';

@NgModule({
	declarations: [
		AddressFormComponent,
		UserFormComponent,
		UserListComponent,
		UserShellComponent
	], // directives, components, and pipes owned by this NgModule
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forChild([
			{ path: '', component: UserShellComponent }
		]),
		SharedModule, // Required to leverage table sorting and filtering
	],
	providers: [
		UserService
	]
})
export class UserModule {}
