import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class BlockchainService {
	_tickerUrl = 'https://blockchain.info/ticker?cors=true';
	_exchangeRates: any;

	// Assumes HTTP_PROVIDERS was added as a provider at a higher level
	constructor(private _http: Http) { }

	public getUsdExchangeRate(): Observable<number> {
		return this._http.get(this._tickerUrl)
			.map(res => <number>res.json().USD.last)
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		// In the future, we may send the server to some remote logging infrastructure
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

}
