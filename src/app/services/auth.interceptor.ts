import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IdentityService } from './identity.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _identityService: IdentityService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if(this._identityService.token) {
			// Clone the request to add the new header.
			const authReq = req.clone({setHeaders: { Authorization: 'Bearer ' + this._identityService.token }});
			// Pass on the cloned request instead of the original request.
			return next.handle(authReq);
		} else {
			return next.handle(req);
		}
	}
}