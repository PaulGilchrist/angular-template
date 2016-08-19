import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IdentityService } from './../services/identity.service';
export declare class TokenComponent implements OnInit {
    private _location;
    private _router;
    private _identityService;
    token: any;
    id_token: any;
    constructor(_location: Location, _router: Router, _identityService: IdentityService);
    ngOnInit(): void;
    getDateString(num: number): string;
    logout(): void;
    renew(): void;
}
