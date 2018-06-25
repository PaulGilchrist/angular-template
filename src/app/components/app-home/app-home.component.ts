import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	styleUrls: ['./app-home.component.css'],
	templateUrl: './app-home.component.html'
})
export class AppHomeComponent implements OnInit {
	constructor(public router: Router) {}

	ngOnInit() {
		// window['appInsights'].trackPageView('home.component');
	}
}
