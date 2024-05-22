import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { postReducer } from "../post/state/post.reducer";
import { postState } from "../post/state/post.state";
import { sharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { sharedState } from "./shared/shared.state";

export interface appState{
    // counter : counterState,
    // posts: postState,
    [SHARED_STATE_NAME]: sharedState,
    [AUTH_STATE_NAME]: AuthState,
    router: RouterReducerState
}

export const appReducer = {
    // counter : counterReducer,
    // posts : postReducer
    [SHARED_STATE_NAME]: sharedReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    router: routerReducer
}