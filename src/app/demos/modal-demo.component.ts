import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal-demo',
    templateUrl: 'app/demos/modal-demo.component.html'
})
export class ModalDemoComponent {

    @Input() id: string = '';
    @Input() active: Boolean = false;

    close(): void {
        this.active = false;
    }

}