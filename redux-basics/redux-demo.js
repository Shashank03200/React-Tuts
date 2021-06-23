const redux = require('redux');

const initialState = { counter: 0 }

const counterReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INCREMENT': return {
            ...state,
            counter: state.counter + 1
        }

        case 'DECREMENT': return {
            ...state,
            counter: state.counter - 1
        }


        default:
            return state;
    }

}

const store = redux.createStore(counterReducer);



const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}




store.subscribe(counterSubscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' })

