import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const products = [
  { id: 1, name: "Product A", price: 10.0 },
  { id: 2, name: "Product B", price: 15.0 },
  { id: 3, name: "Product C", price: 20.0 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
