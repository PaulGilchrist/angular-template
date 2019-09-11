import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, throwError as observableThrowError, Observable, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Address } from '../models/address.model';
import { State } from '../models/state.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private states = new BehaviorSubject<State[]>([]);
    states$ = this.states.asObservable();
    private users = new BehaviorSubject<User[]>([]);
    users$ = this.users.asObservable();

    private _lastStateDataRetreivalTime: number; // Time when user data was last retireved from the remote souce
    private _lastUserDataRetreivalTime: number; // Time when user data was last retireved from the remote souce

    constructor(private http: HttpClient) {}

    public getUsers(force: boolean = false): Observable<User[]> {
        if (force || this.users.getValue().length === 0 || Date.now() - this._lastUserDataRetreivalTime > environment.dataCaching.userData) {
            combineLatest([
                this.http.get<Address[]>(environment.apiUrl + 'addresses.json'),
                this.http.get<User[]>(environment.apiUrl + 'users.json')
            ]).pipe(
                retry(3),
                map(([addresses, users]) => {
                    users.forEach(user => user.addresses = addresses.filter(a => user.addressIds.includes(a.id)));
                    return users;
                }),
                tap((users: User[]) => {
                    this._lastUserDataRetreivalTime = Date.now();
                    // Caller can subscribe to users$ to retreive the users any time they are updated
                    this.users.next(users);
                    console.log(`GET users`);
                }),
                catchError(this.handleError)
            ).subscribe();
        }
        return this.users$;
    }

    public getStates(force: boolean = false): Observable<State[]> {
        if (force || this.states.getValue().length === 0 || Date.now() - this._lastStateDataRetreivalTime > environment.dataCaching.defaultLong) {
            this.http.get(environment.apiUrl + 'states.json').pipe(
                retry(3),
                tap((states: State[]) => {
                    this._lastStateDataRetreivalTime = Date.now();
                    // Caller can subscribe to states$ to retreive the states any time they are updated
                    this.states.next(states);
                    console.log(`GET states`);
                }),
                catchError(this.handleError)
            ).subscribe();
        }
        return this.states$;
    }

    public updateUsers(): Observable<boolean> {
        const users = this.users.getValue();
        const modifiedUsers = users.filter(u => u.isDirty === true);
        if (modifiedUsers.length > 0) {
            // Simulate saving modifiedUsers back to API
            modifiedUsers.forEach(u => u.isDirty = false);
            this.users.next(users);
        }
        return of(true);
    }

    private handleError(error: Response) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return observableThrowError(error || 'Server error');
    }

}
