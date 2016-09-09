import { Component } from '@angular/core';
import { PDF_OVERVIEW } from './../data/pdf-overview.data';

declare var pdfMake: any;
declare var _:any;

export interface DocImage {
    name: string;
    size: number;
}

@Component({
    moduleId: module.id,
    selector: 'pdf-demo',
    templateUrl: 'pdf-demo.component.html'
})
export class PdfDemoComponent {
    overviewPdf: any = PDF_OVERVIEW; //Full docuemnt
    _modalActive: Boolean = false;

    viewModal(): void {
        this._modalActive = true;
    }

    getImages(doc: any): DocImage[] {
        var images: DocImage[] = [];
        if(doc.images) {
            var imageNames = Object.keys(doc.images);
            for(let i=0; i<imageNames.length; i++) {
                var image: any = {};
                image.name = imageNames[i];
                image.size = doc.images[image.name].length;
                images.push(image);
            }
        }
        //console.log(images);
        return images;
    }

    removeImages(doc: any, maxSize: number): void {
        //Get all images in the document and their sizes.
        var images: DocImage[] = this.getImages(doc);
        //Loop through content array looking for long images
        for(let i=0; i<doc.content.length; i++) {
            var imageName: string = doc.content[i].image;
            if(imageName != null) {
                //Find the matching image
                var image: DocImage = _.findWhere(images, {name: imageName});
                if(image.size > maxSize) {
                    //Remove image content since it is too large
                    //console.log('Removing image - ' + imageName + ' at index ' + i);
                    doc.content.splice(i, 1);
                    //The array is now one smaller so step back one
                    i--;
                }
            }
        }
    }

    viewPdf(name: string): void {
        let browser = this.getBrowser();
        if(browser.substr(0,4)=='Edge') {
            //Edge browser is not able to support large image sizes
            this.removeImages(this.overviewPdf, 19964)
        }
        if((browser.substr(0,2)=="IE") || (browser.substr(0,4)=='Edge')) {
            pdfMake.createPdf(this.overviewPdf).download('demo.pdf');
        } else {
            //View the PDF (temporarily Chrome & FireFox only)
            pdfMake.createPdf(this.overviewPdf).open();
        }
        //Another option that we are not using is pdfMake.createPdf(this.overviewPdf).print(); //works in Chrome & FireFox only
    }

    getBrowser(): string {
        var ua= navigator.userAgent;
        var tem: RegExpMatchArray;
        var M: RegExpMatchArray = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    }

}