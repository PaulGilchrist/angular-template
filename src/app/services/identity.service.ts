
import {throwError as observableThrowError,  Observable  ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import AuthenticationContext = require('adal-angular'); // tslint:disable-line

import { environment } from '../../environments/environment';

@Injectable()
export class IdentityService {

	public token: string = null;
	public user: User = null;
	public context: AuthenticationContext;

	public Roles = {
		Admin: 'Admin',
		User: 'User',
	};

	public clearToken() {
		this.token = null;
		this.user = null;
	}

	public getToken(): Observable<string> {
		// Gets the current token for the signed in user
		this.context = new AuthenticationContext({
			clientId: environment.azureAuthProvider.clientId,
			tenant: environment.azureAuthProvider.tenant,
			cacheLocation: 'localStorage',
			extraQueryParameter: `domain_hint=${environment.azureAuthProvider.domainHint}`, /* To prevent login prompt */
			expireOffsetSeconds: 900 // 15 minutes.  For testing set to 3480 = 58 min so should time out after 2 minutes
		});
		if (this.context.isCallback(window.location.hash)) {
			this.context.handleWindowCallback();
		} else {
			const token = this.context.getCachedToken(environment.azureAuthProvider.clientId);
			const user = this.context.getCachedUser();
			if (!token || token.length === 0 || !user) {
				this.context.login();
				return observableThrowError('Token or User not in cache so starting login');
			} else {
				this.token = token;
				return of(token);
			}
		}
		try {
			this.context.acquireToken(environment.azureAuthProvider.clientId, (error, token) => {
				if (error) {
					return observableThrowError('Error aquiring token - ' + error);
				} else {
					this.token = token;
					return of(token);
				}
			});
		} catch (error) {
			this.context.login();
			return observableThrowError('Error during aquiring token so starting login - ' + error);
		}
	}

	public getUser(): Observable<User> {
		return this.getToken().pipe(
			tap(token => {
				this.context.getUser((msg, user) => {
					if (msg) {
						return observableThrowError('Error getting user - ' + msg);
					} else {
						this.user = user;
						return of(user);
					}
				});
			}),
			map(res => this.user),
			catchError(this.handleError)
		);
	}

	public getRoles(): Observable<string> {
		return this.getUser().pipe(
			map(user => user.profile['roles']),
			catchError(this.handleError)
		);
	}

	public isInAllRoles(...neededRoles: Array<string>): Observable<boolean> {
		return this.getRoles().pipe(
			map(roles => {
				roles = roles.toLocaleLowerCase();
				return neededRoles.every(neededRole => roles.includes(neededRole.toLocaleLowerCase()));
			}),
			catchError(this.handleError)
		);
	}

	public isInRole(neededRole: string): Observable<boolean> {
		neededRole = neededRole.toLocaleLowerCase();
		return this.getRoles().pipe(
			map(roles => {
				roles = roles.toLocaleLowerCase();
				return roles.includes(neededRole);
			}),
			catchError(this.handleError)
		);
	}

	private handleError(error: Response) {
		// In the future, we may send the server to some remote logging infrastructure
		console.error(error);
		return observableThrowError(error || 'Server error');
	}


}

