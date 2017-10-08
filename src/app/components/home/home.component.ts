import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-home',
    styleUrls: ['home.component.css'],
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private _router: Router) {}

    ngOnInit() {
        window['appInsights'].trackPageView("home.component");
    }
 }
