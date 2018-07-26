
import {throwError as observableThrowError,  Observable  ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { AdalService } from 'adal-angular4';
import { environment } from '../../environments/environment';

@Injectable()
export class IdentityService extends AdalService {
	// Adds some minor functionality to the AdalService

	public getRoles(): string {
		if (this.userInfo.authenticated) {
			return this.userInfo.profile.roles;
		} else {
			return '';
		}
	}

	public isInAllRoles(...neededRoles: Array<string>): boolean {
		if (this.userInfo.authenticated) {
			const roles = this.userInfo.profile.roles.toLowerCase();
			return neededRoles.every(neededRole => roles.includes(neededRole.toLowerCase()));
		} else {
			return false;
		}
	}

	public isInRole(neededRole: string): boolean {
		if (this.userInfo.authenticated) {
			const roles = this.userInfo.profile.roles.toLowerCase();
			return roles.includes(neededRole.toLowerCase());
		} else {
			return false;
		}
	}


}

