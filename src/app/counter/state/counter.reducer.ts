import { Action, createReducer, on } from "@ngrx/store";
import { counterState, initialState } from "./counter.state";
import { changeName, customeincrement, decrement, increment, reset } from "./counter.actions";

const _counterreducer = createReducer(
    initialState, 
    on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1,
    };
}), on(decrement, (state) =>{
    return {
        ...state,
        counter: state.counter - 1,
    }
}), on(reset, (state) =>{
    return {
        ...state,
        counter: 0,
    }
}), on(customeincrement, (state, action)=>{
    return {
        ...state,
        counter: state.counter + action?.count,
    }
}), on(changeName, (state) => {
    return {
        ...state,
        myName: 'Ramar'
    }
})
);

export function counterReducer(state: counterState | undefined, action: Action){
    return _counterreducer(state, action);
}