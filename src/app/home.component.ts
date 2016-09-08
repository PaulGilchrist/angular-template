import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    styleUrls: ['app/home.component.css'],
    templateUrl: 'app/home.component.html'
})
export class HomeComponent {
    constructor(private _router: Router) {}
 }