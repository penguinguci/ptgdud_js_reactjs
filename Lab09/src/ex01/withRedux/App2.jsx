import { Provider } from "react-redux";
import { store } from "./store";
import CounterWithRedux from "./CounterWithRedux";

const App2 = () => {
    return (
       <Provider store={store}>
            <h2>Counter with Redux</h2>
            <CounterWithRedux />
       </Provider>
    );
}

export default App2;