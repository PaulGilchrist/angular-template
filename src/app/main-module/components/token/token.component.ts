import { Component, OnInit } from '@angular/core';

import { AppInsightsService } from '../../../services/app-insights.service';
import { MsalService } from '@azure/msal-angular';


@Component({
    selector: 'app-token',
    styleUrls: ['./token.component.scss'],
    templateUrl: './token.component.html'
})
export class TokenComponent implements OnInit {

    token = this.authService.getAccount().idToken;
    rawIdToken = null;

    constructor(
        private appInsightsService: AppInsightsService,
        private authService: MsalService
    ) { }

    ngOnInit(): void {
        this.appInsightsService.logPageView('token.component', '/token');
        this.authService.acquireTokenPopup({ scopes: ['User.Read'] }).then(response => {
            if(response.idToken) {
                this.rawIdToken = response.idToken.rawIdToken;
            }
        });
        // // Initialize tooltips just for this component
        // $(function() {
        // 	// No typings for bootstrap's tooltip
        // 	$('my-token [data-toggle="tooltip"]')).tooltip({ container: 'body' });
        // });
    }

    getDateString(num: any): string {
        let returnString = '';
        if (num) {
            returnString = num + ' (' + new Date(num * 1000) + ')';
        }
        return returnString;
    }

    logout(): void {
        this.authService.logout();
        // this.adalService.logOut();
    }
}
