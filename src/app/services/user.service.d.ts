import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
export declare class UserService {
    users: User[];
    _addresses: Address[];
    getUsers(): Observable<User[]>;
    getUserAddresses(user: User): Observable<Address[]>;
}
