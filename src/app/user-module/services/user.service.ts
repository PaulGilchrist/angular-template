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
        if (force || this.addresses.getValue().length === 0 || this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now()) {
            this.http.get(this._dataPath + 'addresses.json').pipe(
                retry(3),
                tap((addresses: Address[]) => {
                    // Caller can subscribe to addresses$ to retreive the users any time they are updated
                    this.addresses.next(addresses);
                    console.log(`GET addresses`);
                }),
                catchError(this.handleError)
            ).subscribe();
        }
        return this.addresses$;
    }

    public getUserAddresses(user: User): Address[] {
        let userAddresses: Address[] = [];
        if (user.addressIds) {
            const addresses = this.addresses.getValue();
            if (addresses) {
                // Reduce any retreived addresses down to just the addresses for the given user
                userAddresses = addresses.filter(a => user.addressIds.includes(a.id))
            }
        }
        return userAddresses;
    }

    public getUsers(force: boolean = false): Observable<User[]> {
        if (force || this.users.getValue().length === 0 || this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now()) {
            this.http.get(this._dataPath + 'users.json').pipe(
                retry(3),
                tap((users: User[]) => {
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
        if (force || this.states.getValue().length === 0 || this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now()) {
            this.http.get(this._dataPath + 'states.json').pipe(
                retry(3),
                tap((states: State[]) => {
                    // Caller can subscribe to states$ to retreive the users any time they are updated
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
