import { OnInit } from '@angular/core';
export declare class ProgressBarComponent implements OnInit {
    now: number;
    min: number;
    max: number;
    private _interval;
    ngOnDestroy(): void;
    ngOnInit(): void;
}
