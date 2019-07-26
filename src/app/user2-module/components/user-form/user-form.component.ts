import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, throwError as observableThrowError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-user-form',
    styleUrls: ['./user-form.component.scss'],
    templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
    errorMessage = '';

    formUser: User = null;
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.selectedUser$.subscribe(
            (user) => {
                this.user = user;
                // Make a copy in case we want to backout changes
                this.formUser = ({
                    ...this.user
                }) as User;
            }
        );
    }

    saveForm(): void {
        // Send the new user to the service
    }

    cancelForm(): void {
        // Reset the form back to the original user details
        this.formUser = ({
            ...this.user
        }) as User;
    }

}
