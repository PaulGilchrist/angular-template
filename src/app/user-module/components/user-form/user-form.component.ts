import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
    selector: 'app-user-form',
    styleUrls: ['./user-form.component.scss'],
    templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

    inputUser: User;
    formUser: User;
    shrink =  window.innerWidth < 768;
    status = 'new';

    @Input() set user(user: User) {
        this.inputUser = user;
        if (user) {
            this.formUser = {
                ...user
            };
        } else {
            this.formUser = null;
        }
    }

    // Bubble up that the form was saved
    @Output() readonly save = new EventEmitter<User>();

    ngOnInit(): void {
        // Track screen size  changes to adjust button size
        window.onresize = () => this.shrink = window.innerWidth < 768;
    }

    saveForm(): void {
        Object.assign(this.inputUser, this.formUser);
        // Bubble up that this user has been saved in case the parent is interested
        this.save.emit(this.inputUser);
        this.status = 'saved';
    }

    cancelForm(): void {
        // Reset the form back to the original user details
        Object.assign(this.formUser, this.inputUser);
        this.status = 'canceled';
    }

}
