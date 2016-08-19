import { PipeTransform } from '@angular/core';
export declare class FilterObjectsPipe implements PipeTransform {
    transform(input: Object[], query: string): Object[];
}
