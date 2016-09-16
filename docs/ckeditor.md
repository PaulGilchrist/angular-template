# CKEditor Setup

1. Add line to src/index.html file at bottom of <body>
    * <script src="https://cdn.ckeditor.com/4.5.8/standard/ckeditor.js"></script>
2. Execute
    * npm install ng2-ckeditor -s
5. Add line to src/app/demos-module/demop.module.ts
    * import {CKEditorModule} from '../../../node_modules/ng2-ckeditor';
6. Add line to new editor componets HTML
    * <ckeditor [(ngModel)]="content" [config]="{uiColor: '#99000'}" (change)="onChange($event)" (ready)="onReady($event)" debounce="500"></ckeditor>


### Notes
Added to index.html instead of vendor.js due to additional files needed (watch network debug in chrome)