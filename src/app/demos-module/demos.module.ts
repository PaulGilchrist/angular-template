import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';

import * as $ from 'jquery';
import * as _ from 'underscore';
// import 'ckeditor/ckeditor.js'; // not working due to extra files needed
import * as d3 from 'd3';
import { Selection, select } from 'd3-selection';
import { transition } from 'd3-transition';
import * as dragula from 'dragula';

import { BlockchainDemoComponent } from './components//blockchain/blockchain-demo.component';
import { D3GraphComponent } from './components/d3-graph/d3-graph.component';
import { DragDemoComponent } from './components/drag-demo/drag-demo.component';
import { DragulaDirective } from './directives/dragula.directive';
import { EditorDemoComponent } from './components/editor-demo/editor-demo.component';
import { GraphDemoComponent } from './components/graph-demo/graph-demo.component';
import { SubjectDemoComponent } from './components/subject-demo/subject-demo.component';

import { BlockchainService } from './services/blockchain.service';

import {CKEditorModule} from '../../../node_modules/ng2-ckeditor';

// Depends on the following being loaded from a parent module
// import { SortObjectsPipe } from '../pipes/sort-objects.pipe';

@NgModule({
	declarations: [
		BlockchainDemoComponent,
		D3GraphComponent,
		DragDemoComponent,
		DragulaDirective,
		EditorDemoComponent,
		GraphDemoComponent,
		SubjectDemoComponent
	], // directives, components, and pipes owned by this NgModule
	imports: [
		CKEditorModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forChild([
			// Static Loading
			{ path: 'blockchain', component: BlockchainDemoComponent },
			{ path: 'drag', component: DragDemoComponent },
			{ path: 'editor', component: EditorDemoComponent },
			{ path: 'graph', component: GraphDemoComponent },
			// Lazy Loading
			{ path: 'floor', loadChildren: './floor-module/floor.module#FloorModule' },
			{ path: 'pdf', loadChildren: './pdf-module/pdf.module#PdfModule' },
			{ path: 'subject', component: SubjectDemoComponent },
		]),
		SharedModule
	],
	providers: [
		BlockchainService
	]
})
export class DemosModule {}
