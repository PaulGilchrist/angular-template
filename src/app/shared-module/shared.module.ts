import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterObjectsPipe } from './pipes/filter-objects.pipe';
import { SortObjectsPipe } from './pipes/sort-objects.pipe';
import { ConnectivityService } from './services/connectivity.service';


// Depends on the following being loaded from a parent module
// import { SortObjectsPipe } from '../pipes/sort-objects.pipe';

@NgModule({
    declarations: [
        FilterObjectsPipe,
        SortObjectsPipe
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule
    ],
    exports: [
        FilterObjectsPipe,
        SortObjectsPipe
    ],
    providers: [
        ConnectivityService
    ]
})
export class SharedModule {}
