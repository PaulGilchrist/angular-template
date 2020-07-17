import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adal8Service } from 'adal-angular8';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private adalService: Adal8Service) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.adalService.userInfo.authenticated) {
            // Clone the request to add the new header.
            const authReq = req.clone({setHeaders: { Authorization: 'Bearer ' + this.adalService.userInfo.token }});
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }

}
