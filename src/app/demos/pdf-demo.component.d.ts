export interface DocImage {
    name: string;
    size: number;
}
export declare class PdfDemoComponent {
    overviewPdf: any;
    getImages(doc: any): DocImage[];
    removeImages(doc: any, maxSize: number): void;
    viewPdf(name: string): void;
    getBrowser(): string;
}
