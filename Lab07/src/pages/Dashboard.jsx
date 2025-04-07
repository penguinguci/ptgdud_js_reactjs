import Overview from "../components/Overview.jsx"
import { FiShoppingCart } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiSolidDetail, BiImport, BiExport  } from "react-icons/bi";
import UserTable from "../components/UserTable.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, [])


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
              <button className="flex items-center gap-2 border border-violet-600 rounded-xl w-25 justify-center text-violet-700 cursor-pointer hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out">
                <BiImport size={20}/>
                Import
              </button>
              <button className="flex items-center gap-2 border border-violet-600 rounded-xl w-25 justify-center text-violet-700 cursor-pointer hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out">
                <BiExport size={20}/>
                Export
              </button>
            </div>
          </div>
         
        </div>
      </div>
    );
}

export default Dashboard;