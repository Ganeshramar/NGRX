import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, exhaustMap, map } from "rxjs";
import { appState } from "../store/app.state";
import { Store } from "@ngrx/store";
import { isAuthendicated } from "../auth/state/auth.selector";

@Injectable({ providedIn: 'root'})
export class authGuard implements CanActivate{
    constructor(private store: Store<appState>, private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
        | boolean 
        | UrlTree 
        | Observable<boolean | UrlTree> 
        | Promise<boolean | UrlTree> {
        return this.store.select(isAuthendicated).pipe(
            map((authendicate: any) => {
                if(!authendicate){
                    return this.router.createUrlTree(['auth']);    
                }
                return true;
            })
        );
    }
}