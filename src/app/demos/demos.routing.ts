import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { D3GraphComponent } from './../components/d3-graph.component';
import { DragDemoComponent } from './drag-demo.component'
import { GraphDemoComponent } from './graph-demo.component';
import { PdfDemoComponent } from './pdf-demo.component'

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'drag', component: DragDemoComponent },
    {
        path: 'floor',
        // Lazy load module and pack into separate webpack chunk
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./floor-demo.module').FloorDemoModule);
            })
        })
    },
    { path: 'graph', component: GraphDemoComponent },
    { path: 'pdf', component: PdfDemoComponent },
]);
