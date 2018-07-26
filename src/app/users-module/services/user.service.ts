import { BehaviorSubject, Subject, throwError as observableThrowError, Observable , of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Address } from '../models/address.model';
import { ADDRESSES } from '../data/addresses.data';
import { User } from '../models/user.model';
import { USERS } from '../data/users.data';

@Injectable()
export class UserService {
	// This is a mock version of api-user.service.ts
	// To use the actual API, rename this file to "mock-user.service.ts"" and rename "api-user.service.ts"" to just "user.service.ts", then rebuild (gulp rebuild)

	// Constants
	private _maxUserCacheTimeMilliseconds = 3600000;

	// Public variables
	private users = new BehaviorSubject<User[]>([]);
	users$ = this.users.asObservable();

	// Private variables
	private _addresses: Address[] = ADDRESSES; // Full list of addresses
	private _lastUserGetTime: number; // number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
	private _usersUrl: string = null;


	constructor() {
		// Application should have loaded settings at startup
		this._usersUrl = environment.apiUrl + '/users';
	}

	public getUsers(force: boolean = false): Observable<User[]> {
		// If the users are less than 1 hour old do not GET them again from the API
		const users = this.users.getValue();
		if(force || users.length === 0 || (this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now())) {
			// We already have the data so simulate an async call
			this.users.next($.extend(true, [], USERS));
			// Why can the user modify the data directly if we call this.users.next(USERS); rather than creating a new array?
			return this.users$;
		} else {
			// Return existing users as an observable
			return this.users$;
		}
	}

	public getUserAddresses(user: User): Observable<Address[]> {
		// Simulate a call to 'users(id)/addresses'
		// We already have the data so simulate an async call
		// Reduce the result down to just the addresses for the given user
		const userAddresses: Address[] = [] ;
		if(user.addresses) {
			for (let i = 0; i < user.addresses.length; i++) {
				for (let j = 0; j < this._addresses.length; j++) {
					if(user.addresses[i] === this._addresses[j].id) {
						userAddresses.push(this._addresses[j]);
					}
				}
			}
		}
		return of(userAddresses);
	}

	private handleError(error: Response) {
		// In the future, we may send the server to some remote logging infrastructure
		console.error(error);
		return observableThrowError(error || 'Server error');
	}

}
