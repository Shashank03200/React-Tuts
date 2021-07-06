import { createSlice } from "@reduxjs/toolkit";

const intialCounterSlice = { counter: 0, showCounter: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: intialCounterSlice,
    reducers: {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        }
        ,
        increase(state, action) {
            state.counter += action.value;
        }
        ,
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


export const counterActions = counterSlice.actions;


export default counterActions.reducers;