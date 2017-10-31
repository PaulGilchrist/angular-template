import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';

import * as d3 from 'd3';
import { Selection, select } from 'd3-selection';
import { transition } from 'd3-transition';

import { FloorComponent } from './components/floor/floor.component';

import { routing } from './floor.routing';

@NgModule({
    declarations: [
        // D3GraphComponent,
        FloorComponent,
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: FloorComponent },
        ])
    ],
})
export class FloorModule {}
