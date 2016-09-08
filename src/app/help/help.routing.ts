import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';
import { HelpHomeComponent } from './help-home.component';

export const helpRoutes: Routes = [
    {
    path: '',
    redirectTo: '/help',
    pathMatch: 'full'
  },
  {
    path: 'help',
    component: HelpComponent,
    children: [
      { path: '', component: HelpHomeComponent },
    ]
  }
];