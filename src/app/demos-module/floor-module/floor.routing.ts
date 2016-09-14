import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloorComponent } from './floor.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FloorComponent },
]);
