import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

declare let System: any;

@Component({
	selector: 'my-help',
	styleUrls: ['./help.component.css'],
	templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {
	showNav = true;

	toggleNav() {
		this.showNav = !this.showNav;
	}

	ngOnInit() {
		window['appInsights'].trackPageView('help-module/help.component');
	}

}
