import { Component } from '@angular/core';
import { PDF_OVERVIEW } from '../../data/pdf-overview.data';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface DocImage {
    name: string;
    size: number;
}

@Component({
    selector: 'app-pdf-demo',
    styleUrls: ['./pdf-demo.component.css'],
    templateUrl: './pdf-demo.component.html'
})
export class PdfDemoComponent {
    overviewPdf: any = PDF_OVERVIEW; // Full docuemnt
    _modalActive = false;

    viewModal(): void {
        this._modalActive = true;
    }

    viewPdf(name: string): void {
        pdfMake.createPdf(this.overviewPdf).download('demo.pdf');
    }

}
