import { PipeTransform } from '@angular/core';
export declare class SortObjectsPipe implements PipeTransform {
    transform(input: Object[], field: string, desc?: boolean): Object[];
}
