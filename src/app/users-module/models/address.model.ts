export interface Address {
    id: number;
    name: string;
    streetNumber: number;
    streetName: string;
    city: string;
    state: string;
    zipCode: string;
    isDirty?: boolean;
}
