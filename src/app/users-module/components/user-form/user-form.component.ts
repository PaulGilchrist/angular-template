import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../models/user.model';
import { EmailValidator } from '../../../../../node_modules/@angular/forms';
import { now } from '../../../../../node_modules/@types/d3';

@Component({
	selector: 'app-user-form',
	styleUrls: ['./user-form.component.scss'],
	templateUrl: './user-form.component.html'
})
export class UserFormComponent {

	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	dob: Date;

	inputUser: User;

	@Input()
	set user(user: User) {
		this.inputUser = user;
		if(user) {
			this.firstName=user.firstName;
			this.lastName=user.lastName;
			this.email=user.email;
			this.phone=user.phone;
			this.dob=new Date(Date.now());
		}
	}

	// Bubble up that the form was saved
	@Output() save = new EventEmitter<User>();

	saveForm(): void {
		// For the purpose of this demo, we are not going to save directly back to the API, but rather to the in memory list
		this.inputUser.firstName = this.firstName;
		this.inputUser.lastName = this.lastName;
		this.inputUser.email = this.email;
		this.inputUser.phone = this.phone;
		// Bubble up that this user has been saved in case the parent is interested
		this.save.emit(this.inputUser);
		// Remove the original animation before adding a different one
		const userForm = $('#user-form');
		userForm.removeClass('animated slideInLeft');
		// Add the new animation that will remove itself once completed
		// No typings for animate.css
		(<any>userForm).animateCss('bounce');
	}

	cancelForm(): void {
		// Reset the form back to the original user details
		this.firstName=this.inputUser.firstName;
		this.lastName=this.inputUser.lastName;
		this.email=this.inputUser.email;
		this.phone=this.inputUser.phone;
		// Remove the original animation before adding a different one
		const userForm = $('#user-form');
		userForm.removeClass('animated slideInLeft');
		// Add the new animation that will remove itself once completed
		(<any>userForm).animateCss('shake');
	}

}
