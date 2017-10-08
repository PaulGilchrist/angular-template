import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';

// Assumes D3GraphComponent was loaded at a higher module
// import { D3GraphComponent } from './../components/d3-graph.component';
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
