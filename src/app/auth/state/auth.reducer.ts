import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "./auth.state";
import { loginSuccess, logoutAction, signupSuccess } from "./auth.action";

const _authReducer = createReducer(
    initialState, 
    on(loginSuccess, (state, action) => {
        return{
            ...state,
            user: action.userData,
        };
    }),
    on(signupSuccess, (state, action) => {
        return{
            ...state,
            user: action.userData
        }
    }),
    on(logoutAction, (state) => {
        return{
            ...state,
            user: null,
        }
    })
);

export function AuthReducer(state: AuthState | undefined, action: Action){
    return _authReducer(state, action);
}