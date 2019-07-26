import { Address } from './address.model';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addressIds?: number[];
    addresses?: Address[];
    isDirty?: boolean;
}
