import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

declare var System: any;

@Component({
    moduleId: module.id.toString(),
    selector: 'my-help',
    styleUrls: ['help.component.css'],
    templateUrl: 'help.component.html'
})
export class HelpComponent {
    showNav: boolean = true;

    toggleNav() {
        this.showNav = !this.showNav;
    }
}