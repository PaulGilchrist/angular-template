import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import 'jquery';
import * as _ from 'underscore';
import { confirm, alert } from 'jquery-confirm';

// No typings for jquery-confirm
declare const $: {
	alert: Function,
	confirm: Function
};

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-user-list',
	styleUrls: ['./user-list.component.css'],
	templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit, OnDestroy  {
	@Output() select = new EventEmitter<User>();
	id: string;

	public errorMessage: string;
	public isListOpen: boolean;
	public isBusy: boolean;
	public sortType = 'firstName';
	public sortReverse = false;
	public searchString = '';

	users: User[];

	constructor(public _userService: UserService) { }

	ngOnInit(): void {
		this.getUsers();
		this.isListOpen = true;
	}

	ngOnDestroy(): void {
		// Make sure all the users are saved to the API before leaving this component
		// Look for angular to release a better lifecycle hook than onDestroy for this
		//     Doing this earlier in the lifecycle would allow for leaving the page to be canceled
		const usersRequiringSave = _.where(this.users, { isDirty: true });
		if (usersRequiringSave.length > 0) {
			// No typings for jquery-confirm
			$.confirm({
				title: 'Confirm!',
				content: 'Save all modified users?',
				confirmButtonClass: 'btn-info',
				cancelButtonClass: 'btn-danger',
				closeIcon: true,
				icon: 'fa fa-warning',
				confirm: function() {
					_.each(usersRequiringSave, function (user: any) {
						// Simulate saving the user changes
						user.isDirty = false;
					});
					$.alert({
						title: 'Saved!',
						content: 'All modified users have been saved',
						autoClose: 'confirm|1000',
						backgroundDismiss: true
					});
				},
				cancel: function() {
					$.alert({
						title: 'Canceled!',
						content: 'Modified users have not been saved',
						autoClose: 'confirm|1000',
						backgroundDismiss: true
					});
				}
			});
		}
		// Unsubscribe
		// this._userService.users$.unsubscribe();
	}

	public changeSort(newSortType: string) {
		if (newSortType === this.sortType) {
			// clicking the same column twice toggles the sort order
			this.sortReverse = !this.sortReverse;
		} else {
			this.sortType = newSortType;
		}
	}

	getUsers(): void {
		this.isBusy = true;
		this._userService.getUsers().subscribe(() => this.isBusy = false);
		this._userService.users$.subscribe(users => {
			// Copy the array so we do not update the original object in the service
			this.users = jQuery.extend(true, [], users);
		});
	}

	public selectUser(user: User): void {
		// Bubble up to the parent that a new user was selected
		this.select.emit(user);
	}

}
