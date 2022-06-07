import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-demo',
    templateUrl: './modal-demo.component.html'
})
export class ModalDemoComponent {

    @Input() id = '';

}
