import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloorDemoComponent } from './floor-demo.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FloorDemoComponent },
]);
