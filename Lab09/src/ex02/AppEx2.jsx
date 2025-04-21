import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from "./TodoList";

const AppEx2 = () => {
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );
}

export default AppEx2;