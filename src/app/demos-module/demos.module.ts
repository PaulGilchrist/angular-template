import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { D3GraphComponent } from './components/d3-graph.component';
import { DragDemoComponent } from './drag-demo.component';
import { Dragula } from './directives/dragula.directive';
import { EditorDemoComponent } from './editor-demo.component';
import { GraphDemoComponent } from './graph-demo.component';
import { ModalDemoComponent } from './modal-demo.component';
import { PdfDemoComponent } from './pdf-demo.component';
import { SortObjectsPipe } from './../pipes/sort-objects.pipe';
import { routing } from './demos.routing';

import {CKEditorModule} from '../../../node_modules/ng2-ckeditor';

@NgModule({
    declarations: [
        D3GraphComponent,
        DragDemoComponent,
        Dragula,
        EditorDemoComponent,
        GraphDemoComponent,
        ModalDemoComponent,
        PdfDemoComponent,
        SortObjectsPipe
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CKEditorModule,
        CommonModule,
        FormsModule,
        RouterModule,
        routing
    ],
})
export class DemosModule {}
