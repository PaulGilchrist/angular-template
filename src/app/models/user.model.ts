export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addresses?: number[];
    isDirty?: boolean;
}
