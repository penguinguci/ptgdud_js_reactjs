import { Provider } from "react-redux";
import store from "./store";
import ToggleTheme from "./ToggleTheme";
import "./styles.css";

const AppEx3 = () => {
    return (
      <Provider store={store}>
        <ToggleTheme />
      </Provider>
    );
};

export default AppEx3;