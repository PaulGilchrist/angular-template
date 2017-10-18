import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

let CONFIG = require('../../settings.json');
import { Settings } from '../models/settings.model';

@Injectable()
export class SettingsService {
	public settings: Settings = null;
	private _settingsUrl = 'api/settings';

	// Assumes HTTP_PROVIDERS was added as a provider at a higher level
	constructor(private http: Http) {
		//Production will request settings from the server API, but development will pull the same settings directly from the settings file since node is not running in webpack dev
		if (process.env.ENV !== 'production') {
			this.settings = CONFIG;
		}
	}

	public getSettings(): Observable<Settings> {
		if (this.settings) {
			// Return existing settings as an observable
			return Observable.of(this.settings);
		} else {
			// Get settings from API
			return this.http.get(this._settingsUrl)
				.map(res => <Settings>res.json())
				.do(data => {
					this.settings = data; // Save the settings inside the service
				})
				.catch(error => {
					return Observable.throw('Error getting settings - ' + error);
				});
		}
	}


}