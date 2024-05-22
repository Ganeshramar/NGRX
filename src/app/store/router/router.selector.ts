import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { routerStateUrl } from "./custom-serializer";

export const getRouterState = createFeatureSelector<
    RouterReducerState<routerStateUrl>
>('router');

export const getCurrentRoute = createSelector(getRouterState, (router)=> {
    return router.state;
})