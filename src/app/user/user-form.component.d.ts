import { EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
export declare class UserFormComponent {
    isActive: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    private _user;
    user: User;
    onSave: EventEmitter<User>;
    save(): void;
    cancel(): void;
}
