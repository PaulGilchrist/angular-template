import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, throwError as observableThrowError, Observable, of } from 'rxjs';
import { catchError, map, retryWhen, tap } from 'rxjs/operators';

import { genericRetryStrategy } from './generic-retry-strategy';
import { environment } from '../../../environments/environment';
import { Address } from '../models/address.model';
import { State } from '../models/state.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private states = new BehaviorSubject<State[]>([]);
    states$ = this.states.asObservable();
    private users = new BehaviorSubject<User[]>([]);
    users$ = this.users.asObservable();

    private lastStateDataRetreivalTime: number; // Time when user data was last retireved from the remote souce
    private lastUserDataRetreivalTime: number; // Time when user data was last retireved from the remote souce

    constructor(private http: HttpClient) {}

    public getUsers(force: boolean = false): Observable<User[]> {
        if (force || this.users.getValue().length === 0 || Date.now() - this.lastUserDataRetreivalTime > environment.dataCaching.userData) {
            // For the purpose of this demo not having a real backend API, we will only get from JSON file when nothing exists in localStorage
            const usersJson = localStorage.getItem('users');
            if (usersJson) {
                const users = JSON.parse(usersJson) as User[];
                this.users.next(users);
                console.log(`GET users`);
            } else {
                combineLatest([
                    this.http.get<Address[]>(environment.apiUrl + 'addresses.json').pipe(retryWhen(genericRetryStrategy())),
                    this.http.get<User[]>(environment.apiUrl + 'users.json').pipe(retryWhen(genericRetryStrategy()))
                ]).pipe(
                    map(([addresses, users]) => {
                        users.forEach(user => user.addresses = addresses.filter(a => user.addressIds.includes(a.id)));
                        return users;
                    }),
                    tap((users: User[]) => {
                        this.lastUserDataRetreivalTime = Date.now();
                        // Caller can subscribe to users$ to retreive the users any time they are updated
                        this.users.next(users);
                        console.log(`GET users`);
                    }),
                    catchError(this.handleError)
                ).subscribe();
            }
        }
        return this.users$;
    }

    public getStates(force: boolean = false): Observable<State[]> {
        if (force || this.states.getValue().length === 0 || Date.now() - this.lastStateDataRetreivalTime > environment.dataCaching.defaultLong) {
            this.http.get(environment.apiUrl + 'states.json').pipe(
                retryWhen(genericRetryStrategy()),
                tap((states: State[]) => {
                    this.lastStateDataRetreivalTime = Date.now();
                    // Caller can subscribe to states$ to retreive the states any time they are updated
                    this.states.next(states);
                    console.log(`GET states`);
                }),
                catchError(this.handleError)
            ).subscribe();
        }
        return this.states$;
    }

    public updateUser(user: User): Observable<boolean> {
        // Since we don't have a backend API in this demo, we will use localStorage instead
        const users = this.users.getValue();
        users.map(u => user.id === u.id ? user : u);
        localStorage.setItem('users', JSON.stringify(users));
        this.users.next(users);
        return of(true);
    }

    private handleError(error: Response) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return observableThrowError(error || 'Server error');
    }

}
