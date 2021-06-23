

import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };

  const increaseBy5Handler = () => {
    dispatch({ type: 'INCREASE', value: 5 })
  }

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&
        <>
          <div className={classes.value}>{counter}</div>
          <button onClick={incrementHandler} >Increment</button>
          <button onClick={increaseBy5Handler} >Increase By 5</button>
          <button onClick={decrementHandler} >Decrement</button>
        </>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
