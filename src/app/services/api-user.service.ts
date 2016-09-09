import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


import { CONFIG } from '../data/config.data';
import { IdentityService } from '../services/identity.service';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';


@Injectable()
export class UserService {
    //Assumes HTTP_PROVIDERS was added as a provider at a higher level
    constructor(private http: Http, private _identityService: IdentityService) { }

    //constants
    _maxUserCacheTimeMilliseconds: number = 3600000;

    //public variables
    public users: User[];

    //private variables
    _usersUrl = CONFIG.apiUrl + '/users';
    _lastUserGetTime: number; //number of milliseconds elapsed since 1 January 1970 00:00:00 UTC

    public getUsers(): Observable<User[]> {
        //if the users are less than 1 hour old do not GET them again from the API
        if (!this.users || (this._lastUserGetTime + this._maxUserCacheTimeMilliseconds < Date.now())) {
            //Get users from API
            return this.http.get(this._usersUrl /*, { headers: this._identityService.appendAuthHeader(new Headers()) }*/)
                .map(res => <User[]>res.json())
                .do(data => {
                    this.users = data, //Save the user array inside the service
                    this._lastUserGetTime = Date.now() //Track when the last successful user GET occured
                })
                .catch(this.handleError);
        } else {
            //Return existing users as an observable
            return Observable.of(this.users);
        }
    }

    public getUserAddresses(user: User): Observable<Address[]> {
        //The token is larger than the entire address payload.
        //If it was a requirement to secure this endpoint, then for performance reasons, it would be best to get all addresses one time
        //Then when looking for the addresses for a single user, do that in memory (but this is a demo, so small API calls are fine)
        let url: string = this._usersUrl + '/' + user.id + '/addresses';
        return this.http.get(url /*, { headers: this._identityService.appendAuthHeader(new Headers()) }*/)
            .map(res => <Address[]>res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}