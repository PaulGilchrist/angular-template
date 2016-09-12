import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { DragDemoComponent } from './drag-demo.component';
import { GraphDemoComponent } from './graph-demo.component';
import { PdfDemoComponent } from './pdf-demo.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    // Static Loading
    { path: 'drag', component: DragDemoComponent },
    { path: 'graph', component: GraphDemoComponent },
    { path: 'pdf', component: PdfDemoComponent },
    // Lazy Loading
    {
        path: 'floor',
        loadChildren: () => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./floor-demo.module').FloorDemoModule);
            });
        })
    },
]);
