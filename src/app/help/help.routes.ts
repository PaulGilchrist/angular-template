import { RouterConfig }          from '@angular/router';
import { HelpComponent } from './help.component';
import { HelpHomeComponent } from './help-home.component';

export const helpRoutes: RouterConfig = [
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