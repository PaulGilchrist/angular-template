import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FloorComponent } from './components/floor/floor.component';

@NgModule({
    declarations: [
        // D3GraphComponent,
        FloorComponent,
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: FloorComponent },
        ])
    ],
})
export class FloorModule {}
