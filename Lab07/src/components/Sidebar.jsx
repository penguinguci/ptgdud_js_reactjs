import logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdCode,
  MdOutlineMessage,
  MdLogout,
} from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import avatar from "/avatar.png";

const Sidebar = ({ admin }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdOutlineDashboardCustomize className="text-xl" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <GoProjectSymlink className="text-xl" />,
    },
    {
      name: "Teams",
      path: "/teams",
      icon: <RiTeamLine className="text-xl" />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <GrAnalytics className="text-xl" />,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: <MdOutlineMessage className="text-xl" />,
    },
    {
      name: "Integrations",
      path: "/integrations",
      icon: <MdCode className="text-xl" />,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-violet-400 w-64">
      {/* Logo Section */}
      <Link
        to="/dashboard"
        className="flex items-center p-4 hover:bg-violet-500 transition-colors"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        <h1 className="ml-2 text-xl font-bold text-white">Admin Funny</h1>
      </Link>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`mt-2 flex items-center w-full px-4 py-2 text-white rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-violet-600 font-medium"
                    : "hover:bg-violet-500"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="text-2sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-violet-500">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              src={
                admin?.avatar
                  ? `data:image/jpeg;base64,${admin.avatar}`
                  : avatar
              }
              alt={admin?.fullName || "User avatar"}
              className="h-10 w-10 rounded-full border-2 border-white"
            />
          </div>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">
              {admin?.fullName || "Guest"}
            </p>
            <p className="text-xs text-violet-100">Admin</p>
          </div>
        </div>

        <button className="flex items-center justify-center w-full py-2 px-4 text-white bg-violet-600 hover:bg-violet-700 rounded-md transition-colors cursor-pointer">
          <MdLogout className="mr-2" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
