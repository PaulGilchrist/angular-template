import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, EMPTY, Subject, throwError as observableThrowError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { Address } from '../models/address.model';
import { State } from '../models/state.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

    private dataPath = './assets/';

    constructor(private http: HttpClient) { }

    addresses$ = this.http.get<Address[]>(this.dataPath + 'addresses.json')
        .pipe(
            retry(3),
            tap(() => console.log(`GET addresses`)),
            catchError(this.handleError)
        );

    states$ = this.http.get<State[]>(this.dataPath + 'states.json')
        .pipe(
            retry(3),
            tap(() => console.log(`GET states`)),
            catchError(this.handleError)
        );

    users$ = this.http.get<User[]>(this.dataPath + 'users.json')
        .pipe(
            retry(3),
            tap(() => console.log(`GET users`)),
            catchError(this.handleError)
        );

    usersWithAddresses$ = combineLatest([
        this.users$,
        this.addresses$
    ])
        .pipe(
            map(([users, addresses]) =>
                users.map(user =>
                    ({
                        ...user,
                        addresses: addresses.filter(a => user.addressIds.includes(a.id))
                    }) as User
                )
            ),
            tap(() => console.log(`GET usersWithAddresses`))
        );

    private userSelectedSubject = new Subject<number>();
    userSelectedAction$ = this.userSelectedSubject.asObservable();
    selectedUser$ = combineLatest([
        this.usersWithAddresses$,
        this.userSelectedAction$
    ]).pipe(
        map(([users, selectedUserId]) =>
            users.find(user => user.id === selectedUserId)
        ),
        tap(() => console.log(`GET selectedUser`))
    );

    selectedUserChanged(selectedUserId: number): void {
        this.userSelectedSubject.next(selectedUserId);
    }

    // public updateUsers(): Observable<boolean> {
    //     const users = this.users.getValue();
    //     const modifiedUsers = users.filter(u => u.isDirty === true);
    //     if (modifiedUsers.length > 0) {
    //         // Simulate saving modifiedUsers back to API
    //         modifiedUsers.forEach(u => u.isDirty = false);
    //         this.users.next(users);
    //     }
    //     return of(true);
    // }

    private handleError(error: Response) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return observableThrowError(error || 'Server error');
    }

}
