import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

declare let System: any;

@Component({
	selector: 'app-help-home',
	styleUrls: ['./help-home.component.css'],
	templateUrl: './help-home.component.html'
})
export class HelpHomeComponent {
	showNav = true;

	toggleNav() {
		this.showNav = !this.showNav;
	}

}
