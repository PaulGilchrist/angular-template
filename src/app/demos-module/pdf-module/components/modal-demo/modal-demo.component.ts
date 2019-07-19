import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-demo',
    templateUrl: './modal-demo.component.html'
})
export class ModalDemoComponent {

    @Input() id = '';
    @Input() active: Boolean = false;

    close(): void {
        this.active = false;
    }

}
