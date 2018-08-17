import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html'
})
export class UserListComponent {
	@Output() select = new EventEmitter<User>();
	id: string;

	errorMessage: string;
	isListOpen = true;  // Used to toggle open and closed the bootstrap panel
	sortType = 'firstName';
	sortReverse = false;
	searchString = '';
	selectedUser: User = null;

	@Input() users: User[];

	changeSort(newSortType: string) {
		if (newSortType === this.sortType) {
			// clicking the same column twice toggles the sort order
			this.sortReverse = !this.sortReverse;
		} else {
			this.sortType = newSortType;
		}
	}

	selectUser(user: User): void {
		// Keep track of the selected user so it can be highlighted in the HTML
		this.selectedUser = user;
		// Bubble up to the parent that a new user was selected
		this.select.emit(user);
	}

}
