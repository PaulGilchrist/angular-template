import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
	selector: 'user-form',
	styleUrls: ['./user-form.component.css'],
	templateUrl: './user-form.component.html'
})
export class UserFormComponent {
	public isActive = false;
	public firstName: string;
	public lastName: string;
	public email: string;
	public phone: string;
	public dob: string;  // Date of Birth

	private _user: User = null;

	@Input()
	set user(user: User) {
		if (user) {
			this._user = user;
			this.firstName = user.firstName;
			this.lastName = user.lastName;
			this.email = user.email;
			this.phone = user.phone;
			this.dob = null;
			this.isActive = true;
		}
	}

	// Bubble up that the form was saved
	@Output() onSave = new EventEmitter<User>();

	save(): void {
		// Track when a user is modified
		window['appInsights'].trackEvent('UserModified');
		// For the purpose of this demo, we are not going to save directly back to the API, but rather to the in memory list
		this._user.firstName = this.firstName;
		this._user.lastName = this.lastName;
		this._user.email = this.email;
		this._user.phone = this.phone;
		// We will also set the user as isDirty so it can later update the API in bulk
		this._user.isDirty = true;
		// Bubble up that this user has been saved in case the parent is interested
		this.onSave.emit(this._user);
		// Remove the original animation before adding a different one
		const userForm = $('#user-form');
		userForm.removeClass('animated slideInLeft');
		// Add the new animation that will remove itself once completed
		// No typings for animate.css
		(<any>userForm).animateCss('bounce');
	}

	cancel(): void {
		// Reset the form back to the original user details
		this.firstName = this._user.firstName;
		this.lastName = this._user.lastName;
		this.email = this._user.email;
		this.phone = this._user.phone;
		const userForm = $('#user-form');
		// Remove the original animation before adding a different one
		userForm.removeClass('animated slideInLeft');
		// Add the new animation that will remove itself once completed
		// No typings for animate.css
		(<any>userForm).animateCss('shake');
	}
}
