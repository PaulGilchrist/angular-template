import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common' ;

@Component({
    selector: 'app-help-nav',
    styleUrls: ['./help-nav.component.css'],
    templateUrl: './help-nav.component.html'
})
export class HelpNavComponent {
    constructor(private location: Location, private _router: Router) {}

    currentPage(path: string): boolean {
        let result = false;
        const locationPath = this.location.path();
        if (path.length === 0) {
            // Root
            result = (locationPath.length === 0);
        } else {
            // Does the current path start with "path"?
            result = (locationPath === path);
        }
        return result;
    }

}
