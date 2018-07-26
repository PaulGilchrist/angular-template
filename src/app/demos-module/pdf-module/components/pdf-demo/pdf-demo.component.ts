import { Component } from '@angular/core';
import { PDF_OVERVIEW } from '../../data/pdf-overview.data';

import * as _ from 'underscore';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface DocImage {
	name: string;
	size: number;
}

@Component({
	selector: 'app-pdf-demo',
	templateUrl: './pdf-demo.component.html'
})
export class PdfDemoComponent {
	overviewPdf: any = PDF_OVERVIEW; // Full docuemnt
	_modalActive: Boolean = false;

	viewModal(): void {
		this._modalActive = true;
	}

	viewPdf(name: string): void {
		pdfMake.createPdf(this.overviewPdf).download('demo.pdf');
	}

	// getBrowser(): string {
	// 	const ua = navigator.userAgent;
	// 	let tem: RegExpMatchArray;
	// 	let M: RegExpMatchArray = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	// 	if (/trident/i.test(M[1])) {
	// 		tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
	// 		return 'IE ' + (tem[1] || '');
	// 	}
	// 	if (M[1] === 'Chrome') {
	// 		tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
	// 		if (tem != null) {
	// 			return tem.slice(1).join(' ').replace('OPR', 'Opera');
	// 		}
	// 	}
	// 	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	// 	if ((tem = ua.match(/version\/(\d+)/i)) != null) {
	// 		M.splice(1, 1, tem[1]);
	// 	}
	// 	return M.join(' ');
	// }

}
