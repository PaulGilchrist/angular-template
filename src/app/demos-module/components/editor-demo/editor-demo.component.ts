import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-editor-demo',
    styleUrls: ['./editor-demo.component.css'],
    templateUrl: './editor-demo.component.html'
})
export class EditorDemoComponent implements OnInit {

    content: string;
    mergedContent: string;

    data: any = [
        { name: '[CustomerName]', value: 'John Smith' },
        { name: '[DeveloperName]', value: 'Paul Gilchrist' },
        { name: '[DateToday]', value: new Date().toDateString() },
    ];

    ngOnInit() {
        // window['appInsights'].trackPageView('demos-module/editor-demo.component');
        this.content = `
            <h1><strong>WYSIWYG Data Merge Demo</strong></h1>
            <p>&nbsp;</p>
            <h3>[CustomerName],</h3>
            <p>Welcome to this editor demo supporting data merge variable support, last modified on [DateToday].</p>
            <p>&nbsp;</p>
            <p>Thanks,</p>
            <p>[DeveloperName]</p>
        `;
        this.updateMergedContent();
    }

    onChange(event: any) {
        this.updateMergedContent();
    }

    onReady(event: any) { }

    updateMergedContent() {
        // Find and replace any variables with their respective values
        const _self = this;
        this.mergedContent = this.content;
        this.data.forEach((item: any, index: number) => _self.mergedContent = _self.mergedContent.split(item.name).join(item.value));
    }

}
