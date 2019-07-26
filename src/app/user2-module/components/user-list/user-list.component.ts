import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY, throwError as observableThrowError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent {
    errorMessage = '';
    isOpen = true;  // Used to toggle open and closed the bootstrap panel
    sortType = 'firstName';
    sortReverse = false;
    searchString = '';

    users$ = this.userService.usersWithAddresses$
        .pipe(
            catchError(err => {
                this.errorMessage = err;
                return EMPTY;
            })
        );

    selectedUser$ = this.userService.selectedUser$;

    constructor(private userService: UserService) { }

    changeSort(newSortType: string) {
        if (newSortType === this.sortType) {
            // clicking the same column twice toggles the sort order
            this.sortReverse = !this.sortReverse;
        } else {
            this.sortType = newSortType;
        }
    }

    onSelected(userId: number): void {
        // Keep track of the selected user so it can be highlighted in the HTML
        this.userService.selectedUserChanged(userId);
    }

}
