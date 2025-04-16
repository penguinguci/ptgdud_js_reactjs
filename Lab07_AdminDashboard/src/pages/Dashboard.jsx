import Overview from "../components/Overview.jsx";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
