import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { ConnectivityService } from 'angular-connectivity'; // My NPM Package
import { Address } from '../../models/address.model';
import { State } from '../../models/state.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-shell',
    templateUrl: './user-shell.component.html'
})
export class UserShellComponent implements OnDestroy, OnInit {
    address: Address = null;
    addresses: Address[] = [];
    isConnected = true;
    states: State[] = [];
    subscriptions: Subscription[] = [];
    user: User = null;
    users: User[] = [];
    userSubscription: Subscription;

    constructor(private connectivityService: ConnectivityService, private toastrService: ToastrService, public userService: UserService) { }

    ngOnInit(): void {
        // Keep track of network connectivity and update API if anything was only saved locally
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => {
            this.isConnected = isConnected;
            // See if there are any users cached locally that need to be sent to the API
            if (isConnected) {
                const dirtyUsersJson = localStorage.getItem('dirtyUsers');
                if (dirtyUsersJson) {
                    const dirtyUsers = JSON.parse(dirtyUsersJson) as User[];
                    // Save dirty users to API
                    dirtyUsers.forEach(u => this.onSaveUser(u));
                    localStorage.removeItem('dirtyUsers');
                }
            }
        }));
        this.subscriptions.push(this.userService.getStates().subscribe(
            states => this.states = states
        ));
        this.subscriptions.push(this.userService.getUsers(true).subscribe(
            users => this.users = users
        ));
    }

    ngOnDestroy(): void {
        // Unsubscribe all subscriptions to avoid memory leak
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    onSaveUser(user: User): void {
        if (this.isConnected) {
            // Save to API would be here
            this.userService.updateUser(user).subscribe(
                success => {
                    this.toastrService.success(`User '${user.firstName} ${user.lastName}' saved to API`, `Save User`);
                    console.log(`User '${user.firstName} ${user.lastName}' saved to API`);
                },
                error => {
                    console.error(`Error saving user '${user.firstName} ${user.lastName}' to API`, `Save User`);
                }
            );
        } else {
            // Find all users that are dirty and save to localStorage until connectivity is re-established
            user.isDirty = true;
            this.users.map(u => user.id === u.id ? user : u);
            localStorage.setItem('users', JSON.stringify(this.users));
            const dirtyUsers = this.users.filter(u => u.isDirty);
            localStorage.setItem('dirtyUsers', JSON.stringify(dirtyUsers));
            this.toastrService.success(`Offline - User '${user.firstName} ${user.lastName}' saved locally`, `Save User`);
            console.log(`Offline - User '${user.firstName} ${user.lastName}' saved locally.  Once connected, changes will be uploaded`);
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
        localStorage.removeItem('users');
        localStorage.removeItem('dirtyUsers');
        this.user = null;
        this.address = null;
        this.userService.getUsers(true);
        console.log(`User list reset`);
    }

}
