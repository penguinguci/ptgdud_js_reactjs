import Overview from "../components/Overview.jsx";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidDetail, BiImport, BiExport } from "react-icons/bi";
import UserTable from "../components/UserTable.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../components/Modal.jsx";
import UserForm from "../components/UserForm.jsx";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const stats = [
    {
      name: "Turnover",
      value: "$92,405",
      growth_rate: 5.39,
      icon: <FiShoppingCart />,
    },
    {
      name: "Profit",
      value: "$32,218",
      growth_rate: 5.39,
      icon: <FaDollarSign />,
    },
    {
      name: "New customer",
      value: 298,
      growth_rate: 6.84,
      icon: <FaRegUserCircle />,
    },
  ];

  const fetchDataUsers = async () => {
    setIsFetching(true);
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          <div className="loading-spinner"></div>
          <p className="text-[#f44b87] font-bold">Loading...</p>
        </div>
      </div>
    );
  }

  const handleFormSubmit = async (formData) => {
    console.log("Form data being submitted:", formData);
    try {
      if (!formData.fullName || !formData.email || !formData.phone) {
        throw new Error("Please fill in all required fields.");
      }

      let res;
      if (selectedUser) {
        res = await axios.put(
          `http://localhost:5000/api/users/${selectedUser._id}`,
          formData
        );
        toast.success("User updated successfully");
        await fetchDataUsers(); // Wait for refresh
        setIsModalOpen(false);
      } else {
        const userData = {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          birthDate: formData.birthDate || null,
          gender: formData.gender === "Male" ? true : false,
          address: formData.address || "",
          avatar: formData.avatar || "",
          role: "user",
          status: "Active",
          password: "tranvu23405",
        };

        res = await axios.post("http://localhost:5000/api/users", userData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 201) {
          toast.success("User added successfully!");
          await fetchDataUsers();
          setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error("API error details:", {
        response: err.response?.data,
        message: err.message,
        config: err.config,
      });
      toast.error(
        err.response?.data?.message || err.message || "Failed to process user"
      );
    }
  };

  return (
    <div className="">
      <h1 className="text-[#f44b87] font-bold text-3xl">Dashboard</h1>
      <div className="overview mt-6">
        <h1 className="flex items-center gap-2 text-[#f44b87] font-bold text-2xl">
          <MdDashboard />
          Overview
        </h1>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {stats.map((stat, index) => (
            <Overview key={index} stat={stat} />
          ))}
        </div>
      </div>
      <div className="detailed-report mt-6">
        <div className="header flex justify-between items-center">
          <h1 className="flex items-center gap-2 text-[#f44b87] font-bold text-2xl">
            <BiSolidDetail />
            Detailed report
          </h1>
          <div className="group-button flex gap-4 h-10">
            <button
              onClick={() => {
                setSelectedUser(null);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 border border-[#f44b87] rounded-xl w-30 justify-center text-[#f74382] cursor-pointer hover:bg-[#f44b87] hover:text-white transition duration-300 ease-in-out"
              disabled={isFetching}
            >
              <FiPlus size={20} />
              {isFetching ? "Processing..." : "Add User"}
            </button>
            <button
              className="flex items-center gap-2 border border-[#f44b87] rounded-xl w-25 justify-center text-[#f74382] cursor-pointer hover:bg-[#f44b87] hover:text-white transition duration-300 ease-in-out"
              disabled={isFetching}
            >
              <BiImport size={20} />
              {isFetching ? "Processing..." : "Import"}
            </button>
            <button
              className="flex items-center gap-2 border border-[#f44b87] rounded-xl w-25 justify-center text-[#f74382] cursor-pointer hover:bg-[#f44b87] hover:text-white transition duration-300 ease-in-out"
              disabled={isFetching}
            >
              <BiExport size={20} />
              {isFetching ? "Processing..." : "Export"}
            </button>
          </div>
        </div>
        <div className="table-user mt-2">
          {isFetching ? (
            <div className="flex justify-center items-center h-64">
              <div className="loading-spinner"></div>
              <p className="text-[#f44b87] font-bold ml-2">Updating data...</p>
            </div>
          ) : (
            <UserTable
              users={users}
              onEdit={(user) => {
                setSelectedUser(user);
                setIsModalOpen(true);
              }}
              onDelete={(user) => {
                setSelectedUser(user);
                setIsDeleteModalOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit User"
        width="max-w-3xl"
      >
        <UserForm
          userData={selectedUser}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
