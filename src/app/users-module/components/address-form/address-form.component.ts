import { Component, EventEmitter, Input, Output } from '@angular/core';

import { State } from '../../models/state.model';
import { STATES } from '../../data/states.data';
import { Address } from '../../models/address.model';

declare var toastr: any;

@Component({
	selector: 'app-address-form',
	styleUrls: ['./address-form.component.scss'],
	templateUrl: './address-form.component.html'
})
export class AddressFormComponent {
	public name: string;
	public streetNumber: number;
	public streetName: string;
	public city: string;
	public state: string;
	public states: State[] = STATES; // Full list of states
	public zipCode: string;

	inputAddress: Address;

	@Input()
	set address(address: Address) {
		this.inputAddress = address;
		if (address) {
			this.name = this.inputAddress.name;
			this.streetNumber = this.inputAddress.streetNumber;
			this.streetName = this.inputAddress.streetName;
			this.city = this.inputAddress.city;
			this.state =this.inputAddress.state;
			this.zipCode = this.inputAddress.zipCode;
		}
	}

	// Bubble up that the form was saved
	@Output() save = new EventEmitter<Address>();

	onUpdateState(event: any): void {
		// Only the value roles up to the parent select.  To get the label you have to go to the selected option
		toastr.info(event.target.selectedOptions[0].text);
	}

	saveForm(): void {
		// For the purpose of this demo, we are not going to save directly back to the API, but rather to the in memory list
		this.inputAddress.name = this.name;
		this.inputAddress.streetNumber = this.streetNumber;
		this.inputAddress.streetName = this.streetName;
		this.inputAddress.city = this.city;
		// We need to convert from full state name to state abbreviation
		this.inputAddress.state = STATES.find(s => s.name===this.state).abbreviation;
		this.inputAddress.zipCode = this.zipCode;
		// Bubble up that this user has been saved in case the parent is interested
		this.save.emit(this.inputAddress);
	}

	cancelForm(): void {
		// Reset the form back to the original user details
		this.name = this.inputAddress.name;
		this.streetNumber = this.inputAddress.streetNumber;
		this.streetName = this.inputAddress.streetName;
		this.city = this.inputAddress.city;
		this.state = this.inputAddress.state;
		this.zipCode = this.inputAddress.zipCode;
	}

}
