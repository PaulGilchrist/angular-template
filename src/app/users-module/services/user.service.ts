import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Address } from '../models/address.model';
import { ADDRESSES } from '../data/addresses.data';
import { User } from '../models/user.model';
import { USERS } from '../data/users.data';

@Injectable()
export class UserService {
	// This is a mock version of api-user.service.ts
	// To use the actual API, rename this file to "mock-user.service.ts"" and rename "api-user.service.ts"" to just "user.service.ts", then rebuild (gulp rebuild)

	// Public variables
	public users: User[] = USERS; // Full list of users
	// Private variables
	_addresses: Address[] = ADDRESSES; // Full list of addresses

	public getUsers(): Observable<User[]> {
		// We already have the data so simulate an async call
		return of(this.users);
	}

	public getUserAddresses(user: User): Observable<Address[]> {
		// We already have the data so simulate an async call
		// Reduce the result down to just the addresses for the given user
		const userAddresses: Address[] = [] ;
		if(user.addresses && this._addresses) {
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

}
