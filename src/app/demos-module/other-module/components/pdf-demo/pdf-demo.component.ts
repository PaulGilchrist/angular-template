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

    viewPdf(name: string): void {
        const win = window.open('', '_blank');
        pdfMake.createPdf(this.overviewPdf).open({}, win);
        // .download('demo.pdf');
    }

}
