// import DataTable from "datatables.net-dt";
// import DT from 'datatables.net-dt';
import DataTable from "react-data-table-component";
import {FaEye, FaEdit, FaTrash} from "react-icons/fa"

const UserTable = ({users}) => {
  // chuyển dạng base64 sang ảnh
  const convertBase64ToImage = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  const columns = [
    {
      name: "Avatar",
      selector: (row) => row.avatar,
      cell: (row) => (
        <img
          src={convertBase64ToImage(row.avatar)}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
      width: "120px",
    },
    {
      name: "Name",
      selector: (row) => row.fullName,
      sortable: true,
      width: "200px",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      width: "200px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "250px",
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.gender == "Male"
              ? "bg-blue-100 text-blue-800"
              : row.gender == "Female"
              ? "bg-pink-100 text-pink-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.gender == true ? "Male" : "Female"}
        </span>
      ),
      width: "150px",
    },
    {
      name: "Role",
      selector: (row) => row.role,
      cell: row => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.role == "admin"
              ? "bg-green-100 text-green-800"
              : row.role == "user"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.role == "admin" ? "Admin" : row.role == "user" ? "User" : "Guest"}
        </span>
      ),
      width: "150px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700 p-1 cursor-pointer"
            title="See details"
          >
            <FaEye size={16} />
          </button>
          <button
            className="text-green-500 hover:text-green-700 p-1 cursor-pointer"
            title="Edit"
          >
            <FaEdit size={16} />
          </button>
          <button
            className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
            title="Delete"
          >
            <FaTrash size={16} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "120px",
    },
  ];

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        responsive
        noDataComponent={
          <div className="py-4 text-center text-gray-500">
            No data user available
          </div>
        }
        customStyles={{
          headCells: {
            style: {
              fontWeight: "600",
              backgroundColor: "#f9fafb",
            },
          },
          cells: {
            style: {
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            },
          },
        }}
      />
    </div>
  );
}

export default UserTable;