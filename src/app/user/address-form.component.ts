import { Component, EventEmitter, Input, Output } from '@angular/core';

import { State } from '../models/state.model';
import { STATES } from './../data/states.data';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

declare var toastr: any;
declare var _: any;

@Component({
    moduleId: module.id,
    selector: 'address-form',
    styleUrls: ['address-form.component.css'],
    templateUrl: 'address-form.component.html'
})
export class AddressFormComponent {
    private _address: Address = null;
    private _user: User = null;

    public errorMessage: string;
    public isActive: boolean = false;
    public isBusy = false

    public name: string;
    public streetNumber: number;
    public streetName: string;
    public city: string;
    public state: string;
    public states: State[] = STATES; //Full list of states
    public zipCode: string;

    @Input()
    set user(user: User) {
        if (user) {
            this.isBusy = true;
            this._user = user;
            this._userService.getUserAddresses(user)
                .subscribe(addresses => {
                    this._address = addresses[0],
                        this.name = addresses[0].name,
                        this.streetNumber = addresses[0].streetNumber,
                        this.streetName = addresses[0].streetName,
                        this.city = addresses[0].city,
                        this.state = addresses[0].state,
                        this.zipCode = addresses[0].zipCode,
                        this.isActive = true,
                        this.isBusy = false
                    }, error => this.errorMessage = <any>error);
        }
    }

    //Bubble up that the form was saved
    @Output() onSave = new EventEmitter<Address>();

    constructor(public _userService: UserService) { }

    onUpdateState(event: any): void {
        //Only the value roles up to the parent select.  To get the label you have to go to the selected option
        toastr.info(event.target.selectedOptions[0].text);
    }

    save(): void {
        //For the purpose of this demo, we are not going to save directly back to the API, but rather to the in memory list
        this._address.name = this.name;
        this._address.streetNumber = this.streetNumber;
        this._address.streetName = this.streetName;
        this._address.city = this.city;
        //We need to convert from full state name to state abbreviation
        this._address.state = _.where(STATES, { name: this.state });
        this._address.zipCode = this.zipCode;
        //We will also set the address as isDirty so it can later update the API in bulk
        this._address.isDirty = true;
        //Bubble up that this user has been saved in case the parent is interested
        this.onSave.emit(this._address);
    }

    cancel(): void {
        //Reset the form back to the original user details
        this.name = this._address.name;
        this.streetNumber = this._address.streetNumber;
        this.streetName = this._address.streetName;
        this.city = this._address.city;
        this.state = this._address.state;
        this.zipCode = this._address.zipCode;
    }

}