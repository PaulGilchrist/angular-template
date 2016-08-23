import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal-demo',
    templateUrl: 'app/demos/modal-demo.component.html'
})
export class ModalDemoComponent {

    _id: string = '';
    _isActive: Boolean = false;

    @Input()
    set id(id: string) {
        this._id = id;
    }

    @Input()
    set active(active: Boolean) {
        this._isActive = active;
    }

    close(): void {
        this._isActive = false;
    }

}