import { OnInit, OnChanges, ElementRef } from '@angular/core';
export declare class D3GraphComponent implements OnInit, OnChanges {
    private el;
    isReady: boolean;
    _tooltip: any;
    data: Array<any>;
    height: number;
    labels: string;
    warningLevel: number;
    width: number;
    type: string;
    xKey: string;
    yKey: string;
    xType: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    createBarGraph(): void;
    createLineChart(): void;
    createPieChart(): void;
    createScatterPlot(): void;
    classPicker(value: number, warningLevel: number): string;
    draw(): void;
    scale(key: string, range: Array<number>, useMin?: boolean): any;
    showLabels(key: string, value: any, type: string, useMin?: boolean): any;
}
