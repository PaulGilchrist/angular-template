import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'modal-demo',
    templateUrl: 'modal-demo.component.html'
})
export class ModalDemoComponent {

    @Input() id: string = '';
    @Input() active: Boolean = false;

    close(): void {
        this.active = false;
    }

}