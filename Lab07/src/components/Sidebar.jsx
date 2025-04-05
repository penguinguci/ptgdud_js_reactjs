import logo from '/logo.png'
import { Link } from 'react-router-dom';
import {
  MdOutlineDashboardCustomize,
  MdCode,
  MdOutlineMessage,
} from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";

const Sidebar = () => {

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

    return (
      <div className="sidebar h-screen bg-violet-400">
        <Link className="logo flex items-center gap-2 p-2" to="/dashboard">
          <img src={logo} alt="logo" />
          <h1 className="title text-lg text-white font-bold">Admin Funny</h1>
        </Link>
        <div className="menu">
          <ul className="flex flex-col py-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center text-white text-lg my-1"    
              >
                <button className="flex items-center h-10 w-full mx-2 px-4 gap-4 bg-violet-400 hover:bg-violet-600 cursor-pointer rounded-md">
                  <span>{item.icon}</span>
                  <span className='text-lg'>{item.name}</span>
                </button>
              </Link>
            ))}
          </ul>
        </div>
        <div className="bottom">
            <div className="user">
                <div className="user-image">
                    <img src="" alt="" />
                </div>
                <div className="user-name">
                    
                </div>
            </div>
            <button>
                Logout
            </button>
        </div>
      </div>
    );
}

export default Sidebar;