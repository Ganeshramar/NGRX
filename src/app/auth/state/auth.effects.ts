import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, loginStart, loginSuccess, logoutAction, signupStart, signupSuccess } from "./auth.action";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../../service/auth.service";
import { appState } from "../../store/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "../../store/shared/shared.action";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{
    constructor(private action$: Actions, private authService: AuthService, private store: Store<appState>, private router: Router){}

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false}));
                        this.store.dispatch(setErrorMessage({ message: ''}));
                        const userData = this.authService.formatUser(data);
                        // console.log({userData});
                        this.authService.setUserInLocalStorage(userData);
                        return loginSuccess({ userData, redirect: true });
                    }),
                    catchError(errRes => {
                        this.store.dispatch(setLoadingSpinner({ status: false}));
                        const errMessage = this.authService.getErrorMessage(errRes.error?.error?.message);
                        return of(setErrorMessage({ message: errMessage}));
                    })
                )
            })
        )
    })

    loginRedirect$ = createEffect(
        () => {
        return this.action$.pipe(
            ofType(...[loginSuccess,signupSuccess]), 
            tap((action) => {
                this.store.dispatch(setErrorMessage({ message: ''}));
                if(action.redirect){
                    this.router.navigate(['/']);
                }
            })
            )
    }, {dispatch: false});

    signUp$ = createEffect(() => {
        return this.action$.pipe(
            ofType(signupStart),
            exhaustMap((action) => {
                return this.authService
                .signUp(action.email, action.password)
                .pipe(map((data) => {
                    this.store.dispatch(setLoadingSpinner({ status: false}));
                    const userData = this.authService.formatUser(data);
                    this.authService.setUserInLocalStorage(userData);
                    return signupSuccess({userData, redirect: true});
                }),
                catchError(errRes => {
                    this.store.dispatch(setLoadingSpinner({ status: false}));
                    const errMessage = this.authService.getErrorMessage(errRes.error?.error?.message);
                    return of(setErrorMessage({ message: errMessage}));
                })
                )
            })
        )
    });

    autoLogin$ = createEffect(() => {
        return this.action$.pipe(
            ofType(autoLogin),
            mergeMap((action) => {
                const userData = this.authService.getUserFromLocalStroage();
                if(userData != null){
                    // console.log({userData},'userdata');
                    return of(loginSuccess({userData, redirect: false }));
                }else{
                    // console.log('user not a data');
                    return '';
                }
            })
        )
    }, {dispatch: false});

    logout$ = createEffect(() => {
        return this.action$.pipe(
            ofType(logoutAction),
            map((action) => {
                this.authService.logout();
                this.router.navigate(['auth']);
            })
        )
    }, {dispatch: false})
}