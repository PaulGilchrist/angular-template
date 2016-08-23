"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pdf_overview_data_1 = require('./../data/pdf-overview.data');
var modal_demo_component_1 = require('./modal-demo.component');
var PdfDemoComponent = (function () {
    function PdfDemoComponent() {
        this.overviewPdf = pdf_overview_data_1.PDF_OVERVIEW; //Full docuemnt
        this._modalActive = false;
    }
    PdfDemoComponent.prototype.viewModal = function () {
        this._modalActive = true;
    };
    PdfDemoComponent.prototype.getImages = function (doc) {
        var images = [];
        if (doc.images) {
            var imageNames = Object.keys(doc.images);
            for (var i = 0; i < imageNames.length; i++) {
                var image = {};
                image.name = imageNames[i];
                image.size = doc.images[image.name].length;
                images.push(image);
            }
        }
        //console.log(images);
        return images;
    };
    PdfDemoComponent.prototype.removeImages = function (doc, maxSize) {
        //Get all images in the document and their sizes.
        var images = this.getImages(doc);
        //Loop through content array looking for long images
        for (var i = 0; i < doc.content.length; i++) {
            var imageName = doc.content[i].image;
            if (imageName != null) {
                //Find the matching image
                var image = _.findWhere(images, { name: imageName });
                if (image.size > maxSize) {
                    //Remove image content since it is too large
                    //console.log('Removing image - ' + imageName + ' at index ' + i);
                    doc.content.splice(i, 1);
                    //The array is now one smaller so step back one
                    i--;
                }
            }
        }
    };
    PdfDemoComponent.prototype.viewPdf = function (name) {
        var browser = this.getBrowser();
        if (browser.substr(0, 4) == 'Edge') {
            //Edge browser is not able to support large image sizes
            this.removeImages(this.overviewPdf, 19964);
        }
        if ((browser.substr(0, 2) == "IE") || (browser.substr(0, 4) == 'Edge')) {
            pdfMake.createPdf(this.overviewPdf).download('demo.pdf');
        }
        else {
            //View the PDF (temporarily Chrome & FireFox only)
            pdfMake.createPdf(this.overviewPdf).open();
        }
        //Another option that we are not using is pdfMake.createPdf(this.overviewPdf).print(); //works in Chrome & FireFox only
    };
    PdfDemoComponent.prototype.getBrowser = function () {
        var ua = navigator.userAgent;
        var tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null)
            M.splice(1, 1, tem[1]);
        return M.join(' ');
    };
    PdfDemoComponent = __decorate([
        core_1.Component({
            directives: [modal_demo_component_1.ModalDemoComponent],
            selector: 'pdf-demo',
            templateUrl: 'app/demos/pdf-demo.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PdfDemoComponent);
    return PdfDemoComponent;
}());
exports.PdfDemoComponent = PdfDemoComponent;

//# sourceMappingURL=pdf-demo.component.js.map
