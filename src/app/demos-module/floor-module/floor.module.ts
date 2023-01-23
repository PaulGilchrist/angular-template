import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared-module/shared.module';

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
        ]),
        SharedModule
    ],
})
export class FloorModule {}
