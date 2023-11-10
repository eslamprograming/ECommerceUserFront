import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get the token from the local storage
    let token = localStorage.getItem('token');

    // clone the original request and add the token to the Authorization header
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // pass the modified request to the next handler
    return next.handle(tokenizedReq);
  }
}
