import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
    selector: 'app-user-form',
    styleUrls: ['./user-form.component.scss'],
    templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit, OnChanges {

    @Input() user: User = null;
    @Output() readonly save = new EventEmitter<User>(); // Bubble up that the form was saved

    formUser: User;
    shrink =  window.innerWidth < 768;
    status = 'new';

    ngOnInit(): void {
        // Track screen size  changes to adjust button size
        window.onresize = () => this.shrink = window.innerWidth < 768;
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if ({}.hasOwnProperty.call(changes, propName)) {
                switch (propName) {
                    case 'user':
                        if (changes[propName].currentValue) {
                            this.formUser = {
                                ...changes[propName].currentValue
                            };
                        } else {
                            this.formUser = null;
                        }
                        break;
                }
            }
        }
    }

    saveForm(): void {
        Object.assign(this.user, this.formUser);
        // Bubble up that this user has been saved in case the parent is interested
        this.save.emit(this.user);
        this.status = 'saved';
    }

    cancelForm(): void {
        // Reset the form back to the original user details
        Object.assign(this.formUser, this.user);
        this.status = 'canceled';
    }

}
