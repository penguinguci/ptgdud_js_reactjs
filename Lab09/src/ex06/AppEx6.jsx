import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store";
import Login from "./Login";
import Users from "./Users";

function AppEx6Content() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <>
      <Users />
    </>
  ) : (
    <Login />
  );
}

const AppEx6 = () => {
    return (
      <Provider store={store}>
        <AppEx6Content />
      </Provider>
    );
}

export default AppEx6;