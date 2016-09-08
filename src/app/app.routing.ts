import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Child Routes
import { helpRoutes } from './help/help.routing'
//Components
import { HomeComponent } from './home.component'
import { DragDemoComponent } from './demos/drag-demo.component'
import { FloorDemoComponent } from './demos/floor-demo.component'
import { GraphDemoComponent } from './demos/graph-demo.component'
import { PdfDemoComponent } from './demos/pdf-demo.component'
import { TokenComponent } from './login/token.component'
import { UserHomeComponent } from './user/user-home.component'

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'demos/drag', component: DragDemoComponent },
    { path: 'demos/floor', component: FloorDemoComponent },
    { path: 'demos/graph', component: GraphDemoComponent },
    { path: 'demos/pdf', component: PdfDemoComponent },
    { path: 'token', component: TokenComponent },
    { path: 'user', component: UserHomeComponent },
    ...helpRoutes
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);