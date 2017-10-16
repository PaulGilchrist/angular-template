import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IdentityService } from '../../services/identity.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private _identityService: IdentityService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if((this._identityService.id_token) && !req.headers.has('Authorization')) {
			req.headers.append('Authorization', 'Bearer ' + this._identityService.id_token);
		}
		return next.handle(req);
	}
}