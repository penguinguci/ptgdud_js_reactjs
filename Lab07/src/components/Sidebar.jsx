import logo from '/logo.png'
import { Link } from 'react-router-dom';
import {
  MdOutlineDashboardCustomize,
  MdCode,
  MdOutlineMessage,
  MdLogout,
} from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { useState } from 'react';
import avatar from "/avatar.png";

const Sidebar = ({admin}) => {

    const [isActive, setIsActive] = useState(null); 

    const menuItems = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <MdOutlineDashboardCustomize size={25} />,
      },
      {
        name: "Projects",
        path: "/projects",
        icon: <GoProjectSymlink size={25} />,
      },
      { name: "Teams", path: "/teams", icon: <RiTeamLine size={25} /> },
      {
        name: "Analytics",
        path: "/analytics",
        icon: <GrAnalytics size={25} />,
      },
      {
        name: "Messages",
        path: "/messages",
        icon: <MdOutlineMessage size={25} />,
      },
      {
        name: "Integrations",
        path: "/integrations",
        icon: <MdCode size={25} />,
      },
    ];

    // chuyển dạng base64 sang ảnh
    const convertBase64ToImage = (base64String) => {
      return `data:image/jpeg;base64,${base64String}`;
    }

    return (
      <div className="sidebar h-screen bg-violet-400 flex flex-col justify-between">
        <Link className="logo flex items-center gap-2 p-2" to="/dashboard">
          <img src={logo} alt="logo" />
          <h1 className="title text-lg text-white font-bold">Admin Funny</h1>
        </Link>
        <div className="menu flex-grow py-4">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center text-white text-lg my-2"
              >
                <button
                  onClick={() => setIsActive(index)}
                  className={`flex items-center h-10 w-full mx-2 px-4 gap-4  hover:bg-violet-600 cursor-pointer rounded-md ${
                    isActive === index ? "bg-violet-600" : "bg-violet-400"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span style={{ fontSize: "16px" }}>{item.name}</span>
                </button>
              </Link>
            ))}
          </ul>
        </div>
        <div className="bottom flex flex-col py-2 px-2 gap-1">
          <div className="user flex items-center mx-3 gap-4 justify-start">
            <div className="user-image">
              <img
                src={
                  admin?.avatar ? convertBase64ToImage(admin.avatar) : avatar
                }
                alt="avatar"
                className="w-10 rounded-full"
              />
            </div>
            <div className="user-name">
              <h1 className="text-white text-lg">
                {admin?.fullName || "Guest"}
              </h1>
              <p className="text-gray-200 text-sm">Admin</p>
            </div>
          </div>
          <button
            className="flex items-center justify-center text-white text-lg my-1 h-10 gap-2 hover:bg-violet-600 cursor-pointer rounded-md"
            style={{ fontSize: "16px" }}
          >
            <MdLogout size={25} />
            Logout
          </button>
        </div>
      </div>
    );
}

export default Sidebar;