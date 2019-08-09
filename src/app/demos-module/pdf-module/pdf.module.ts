import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { BlockchainDemoComponent } from './components/blockchain/blockchain-demo.component';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { PdfDemoComponent } from './components/pdf-demo/pdf-demo.component';

@NgModule({
    declarations: [
        BlockchainDemoComponent,
        ModalDemoComponent,
        PdfDemoComponent
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: PdfDemoComponent },
        ])
    ],
})
export class PdfModule {}
