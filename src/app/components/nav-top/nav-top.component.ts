import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConnectivityService } from 'angular-connectivity'; // My NPM Package
import { MsalService } from '@azure/msal-angular';

@Component({
    selector: 'app-nav-top',
    styleUrls: ['./nav-top.component.scss'],
    templateUrl: './nav-top.component.html'
})
export class NavTopComponent implements OnInit, OnDestroy {
    shrinkNavbar = false;
    isConnected = true;
    subscriptions: Subscription[] = [];
    width = window.innerWidth;

    constructor(
        private connectivityService: ConnectivityService,
        // private _location: Location,
        private router: Router,
        public authService: MsalService
    ) { }

    onScroll(event: any): void {
        // Shrink the header top and bottom padding when scrolling beyond 300px
        this.shrinkNavbar =
            (window.pageYOffset || document.documentElement.scrollTop) > 300;
    }

    ngOnInit(): void {
        const url = localStorage.getItem('url');
        if (url != null) {
            localStorage.removeItem('url');
            this.router.navigateByUrl(url);
        }
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => this.isConnected = isConnected));
        window.onresize = () => this.width = window.innerWidth;
        // Keep the raw ID token in local storage
        this.authService.acquireTokenSilent({ scopes: ['User.Read'] }).then(response => {
            localStorage.setItem('rawIdToken', response.idToken.rawIdToken);
        });
    }

    ngOnDestroy(): void {
        // Unsubscribe all subscriptions to avoid memory leak
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    login(): void {
        localStorage.setItem('url', this.router.url);
        this.authService.loginPopup();
    }

    logout(): void {
        localStorage.removeItem('rawIdToken');
        this.authService.logout();
    }

    get authenticated(): boolean {
        return !!this.authService.getAccount();
    }
}
