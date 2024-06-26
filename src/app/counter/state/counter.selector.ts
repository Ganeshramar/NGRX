import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

export const COUNTER_STATE_NAME = 'counter';

const getCounterState = createFeatureSelector<counterState>(COUNTER_STATE_NAME);
export const getCounter = createSelector(getCounterState, (state) => {
    // console.log(state);
    return state?.counter;
});

export const getMyname = createSelector(getCounterState, (state) => {
    // console.log(state);
    return state?.myName;
})