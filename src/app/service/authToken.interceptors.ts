import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, exhaustMap } from "rxjs";
import { Store } from "@ngrx/store";
import { appState } from "../store/app.state";
import { getToken } from "../auth/state/auth.selector";

@Injectable()

export class AuthTokenInterceptor implements HttpInterceptor{
    constructor(private store: Store<appState>){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(getToken).pipe(
            exhaustMap((token) => {
                if(!token){
                    return next.handle(req);
                }
                let modifyReq = req.clone({
                    params  : req.params.append('auth', token)
                })
                return next.handle(req);
            })
        )
    }
}