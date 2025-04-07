import Overview from "../components/Overview.jsx"
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidDetail, BiImport, BiExport  } from "react-icons/bi";
import UserTable from "../components/UserTable.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal.jsx";
import UserForm from "../components/UserForm.jsx";
import {toast} from "react-toastify";

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const stats = [
        {name: "Turnover", value: 92405, growth_rate: 5.39, icon: <FiShoppingCart/>},
        {name: "Profit", value: 32218, growth_rate: 5.39, icon: <FaDollarSign/>},
        {name: "New customer", value: 298, growth_rate: 6.84, icon: <FaRegUserCircle/>},
    ]

    useEffect(() => {
      const fetchDataUsers = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/users");
          setUsers(res.data);
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      }
      fetchDataUsers();
    }, []);

    const handleFormSubmit = async (formData) => {
      console.log("Form data being submitted:", formData);
      try {
        if (!formData.fullName || !formData.email || !formData.phone) {
          throw new Error("Please fill in all required fields.");
        }

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

        const res = await axios.post(
          "http://localhost:5000/api/users",
          userData,
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );

        if (res.status === 201) {
          setUsers((prevUsers) => [...prevUsers, res.data])
          toast.success("User added successfully!");
          setIsModalOpen(false);
        }
      } catch (err) {
        console.error("API error details:", {
          response: err.response?.data,
          message: err.message,
          config: err.config,
        });
        toast.error(
          err.response?.data?.message || err.message || "Failed to add user"
        );
      }
    }

    // const handleAddUser = () => {
    //   try {

    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    


    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">
            <div className="loading-spinner"></div>
            <p className="text-violet-600 font-bold">Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4">
        <h1 className="text-violet-600 font-bold text-3xl">Dashboard</h1>
        <div className="overview mt-6">
          <h1 className="flex items-center gap-2 text-violet-600 font-bold text-2xl">
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
            <h1 className="flex items-center gap-2 text-violet-600 font-bold text-2xl">
              <BiSolidDetail />
              Detailed report
            </h1>
            <div className="group-button flex gap-4 h-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 border border-violet-600 rounded-xl w-30 justify-center text-violet-700 cursor-pointer hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out"
              >
                <FiPlus size={20} />
                Add User
              </button>
              <button className="flex items-center gap-2 border border-violet-600 rounded-xl w-25 justify-center text-violet-700 cursor-pointer hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out">
                <BiImport size={20} />
                Import
              </button>
              <button className="flex items-center gap-2 border border-violet-600 rounded-xl w-25 justify-center text-violet-700 cursor-pointer hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out">
                <BiExport size={20} />
                Export
              </button>
            </div>
          </div>
          <div className="table-user mt-2">
            <UserTable users={users} />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Enter user information"
          width="max-w-3xl"
          // onClick={() => {
          //   handleAddUser();
          // }}
        >
          <UserForm
            userData={selectedUser}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      </div>
    );
}

export default Dashboard;