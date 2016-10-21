import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { DragDemoComponent } from './drag-demo.component';
import { EditorDemoComponent } from './editor-demo.component';
import { GraphDemoComponent } from './graph-demo.component';
import { PdfDemoComponent } from './pdf-demo.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    // Static Loading
    { path: 'drag', component: DragDemoComponent },
    { path: 'editor', component: EditorDemoComponent },
    { path: 'graph', component: GraphDemoComponent },
    { path: 'pdf', component: PdfDemoComponent },
    // Lazy Loading
    {
        path: 'floor',
        loadChildren: './floor-module/floor.module#FloorModule'
    },
]);
