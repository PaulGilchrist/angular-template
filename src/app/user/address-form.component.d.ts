import { EventEmitter } from '@angular/core';
import { State } from '../models/state.model';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
export declare class AddressFormComponent {
    _userService: UserService;
    private _address;
    private _user;
    errorMessage: string;
    isActive: boolean;
    isBusy: boolean;
    name: string;
    streetNumber: number;
    streetName: string;
    city: string;
    state: string;
    states: State[];
    zipCode: string;
    user: User;
    onSave: EventEmitter<Address>;
    constructor(_userService: UserService);
    onUpdateState(event: any): void;
    save(): void;
    cancel(): void;
}
