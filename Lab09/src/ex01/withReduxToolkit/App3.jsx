import { Provider } from "react-redux";
import { store } from "./store";
import CounterWithReduxToolkit from "./CounterWithReduxToolkit";

const App3 = () => {
    return (
       <Provider store={store}>
            <h2>Counter with Redux Toolkit</h2>
            <CounterWithReduxToolkit />
       </Provider>
    );
}

export default App3;