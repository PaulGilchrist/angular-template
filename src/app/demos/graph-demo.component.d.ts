import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export declare class GraphDemoComponent implements OnInit {
    private _route;
    private _router;
    data: Array<any>;
    height: number;
    labels: Array<string>;
    label: string;
    warningLevel: number;
    width: number;
    private sub;
    constructor(_route: ActivatedRoute, _router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onUpdateLabel(event: any): void;
}
