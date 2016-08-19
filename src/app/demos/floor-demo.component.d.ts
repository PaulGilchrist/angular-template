export interface FloorZone {
    name: string;
    type: string;
    layers: string[];
    active: boolean;
}
export interface Option {
    level: number;
    name: string;
    standardName: string;
    optionName: string;
    standardLayers: string[];
    optionLayers: string[];
    active: boolean;
}
export declare class FloorDemoComponent {
    dimension: boolean;
    level: number;
    flooringZones: FloorZone[];
    options: Option[];
    focusOption: Option;
    ngOnInit(): void;
    toggleFlooringZones(zone: FloorZone, type: string): void;
    toggleOption(option: Option): void;
    changeDimension(dimension: boolean): void;
    changeLevel(level: number): void;
}
