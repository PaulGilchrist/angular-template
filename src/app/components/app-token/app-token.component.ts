import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AdalService } from 'adal-angular4';

@Component({
	selector: 'app-token',
	templateUrl: './app-token.component.html'
})
export class AppTokenComponent implements OnInit {

	constructor(private _location: Location, private _router: Router, private adalService: AdalService) {}

	ngOnInit(): void {
		// Initialize tooltips just for this component
		$(document).ready(() => {
			// No typings for bootstrap's tooltip
			(<any>$('my-token [data-toggle="tooltip"]')).tooltip({ container: 'body' });
		});

	}

	getDateString(num: number): string {
		let returnString = '';
		if (num) {
			returnString = num + ' (' + new Date(num * 1000) + ')';
		}
		return returnString;
	}

	logout(): void {
		this.adalService.logOut();
	}

}
