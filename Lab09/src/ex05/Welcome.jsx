import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";

function Welcome() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h1>
        <button
          onClick={() => dispatch(logout())}
          className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
