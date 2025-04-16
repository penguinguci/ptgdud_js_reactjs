import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiLogOut,
} from "react-icons/fi";
import logo from "/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FiHome /> },
    { path: "/user-management", name: "User Management", icon: <FiUsers /> },
    { path: "/settings", name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div
      className={`sidebar bg-blue-600 flex flex-col justify-between items-center p-4 gap-4 text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } h-screen sticky top-0`}
    >
      <div className="w-full flex flex-col items-center gap-6 h-full">
        <div className="logo flex flex-col items-center gap-2 w-full">
          <Link
            to="/dashboard"
            className="flex flex-col items-center gap-2 w-full overflow-hidden"
          >
            <img src={logo} alt="logo" className="w-10 h-10" />
            {!isCollapsed && (
              <h1 className="text-xl font-bold whitespace-nowrap">
                FUNNY ADMIN
              </h1>
            )}
          </Link>
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-blue-700 transition duration-300 self-end -mr-2"
        >
          {isCollapsed ? (
            <FiChevronRight size={20} />
          ) : (
            <FiChevronLeft size={20} />
          )}
        </button>

        <nav className="w-full flex-1">
          <ul className="flex flex-col gap-2 w-full">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-md transition duration-300 hover:bg-blue-700 ${
                    location.pathname === item.path ? "bg-blue-800" : ""
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && (
                    <span className="ml-3 whitespace-nowrap">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full border-t border-blue-500 pt-4 pb-4">
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-blue-700 transition duration-300">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                <span className="text-sm font-bold">AD</span>
              </div>
              {!isCollapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-blue-200">admin@example.com</p>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button className="p-1 rounded-full hover:bg-blue-600">
                <FiLogOut size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
