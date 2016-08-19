import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export declare class HelpHomeComponent implements OnInit, OnDestroy {
    private _route;
    private _router;
    private sub;
    constructor(_route: ActivatedRoute, _router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
