import { Provider } from "react-redux";
import store from "./store";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const AppEx4 = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default AppEx4;
