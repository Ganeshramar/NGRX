import { Action, createReducer, on } from "@ngrx/store";
import { initialState, sharedState } from "./shared.state";
import { setErrorMessage, setLoadingSpinner } from "./shared.action";

const _sharedReducer = createReducer(
    initialState,
    on(setLoadingSpinner, (state: any, action: { status: any; })=> {
        return{
            ...state,
            showLoading: action.status
        }
    }),
    on(setErrorMessage, (state, action)=> {
        return{
            ...state,
            errorMessage: action.message
        }
    })
)

export function sharedReducer(state: sharedState | undefined, action: Action){
    return _sharedReducer(state, action);
}