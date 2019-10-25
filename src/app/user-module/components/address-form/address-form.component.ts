import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user.service';
import { State } from '../../models/state.model';
import { Address } from '../../models/address.model';

@Component({
    selector: 'app-address-form',
    styleUrls: ['./address-form.component.scss'],
    templateUrl: './address-form.component.html'
})
export class AddressFormComponent implements OnInit, OnDestroy {
    stateSubscription: Subscription;
    states: State[] = [];
    formAddress: Address;
    inputAddress: Address;

    @Input() set address(address: Address) {
        this.inputAddress = address;
        if (address) {
            this.formAddress = {
                ...address
            };
        } else {
            this.formAddress = null;
        }
    }

    // Bubble up that the form was saved
    @Output() readonly save = new EventEmitter<Address>();

    constructor(private toastrService: ToastrService, public _userService: UserService) { }

    ngOnInit(): void {
        this.stateSubscription = this._userService.getStates().subscribe(
            states => this.states = states
        );
    }

    ngOnDestroy() {
        this.stateSubscription.unsubscribe();
    }

    onUpdateState(event: any): void {
        // Only the value roles up to the parent select.  To get the label you have to go to the selected option
        this.toastrService.success(event.target.selectedOptions[0].text, 'State Changed');
    }

    saveForm(): void {
        Object.assign(this.inputAddress, this.formAddress);
        // Bubble up that this user has been saved in case the parent is interested
        this.save.emit(this.inputAddress);
    }

    cancelForm(): void {
        // Reset the form back to the original user details
        Object.assign(this.formAddress, this.inputAddress);
    }

}
