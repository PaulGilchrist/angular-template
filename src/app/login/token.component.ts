import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common' ;

import { IdentityService } from './../services/identity.service';

declare var toastr:any;

@Component({
    moduleId: module.id.toString(),
    selector: 'my-token',
    templateUrl: 'token.component.html'
})
export class TokenComponent implements OnInit {
    token: any = null;
    id_token: any = null;

    constructor(private _location: Location, private _router: Router, private _identityService: IdentityService) {}

    ngOnInit(): void {
      	if(this._identityService.isTokenValid()) {
			this.token = this._identityService.token;
			this.token.displayName = this.token.given_name + ' ' + this.token.family_name;
			this.id_token = this._identityService.id_token;
		} else {
			toastr.error('Not logged in');
			this._location.go('/main');
		}
    };

	getDateString(num: number): string {
		let returnString: string = '';
		if(num) {
			returnString = num + ' (' + new Date(num * 1000) + ')';
		}
		return returnString;
	};

	logout(): void {
		//Remove token from both memory and local storage
		this._identityService.clearToken();
		//Redirect back to the home page now that there is no longer token info to display
        this._router.navigate(['home']);
	}

	renew(): void {
		//Test renewing a currently valid token without UI
		this._identityService.renewToken();
		//Should refresh the screen after a second (or after token has been replaced)
	};
}