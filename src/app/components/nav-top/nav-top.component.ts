import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConnectivityService } from 'angular-connectivity'; // My NPM Package
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-nav-top',
    styleUrls: ['./nav-top.component.scss'],
    templateUrl: './nav-top.component.html'
})
export class NavTopComponent implements OnInit, OnDestroy {
    claims: any = this.authService.getIdentityClaims();
    shrinkNavbar = false;
    isConnected = true;
    subscriptions: Subscription[] = [];
    width = window.innerWidth;

    constructor(
        private connectivityService: ConnectivityService,
        // private _location: Location,
        private router: Router,
        public authService: OAuthService
    ) { }

    onScroll(event: any): void {
        // Shrink the header top and bottom padding when scrolling beyond 300px
        this.shrinkNavbar =
            (window.pageYOffset || document.documentElement.scrollTop) > 300;
    }

    ngOnInit(): void {
        this.authService.loadDiscoveryDocumentAndTryLogin({ customHashFragment: location.hash }).then(() => {
            if (this.authService.hasValidAccessToken()) {
                // Load UserProfile to get the additional claims
                this.authService.loadUserProfile();
            }
        });
        const url = localStorage.getItem('url');
        if (url != null) {
            localStorage.removeItem('url');
            this.router.navigateByUrl(url);
        }
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => this.isConnected = isConnected));
        window.onresize = () => this.width = window.innerWidth;
    }

    ngOnDestroy(): void {
        // Unsubscribe all subscriptions to avoid memory leak
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    isAuthenticated() {
        //console.log(this.authService);
        return this.authService.hasValidIdToken();
    }

    login() {
        this.authService.initLoginFlow();
    }

    logout() {
        this.authService.logOut();
    }

    username(): string {
        this.claims = this.authService.getIdentityClaims();
        return this.claims.name;
    }
}
