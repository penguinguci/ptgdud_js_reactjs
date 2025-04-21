import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./cartSlice";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <div>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-sm text-gray-600">
                ${item.price.toFixed(2)} each
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: +e.target.value })
                  )
                }
                className="w-16 text-center border rounded"
              />
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <p className="text-lg">Total Quantity: {totalQuantity}</p>
        <p className="text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
