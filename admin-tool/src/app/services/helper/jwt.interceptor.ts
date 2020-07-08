import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../shared/constant';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const tk = localStorage.getItem(AppSettings.TOKEN);
    if (tk) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ` + tk
        }
      });
    }
    return next.handle(request);
  }
}
