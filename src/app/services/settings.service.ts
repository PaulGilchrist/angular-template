import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const CONFIG = require('../../settings.json');
import { Settings } from '../models/settings.model';

@Injectable()
export class SettingsService {
	public settings: Settings = null;
	private _settingsUrl = 'api/settings';

	// Assumes HTTP_PROVIDERS was added as a provider at a higher level
	constructor(private http: HttpClient) {
		// Production will request settings from the server API, but development will pull the same settings directly from the settings file since node is not running in webpack dev
		if (process.env.ENV !== 'production') {
			this.settings = CONFIG;
		}
	}

	public getSettings(): Observable<Settings> {
		if (this.settings) {
			// Return existing settings as an observable
			return of(this.settings);
		} else {
			// Get settings from API
			return this.http.get(this._settingsUrl).pipe(
				tap(data => {
					this.settings = <Settings>data; // Save the settings inside the service
				}),
				catchError(error => {
					return Observable.throw('Error getting settings - ' + error);
				})
			);
		}
	}


}
