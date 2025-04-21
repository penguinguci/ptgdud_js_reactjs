import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store";
import Login from "./Login";
import Welcome from "./Welcome";

const AppEx5Content = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return isLoggedIn ? <Welcome /> : <Login />;
}

const AppEx5 = () => {
    return (
      <Provider store={store}>
        <AppEx5Content />
      </Provider>
    );
};

export default AppEx5;