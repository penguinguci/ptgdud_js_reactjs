import { useReducer } from "react";

const initState = {count: 0}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return initState
        default:
            throw new Error(`Unknown action: ${action.type}`)   
    }
}


const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
            Reset
        </button>
      </div>
    );
}

export default CounterWithUseReducer;