import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environments";
import { authResponseData } from "../models/authResponseData.model";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Store } from '@ngrx/store';
import { appState } from '../store/app.state';
import { logoutAction } from "../auth/state/auth.action";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    timeoutInterval: any;
    constructor(private http: HttpClient, private store: Store<appState>){}

    login(email:string, password:string): Observable<authResponseData>{
        return this.http.post<authResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
            {email, password, returnSecureToken: true}
            );
    }

    signUp(email:string, password:string): Observable<authResponseData>{
        return this.http.post<authResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
            {email, password, returnSecureToken: true}
            );
    }

    formatUser(data: authResponseData){
        const expirationDate = new Date(new Date().getTime() + +data.expiresIn*1000);
        const user = new User(data.email, data.idToken, data.localId, expirationDate);
        return user;
    }

    getErrorMessage(message:string){
        switch(message){
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            default:
                return 'Unknown error occured. Please try again';
        }
    }

    setUserInLocalStorage(userData:User){
        localStorage.setItem('UserData', JSON.stringify(userData));
        this.runTimeoutInterval(userData);
    }

    runTimeoutInterval(user: User){
        const todaysDate = new Date().getTime();
        const expirationDate = user.expireDate.getTime();
        const timeInterval = expirationDate - todaysDate;

        this.timeoutInterval = setTimeout(() => {
            this.store.dispatch(logoutAction());
        }, timeInterval);

    }

    getUserFromLocalStroage(){
        const userdataString = localStorage.getItem('UserData');
        if(userdataString){
            const userData = JSON.parse(userdataString);
            const expirationDate = new Date(userData.expirationDate);
            const user = new User(userData.email, userData.token, userData.localId, expirationDate);
            this.runTimeoutInterval(user);
            // console.log(user);
            return user;
        }
        return null;
    }

    logout(){
        localStorage.removeItem('UserData');
        if(this.timeoutInterval){
            clearTimeout(this.timeoutInterval);
            this.timeoutInterval = null;
        }
    }
}