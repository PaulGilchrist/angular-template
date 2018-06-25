import { Component, Input, Output } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
	selector: './user-home',
	templateUrl: './user-home.component.html'
})
export class UserHomeComponent {
	user: User;

	onSelect(user: User): void {
		// Let the UserFormComponent know to populate user details and scroll it into view
		window.scrollTo(0, 0);
		this.user = user;
	}

}
