import { Component, OnInit } from '@angular/core';

import { AppInsightsService } from '../../../services/app-insights.service';
import { BroadcastService, MsalService } from '@azure/msal-angular';


@Component({
    selector: 'app-token',
    styleUrls: ['./token.component.scss'],
    templateUrl: './token.component.html'
})
export class TokenComponent implements OnInit {

    token = this.authService.getAccount().idToken;
    accessToken = null;

    constructor(
        private appInsightsService: AppInsightsService,
        private broadcastService: BroadcastService,
        private authService: MsalService
    ) { }

    ngOnInit(): void {
        this.appInsightsService.logPageView('token.component', '/token');
        this.authService.acquireTokenSilent({ scopes: ['user.read'] }).then(accessTokenResponse => {
            this.accessToken = accessTokenResponse.accessToken;
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
