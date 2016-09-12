import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';

// Assumes D3GraphComponent was loaded at a higher module
// import { D3GraphComponent } from './../components/d3-graph.component';
import { FloorDemoComponent } from './floor-demo.component';

import { routing } from './floor-demo.routing';

@NgModule({
    declarations: [
        // D3GraphComponent,
        FloorDemoComponent,
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        RouterModule,
        routing
    ],
})
export class FloorDemoModule {}
