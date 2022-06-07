import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast } from 'bootstrap';

import { State } from '../../models/state.model';
import { Address } from '../../models/address.model';


@Component({
    selector: 'app-address-form',
    styleUrls: ['./address-form.component.scss'],
    templateUrl: './address-form.component.html'
})
export class AddressFormComponent implements OnInit, OnChanges {
    @Input() address: Address = null;
    @Input() states: State[] = [];
    @Output() readonly save = new EventEmitter<Address>(); // Bubble up that the form was saved

    shrink =  window.innerWidth < 768;
    formAddress: Address;
    toastHeader = '';
    toastBody = '';

    constructor() { }

    ngOnInit(): void {
        window.onresize = () => this.shrink = window.innerWidth < 768;
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if ({}.hasOwnProperty.call(changes, propName)) {
                switch (propName) {
                    case 'address':
                        if (changes[propName].currentValue) {
                            this.formAddress = {
                                ...changes[propName].currentValue
                            };
                        } else {
                            this.formAddress = null;
                        }
                        break;
                }
            }
        }
    }

    onUpdateState(event: any): void {
        // Only the value roles up to the parent select.  To get the label you have to go to the selected option
        this.toastHeader = `State Changed`;
        this.toastBody = event.target.selectedOptions[0].text;
        const toast = new Toast(document.getElementById('addressFormToast'));
        toast.show();
    }

    saveForm(): void {
        Object.assign(this.address, this.formAddress);
        // Bubble up that this user has been saved in case the parent is interested
        this.save.emit(this.address);
    }

    cancelForm(): void {
        // Reset the form back to the original user details
        Object.assign(this.formAddress, this.address);
    }

}
