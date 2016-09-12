import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';
import { HelpHomeComponent } from './help-home.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HelpComponent,
        children: [
            { path: '', component: HelpHomeComponent }
        ]
    }
]);
