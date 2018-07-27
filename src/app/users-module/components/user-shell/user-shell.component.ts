import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Address } from '../../models/address.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
	selector: './app-user-shell',
	templateUrl: './user-shell.component.html'
})
export class UserShellComponent implements OnDestroy, OnInit {

	address: Address = null;
	user: User = null;
	users: User[];

	private usersSubscription: Subscription;

	constructor(public _userService: UserService) { }

	ngOnInit(): void {
		this.getUsers();
	}

	ngOnDestroy(): void {
		// Make sure all the users are saved to the API before leaving this component
		// Look for angular to release a better lifecycle hook than onDestroy for this
		//     Doing this earlier in the lifecycle would allow for leaving the page to be canceled
		const usersRequiringSave = this.users.filter(u => u.isDirty===true);
		if (usersRequiringSave.length > 0) {
			// Simulate saving the user changes
			this._userService.updateUsers();
		}
		// Remove any subscriptions before exiting component
		this.usersSubscription.unsubscribe();
	}

	getUsers(): void {
		this._userService.getUsers();
		this.usersSubscription = this._userService.users$.subscribe(users => this.users = users);
	}

	onSaveUser(user: User): void {
		// We have made changes to this user, so mark it as dirty
		user.isDirty = true;
		// We will not persist the user back to the API, but rather keep all changes in memory for later bulk update
	}

	onSelect(user: User): void {
		// Let the UserFormComponent know to populate user details and scroll it into view
		window.scrollTo(0, 0);
		this.user = user;
		this._userService.getUserAddresses(user)
			.subscribe(addresses => this.address = addresses[0]);
	}

}
