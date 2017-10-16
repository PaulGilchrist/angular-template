import { NgModule } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';

import { BlockchainDemoComponent } from './components//blockchain/blockchain-demo.component';
import { D3GraphComponent } from './components/d3-graph/d3-graph.component';
import { DragDemoComponent } from './components/drag-demo/drag-demo.component';
import { Dragula } from './directives/dragula.directive';
import { EditorDemoComponent } from './components/editor-demo/editor-demo.component';
import { GraphDemoComponent } from './components/graph-demo/graph-demo.component';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { SubjectDemoComponent } from './components/subject-demo/subject-demo.component';
//import { PdfDemoComponent } from './pdf-demo.component';

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
        SubjectDemoComponent
        //PdfDemoComponent,
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CKEditorModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild([
            // Static Loading
            { path: 'blockchain', component: BlockchainDemoComponent },
            { path: 'drag', component: DragDemoComponent },
            { path: 'editor', component: EditorDemoComponent },
            { path: 'graph', component: GraphDemoComponent },
            //{ path: 'pdf', component: PdfDemoComponent },
            // Lazy Loading
            { path: 'floor', loadChildren: './floor-module/floor.module#FloorModule' },
            { path: 'subject', component: SubjectDemoComponent },
        ]),
        SharedModule
    ],
    providers: [
        BlockchainService
    ]
})
export class DemosModule {}
