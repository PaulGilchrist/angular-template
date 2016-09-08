import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { D3GraphComponent } from './../components/d3-graph.component';
import { DragDemoComponent } from './drag-demo.component';
import { Dragula } from './../directives/dragula.directive';
import { FloorDemoComponent } from './floor-demo.component';
import { GraphDemoComponent } from './graph-demo.component';
import { ModalDemoComponent } from './modal-demo.component';
import { PdfDemoComponent } from './pdf-demo.component';
import { routing } from './demos.routing';

@NgModule({
    declarations: [
        D3GraphComponent,
        DragDemoComponent,
        Dragula,
        FloorDemoComponent,
        GraphDemoComponent,
        ModalDemoComponent,
        PdfDemoComponent,
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        routing
    ],
})
export class DemosModule {}