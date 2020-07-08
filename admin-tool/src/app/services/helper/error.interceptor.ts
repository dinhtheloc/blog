import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 && this.authenticationService.isLogin()) {
                this.authenticationService.logout();
                this.authenticationService.clearLocalStorage();
                location.reload(true);
            }
            err.errorMsg = err.error.error || err.error.message || err.statusText;
            return throwError(err);
        }));
    }
}
