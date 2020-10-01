import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable()
export class IdentityService {
    // Adds some minor functionality to the AdalService
    constructor(private authService: MsalService, public router: Router) {}

    public getRoles(): string {
        if (!!this.authService.getAccount()) {
            return this.authService.getAccount().idToken.roles;
        } else {
            return '';
        }
    }

    public isInAllRoles(...neededRoles: Array<string>): boolean {
        if (!!this.authService.getAccount()) {
            const roles = this.authService.getAccount().idToken.roles.toLowerCase();
            return neededRoles.every(neededRole => roles.includes(neededRole.toLowerCase()));
        } else {
            return false;
        }
    }

    public isInRole(neededRole: string): boolean {
        if (!!this.authService.getAccount()) {
            const roles = this.authService.getAccount().idToken.roles.toLowerCase();
            return roles.includes(neededRole.toLowerCase());
        } else {
            return false;
        }
    }

}
