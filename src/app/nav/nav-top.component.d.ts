import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IdentityService } from '../services/identity.service';
export declare class TopNavComponent implements OnInit {
    private _location;
    private _router;
    private _identityService;
    shrinkNavbar: boolean;
    user: any;
    constructor(_location: Location, _router: Router, _identityService: IdentityService);
    onScroll(event: any): void;
    ngOnInit(): void;
    currentPage(path: string): boolean;
    login(): void;
    logout(): void;
}
