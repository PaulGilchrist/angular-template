import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { Address } from '../../models/address.model';
import { User } from '../../models/user.model';
import { ConnectivityService } from '../../../services/connectivity.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: './app-user-shell',
    templateUrl: './user-shell.component.html'
})
export class UserShellComponent implements OnDestroy, OnInit {

    address: Address = null;
    addresses: Address[] = [];
    isConnected = true;
    user: User = null;
    users: User[] = [];

    subscriptions: Subscription[] = [];

    userSubscription: Subscription;

    constructor(private connectivityService: ConnectivityService, private toastrService: ToastrService, public _userService: UserService) { }

    ngOnInit(): void {
        // React every time the list of users changes
        this.subscriptions.push(this._userService.getUsers().subscribe(
            users => this.users = users
        ));
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => this.isConnected = isConnected));
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
        // Unsubscribe all subscriptions to avoid memory leak
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    onSaveUser(user: User): void {
        // We have made changes to this user, so mark it as dirty
        user.isDirty = true;
        // We will not persist the user back to the API, but rather keep all changes in memory for later bulk update
        if(this.isConnected) {
            this.toastrService.success('User saved', 'Save User');
        } else {
            this.toastrService.success('User changes saved locally since no Internet connection is currently available.  Once connected, changes will be uploaded', 'Save User');
        }
    }

    onSelect(user: User): void {
        // Let the UserFormComponent know to populate user details and scroll it into view
        window.scrollTo(0, 0);
        this.user = user;
        // Get the first address for this user
        if (user.addresses && user.addresses.length > 0) {
            this.address = user.addresses[0];
        }
    }

    reset() {
        this._userService.getUsers(true);
    }

}
