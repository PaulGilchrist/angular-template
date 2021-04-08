import { Component } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

/*
Displays a prompt for the user to login if they are not authenticated
actual login occurs on the toolbar component
*/
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private authService: OAuthService){

    }

    get authenticated(): boolean{
        return !!this.authService.hasValidIdToken();
    }

}

