import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counter/counterActions";

const CounterWithRedux = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    );
}

export default CounterWithRedux;