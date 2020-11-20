
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BlockchainService {
    tickerUrl = 'https://blockchain.info/ticker?cors=true';
    exchangeRates: any;

    // Assumes HTTP_PROVIDERS was added as a provider at a higher level
    constructor(private http: HttpClient) { }

    public getUsdExchangeRate(): Observable<number> {
        return this.http.get(this.tickerUrl).pipe(
            map(res => (res as any).USD.last),
            catchError(this.handleError)
        );
    }

    private handleError(error: Response) {
        // In the future, we may send the server to some remote logging infrastructure
        console.error(error);
        return observableThrowError(error || 'Server error');
    }

}
