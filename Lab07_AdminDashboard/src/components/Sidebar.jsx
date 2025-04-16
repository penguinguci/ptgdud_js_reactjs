import logo from "/logo.png";
import group from "/Group.png"
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
    <div className="flex flex-col h-screen bg-white w-64">
      {/* Logo Section */}
      <Link
        to="/dashboard"
        className="flex items-center justify-center p-4 transition-colors"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
      </Link>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`mt-2 flex items-center w-full px-4 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#f44b87] font-medium text-white"
                    : "hover:bg-[#eb8bad]"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="text-2sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex w-40 items-center justify-center mx-auto mt-6 mb-2">
          <img className="w-full h-full" src={group} alt="group" />
        </div>
      </nav>

      <div className="p-4 ">
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
            <p className="text-sm font-mediumtruncate">
              {admin?.fullName || "Guest"}
            </p>
            <p className="text-xs">Admin</p>
          </div>
        </div>

        <button className="flex items-center justify-center w-full py-2 px-4 bg-[#f44b87] hover:bg-[#f44b86dd] hover:text-white rounded-md transition-colors cursor-pointer">
          <MdLogout className="mr-2" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
