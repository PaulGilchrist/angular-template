import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common' ;

import { IdentityService } from '../../services/identity.service';

declare let toastr:any;

@Component({
    selector: 'nav-top',
    styleUrls: ['./nav-top.component.css'],
    templateUrl: './nav-top.component.html'
})
export class TopNavComponent implements OnInit {

    shrinkNavbar: boolean = false;

    user: any = {
        identity : {
            isAuthenticated : false
        }
    };

    constructor(private _location: Location, private _router: Router, private _identityService: IdentityService) {}

    onScroll(event: any): void {
        // Shrink the header top and bottom padding when scrolling beyond 300px
        this.shrinkNavbar = ((window.pageYOffset || document.documentElement.scrollTop) > 300);
    }


    ngOnInit(): void {
        this.user.identity.isAuthenticated = this._identityService.isTokenValid();
        if(this.user.identity.isAuthenticated) {
            this.user.identity.name = this._identityService.token.name;
        } else {
            this.user.identity.name = null;
        }
    };

    currentPage(path: string): boolean {
        let result = false;
        let locationPath = this._location.path();
        if (path.length === 0) {
            // Root
            result = (locationPath.length === 0);
        } else {
           // Does the current path start with "path"?
           result = (locationPath.indexOf(path) === 0);
        }
        return result;
    }

    login(): void {
        if(!this._identityService.isTokenValid()) {
            // No need to call this asyncronously because it will actually leave the website to redirect to the login server
            this._identityService.getToken();
        } else {
            this.user.identity.isAuthenticated = true;
            this.user.identity.name = this._identityService.token.name;
        };
    }

    logout(): void {
        this._identityService.clearToken();
        this.user.identity.isAuthenticated = false;
        this.user.identity.name = null;
        this._router.navigate(['home']);
    }

}
