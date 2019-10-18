import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConnectivityService {

    private isConnected = new BehaviorSubject<boolean>(!!window.navigator.onLine);
    isConnected$ = this.isConnected.asObservable();

    constructor() {
        window.addEventListener('online', () => {
            this.isConnected.next(!!window.navigator.onLine);
            console.log('Internet connection established.  Uploading local changes and updating cached data');
        });
        window.addEventListener('offline', () => {
            this.isConnected.next(!!window.navigator.onLine);
            console.log('Application is offline so all changes will be stored locally until Internet connection is established');
        });
    }

}
