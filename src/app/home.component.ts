import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'app-home',
    styleUrls: ['app/home.component.css'],
    templateUrl: 'app/home.component.html'
})
export class HomeComponent {
    constructor(private _router: Router) {}
 }