import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { Address } from '../../models/address.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: './app-user-shell',
    templateUrl: './user-shell.component.html'
})
export class UserShellComponent implements OnDestroy, OnInit {

    address: Address = null;
    addresses: Address[] = [];
    user: User = null;
    users: User[] = [];
    userSubscription: Subscription;

    constructor(public _userService: UserService) { }

    ngOnInit(): void {
        // React every time the list of users changes
        this.userSubscription = combineLatest([
            this._userService.getAddresses(),
            this._userService.getUsers()
        ]).subscribe(
            ([addresses, users]) => {
                this.addresses = addresses;
                this.users = users;
            }
        );
    }

    ngOnDestroy(): void {
        // Make sure all the users are saved to the API before leaving this component
        // Look for angular to release a better lifecycle hook than onDestroy for this
        //     Doing this earlier in the lifecycle would allow for leaving the page to be canceled
        const usersRequiringSave = this.users.filter(u => u.isDirty === true);
        if (usersRequiringSave.length > 0) {
            // Simulate saving the user changes
            this._userService.updateUsers();
        }
        this.userSubscription.unsubscribe();
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
        // Get the first address for this user
        const userAddresses = this._userService.getUserAddresses(user);
        if (userAddresses.length > 0) {
            this.address = userAddresses[0];
        }
    }

    reset() {
        this._userService.getUsers(true);
    }

}
