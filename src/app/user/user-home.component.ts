import { Component, Input, Output } from '@angular/core';

import { AddressFormComponent } from './address-form.component'
import { User } from '../models/user.model';
import { UserFormComponent } from './user-form.component'
import { UserListComponent } from './user-list.component'

@Component({
    directives: [AddressFormComponent, UserFormComponent, UserListComponent],
    selector: 'user-home',
    templateUrl: 'app/user/user-home.component.html'
})
export class UserHomeComponent {
    user: User;
    onSelect(user: User): void {
        //Let the UserFormComponent know to populate user details and scroll it into view
        window.scrollTo(0,0);
        this.user = user;
    }
}