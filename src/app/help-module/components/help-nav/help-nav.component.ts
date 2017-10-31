import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common' ;

import * as $ from 'jquery';

@Component({
    selector: 'help-nav',
    styleUrls: ['./help-nav.component.css'],
    templateUrl: './help-nav.component.html'
})
export class HelpNavComponent {
    constructor(private _location: Location, private _router: Router) {}

    currentPage(path: string): boolean {
        let result = false;
        let locationPath = this._location.path();
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
