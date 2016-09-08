import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

declare var System: any;

@Component({
    selector: 'my-help',
    styleUrls: ['app/help/help.component.css'],
    templateUrl: 'app/help/help.component.html'
})
export class HelpComponent {
    showNav: boolean = true;

    toggleNav() {
        this.showNav = !this.showNav;
    }
}