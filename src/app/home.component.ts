import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-home',
    styleUrls: ['home.component.css'],
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    constructor(private _router: Router) {}
 }
