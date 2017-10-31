import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { IdentityService } from '../../services/identity.service';

@Component({
    selector: 'my-token',
    templateUrl: './token.component.html'
})
export class TokenComponent implements OnInit {

    constructor(private _location: Location, private _router: Router, public identityService: IdentityService) {}

    ngOnInit(): void {
		//Initialize tooltips just for this component
		$(document).ready(() => {
			// No typings for bootstrap's tooltip
			(<any>$('my-token [data-toggle="tooltip"]')).tooltip({ container: 'body' });
		});

    };

    getDateString(num: number): string {
        let returnString = '';
        if(num) {
            returnString = num + ' (' + new Date(num * 1000) + ')';
        }
        return returnString;
    };

    logout(): void {
		// Remove token from both memory and local storage
        this.identityService.clearToken();
		// Redirect back to the home page now that there is no longer token info to display
        this._router.navigate(['home']);
    }

    renew(): void {
		// Test renewing a currently valid token without UI
        this.identityService.getToken().subscribe();
		// Should refresh the screen after a second (or after token has been replaced)
    };
}
