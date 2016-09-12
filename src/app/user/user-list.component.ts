import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

declare var _: any;
declare var $: any;

@Component({
    moduleId: module.id.toString(),
    selector: 'user-list',
    styleUrls: ['user-list.component.css'],
    templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit, OnDestroy  {
    @Output() onSelect = new EventEmitter<User>();
    id: string;

    public errorMessage: string;
    public isListOpen: boolean;
    public isBusy: boolean;
    public sortType: string = 'firstName';
    public sortReverse: boolean = false;
    public searchString: string = '';

    constructor(public _userService: UserService) { }

    ngOnDestroy(): void {
        // Make sure all the users are saved to the API before leaving this component
        // Look for angular to release a better lifecycle hook than onDestroy for this
        //     Doing this earlier in the lifecycle would allow for leaving the page to be canceled
        let usersRequiringSave = _.where(this._userService.users, { isDirty: true });
        if (usersRequiringSave.length > 0) {
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
    }

    ngOnInit(): void {
        this.isBusy = true;
        this.getUsers();
        this.isListOpen = true;
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
        this._userService.getUsers()
            // We are not going to store the users in this component but rather leave them in the service itself
            //     This means we are subscribing not to get the data, but to know when the service has the data
            .subscribe(users => this.isBusy = false, error => this.errorMessage = <any>error);
    }

    public selectUser(user: User): void {
        // Bubble up to the parent that a new user was selected
        this.onSelect.emit(user);
    }

}
