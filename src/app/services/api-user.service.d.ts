import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/map';
import { IdentityService } from '../services/identity.service';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
export declare class UserService {
    private http;
    private _identityService;
    constructor(http: Http, _identityService: IdentityService);
    _maxUserCacheTimeMilliseconds: number;
    users: User[];
    _usersUrl: string;
    _lastUserGetTime: number;
    getUsers(): Observable<User[]>;
    getUserAddresses(user: User): Observable<Address[]>;
    private handleError(error);
}
