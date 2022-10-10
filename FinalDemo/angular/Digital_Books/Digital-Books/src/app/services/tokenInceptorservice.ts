import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ReaderServiceService } from './reader-service.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


    constructor(private injector: Injector) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService = this.injector.get(ReaderServiceService);
        let tokenizedreq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        })

        return next.handle(tokenizedreq);
    }

}