import DataTable from "react-data-table-component";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const UserTable = ({ users, onView, onEdit, onDelete }) => {
  const convertBase64ToImage = (base64String) => {
    if (!base64String) return "";

    if (base64String.startsWith("data:image")) {
      return base64String;
    }

    const header = base64String.substring(0, 10);
    let mimeType = "image/jpeg";

    if (header.startsWith("/9j/")) {
      mimeType = "image/jpeg";
    } else if (header.startsWith("iVBORw0KG")) {
      mimeType = "image/png";
    } else if (header.startsWith("R0lGODlh") || header.startsWith("R0lGODdh")) {
      mimeType = "image/gif";
    } else if (header.startsWith("UklGR")) {
      mimeType = "image/webp";
    } else if (base64String.includes("<svg")) {
      mimeType = "image/svg+xml";
      return `data:${mimeType};utf8,${encodeURIComponent(atob(base64String))}`;
    }

    return `data:${mimeType};base64,${base64String}`;
  };


  const columns = [
    {
      name: "Avatar",
      selector: (row) => row.avatar,
      cell: (row) => (
        <div className="flex items-center justify-center">
          <img
            src={convertBase64ToImage(row.avatar) || "/default-avatar.png"}
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              e.target.src = "/default-avatar.png";
            }}
          />
        </div>
      ),
      width: "120px",
    },
    {
      name: "Name",
      selector: (row) => row.fullName,
      sortable: true,
      cell: (row) => (
        <span className="font-medium text-gray-800">{row.fullName}</span>
      ),
      width: "180px",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      cell: (row) => <span className="text-gray-600">{row.phone || "-"}</span>,
      width: "160px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => (
        <span className="text-gray-600 truncate block">{row.email}</span>
      ),
      width: "250px",
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      cell: (row) => {
        const isMale = row.gender === true || row.gender === "Male";
        const isFemale = row.gender === false || row.gender === "Female";

        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isMale
                ? "bg-blue-100 text-blue-800"
                : isFemale
                ? "bg-pink-100 text-pink-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {isMale ? "Male" : isFemale ? "Female" : "Other"}
          </span>
        );
      },
      width: "180px",
    },
    {
      name: "Role",
      selector: (row) => row.role,
      cell: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.role === "admin"
              ? "bg-green-100 text-green-800"
              : row.role === "user"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.role === "admin"
            ? "Admin"
            : row.role === "user"
            ? "User"
            : "Guest"}
        </span>
      ),
      width: "180px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700 p-1.5 rounded hover:bg-blue-50 transition-colors cursor-pointer"
            title="View"
          >
            <FaEye size={16} />
          </button>
          <button
            className="text-green-500 hover:text-green-700 p-1.5 rounded hover:bg-green-50 transition-colors cursor-pointer"
            title="Edit"
            onClick={() => onEdit(row)}
          >
            <FaEdit size={16} />
          </button>
          <button
            className="text-red-500 hover:text-red-700 p-1.5 rounded hover:bg-red-50 transition-colors cursor-pointer"
            title="Delete"
            onClick={() => onDelete(row)}
          >
            <FaTrash size={16} />
          </button>
        </div>
      ),
      width: "100px",
      ignoreRowClick: true,
    },
  ];

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        responsive
        noDataComponent={
          <div className="py-8 text-center text-gray-500">No users found</div>
        }
        customStyles={{
          head: {
            style: {
              backgroundColor: "#f9fafb",
              justifyContent: 'center'
            },
          },
          headRow: {
            style: {
              borderBottomWidth: "1px",
              borderColor: "#e5e7eb",
            },
          },
          headCells: {
            style: {
              fontWeight: "600",
              color: "#374151",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            },
          },
          cells: {
            style: {
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            },
          },
          rows: {
            style: {
              "&:not(:last-of-type)": {
                borderBottomWidth: "1px",
                borderColor: "#e5e7eb",
              },
              "&:hover": {
                backgroundColor: "#f9fafb",
              },
            },
          },
          pagination: {
            style: {
              borderTopWidth: "1px",
              borderColor: "#e5e7eb",
            },
          },
        }}
      />
    </div>
  );
};

export default UserTable;
