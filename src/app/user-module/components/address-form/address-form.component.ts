import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';

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

    @Input()
    set address(address: Address) {
        this.inputAddress = address;
        if (address) {
            this.formAddress = {
                ...address
            };
        }
    }

    // Bubble up that the form was saved
    @Output() save = new EventEmitter<Address>();

    constructor(public _userService: UserService) { }

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
        toastr.info(event.target.selectedOptions[0].text);
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
