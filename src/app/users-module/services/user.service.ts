import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, throwError as observableThrowError, Observable, of, Subscription } from 'rxjs';
import { catchError, map, find, retry, tap } from 'rxjs/operators';

import { Address } from '../models/address.model';
import { State } from '../models/state.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    // This is a mock version of api-user.service.ts
    // To use the actual API, rename this file to "mock-user.service.ts"" and rename "api-user.service.ts"" to just "user.service.ts", then rebuild (gulp rebuild)

    // Public variables
    private addresses = new BehaviorSubject<Address[]>([]);
    addresses$ = this.addresses.asObservable();
    private states = new BehaviorSubject<State[]>([]);
    states$ = this.states.asObservable();
    private users = new BehaviorSubject<User[]>([]);
    users$ = this.users.asObservable();

    // Private variables
    private _lastUserGetTime: number; // number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
    private _maxUserCacheTimeMilliseconds = 3600000;
    private _dataPath = './assets/';

    constructor(private http: HttpClient) {

    }

    public getAddresses(force: boolean = false): Observable<Address[]> {
        // This function will subscribe to itself
        if (force || this.addresses.getValue().length === 0 || this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now()) {
            return this.http.get(this._dataPath + 'addresses.json').pipe(
                retry(3),
                tap((addresses: Address[]) => {
                    this.addresses.next(addresses);
                }),
                map(data => this.addresses.getValue()),
                catchError(this.handleError)
            );
        }
        return of(this.addresses.getValue());
    }

    public getUserAddresses(user: User): Observable<Address[]> {
        // Simulate a call to 'users(id)/addresses'
        // We already have the data so simulate an async call
        return this.getAddresses().pipe(
            retry(3),
            map((addresses: Address[]) => {
                // Reduce the result down to just the addresses for the given user
                const userAddresses: Address[] = [] ;
                if (user.addresses) {
                    for (const userAddress of user.addresses) {
                        for (const address of addresses) {
                            if (userAddress === address.id) {
                                userAddresses.push(address);
                            }
                        }
                    }
                }
                return userAddresses;
            })
        );
    }

    public getUsers(force: boolean = false): Observable<User[]> {
        // This function will subscribe to itself
        if (force || this.users.getValue().length === 0 || this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now()) {
            return this.http.get(this._dataPath + 'users.json').pipe(
                retry(3),
                tap((users: User[]) => {
                    this.users.next(users);
                }),
                map(data => this.users.getValue()),
                catchError(this.handleError)
            );
        }
        return of(this.users.getValue());
    }

    public getStates(force: boolean = false): Observable<State[]> {
        // This function will subscribe to itself
        if (force || this.states.getValue().length === 0 || this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now()) {
            return this.http.get(this._dataPath + 'states.json').pipe(
                retry(3),
                tap((states: State[]) => {
                    this.states.next(states);
                }),
                map(data => this.states.getValue()),
                catchError(this.handleError)
            );
        }
        return of(this.states.getValue());
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
