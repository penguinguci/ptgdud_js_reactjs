import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

function Users() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-red-500">Error: {error}</p>}
      {status === "succeeded" && (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
