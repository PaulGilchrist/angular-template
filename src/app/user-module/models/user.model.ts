import { Address } from './address.model';

export interface Email {
    email: string;
}


export interface Phone {
    phoneNumber: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    emails: Email[];
    phone: Phone[];
    addressIds?: number[];
    addresses?: Address[];
    isDirty?: boolean;
}
