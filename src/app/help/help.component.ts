import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, RouterOutlet } from '@angular/router';

import { HelpNavComponent } from './help-nav.component';

declare var System: any;

@Component({
    directives: [ROUTER_DIRECTIVES, RouterOutlet, HelpNavComponent],
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