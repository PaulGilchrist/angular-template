import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';

import { BlockchainDemoComponent } from './blockchain-demo.component';
import { D3GraphComponent } from './components/d3-graph.component';
import { DragDemoComponent } from './drag-demo.component';
import { Dragula } from './directives/dragula.directive';
import { EditorDemoComponent } from './editor-demo.component';
import { GraphDemoComponent } from './graph-demo.component';
import { ModalDemoComponent } from './modal-demo.component';
import { PdfDemoComponent } from './pdf-demo.component';
import { routing } from './demos.routing';

import { BlockchainService } from './services/blockchain.service';

import {CKEditorModule} from '../../../node_modules/ng2-ckeditor';

// Depends on the following being loaded from a parent module
//import { SortObjectsPipe } from '../pipes/sort-objects.pipe';

@NgModule({
    declarations: [
        BlockchainDemoComponent,
        D3GraphComponent,
        DragDemoComponent,
        Dragula,
        EditorDemoComponent,
        GraphDemoComponent,
        ModalDemoComponent,
        PdfDemoComponent,
        //SortObjectsPipe
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CKEditorModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule,
        SharedModule,
        routing
    ],
    providers: [
        BlockchainService
    ]
})
export class DemosModule {}
