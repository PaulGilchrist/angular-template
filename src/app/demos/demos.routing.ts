import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { DragDemoComponent } from './drag-demo.component'
import { FloorDemoComponent } from './floor-demo.component'
import { GraphDemoComponent } from './graph-demo.component'
import { PdfDemoComponent } from './pdf-demo.component'

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'drag', component: DragDemoComponent },
    { path: 'floor', component: FloorDemoComponent },
    { path: 'graph', component: GraphDemoComponent },
    { path: 'pdf', component: PdfDemoComponent },
]);
