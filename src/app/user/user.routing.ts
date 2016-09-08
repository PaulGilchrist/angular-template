import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home.component'

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: UserHomeComponent }
]);
