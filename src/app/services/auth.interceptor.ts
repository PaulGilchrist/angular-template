import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    rawIdToken = null;

    constructor(private authService: MsalService) {
        this.refreshToken();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.rawIdToken) {
            // Token is cached so safe to refresh it on every request
            this.refreshToken();
            // Clone the request to add the new header.
            const authReq = req.clone({setHeaders: { Authorization: 'Bearer ' + this.rawIdToken }});
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }

    refreshToken() {
        this.authService.acquireTokenSilent({ scopes: ['User.Read'] }).then(response => {
            this.rawIdToken = response.idToken.rawIdToken;
        });
    }

}
