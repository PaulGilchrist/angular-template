import { Router } from '@angular/router';
import { Location } from '@angular/common';
export declare class HelpNavComponent {
    private _location;
    private _router;
    constructor(_location: Location, _router: Router);
    currentPage(path: string): boolean;
}
