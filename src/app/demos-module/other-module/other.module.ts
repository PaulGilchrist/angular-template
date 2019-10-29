import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StateService } from './services/state.service';

import { BlockchainDemoComponent } from './components/blockchain-demo/blockchain-demo.component';
import { HomeComponent } from './components/home/home.component';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { PdfDemoComponent } from './components/pdf-demo/pdf-demo.component';
import { WebWorkerDemoComponent } from './components/web-worker-demo/web-worker-demo.component';

@NgModule({
    declarations: [
        BlockchainDemoComponent,
        HomeComponent,
        ModalDemoComponent,
        PdfDemoComponent,
        WebWorkerDemoComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent },
        ])
    ],
    providers: [
        StateService
    ]
})
export class OtherModule {}
