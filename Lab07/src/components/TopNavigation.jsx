import { FaBell, FaRegQuestionCircle } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import avatar from "/avatar.png";

const TopNavigation = ({ admin }) => {
  // chuyển dạng base64 sang ảnh
  const convertBase64ToImage = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  return (
    <div className="py-2 flex items-center gap-4 shadow-md justify-end mx-4">
      <div className="left search flex  items-center">
        <span className="border w-12 h-10 border-violet-300 rounded-l-xl flex items-center justify-center ">
          <BiSearchAlt2 size={20} className="text-violet-600" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="border border-violet-300 rounded-r-lg w-120 h-10 px-2 focus:outline-none"
        />
      </div>
      <div className="right flex items-center gap-4">
        <div className="bell">
          <button className="flex items-center cursor-pointer">
            <FaBell
              size={20}
              className="text-violet-600 hover:text-violet-500"
            />
          </button>
        </div>
        <div className="question">
          <button className="flex items-center cursor-pointer">
            <FaRegQuestionCircle
              size={20}
              className="text-violet-600 hover:text-violet-500"
            />
          </button>
        </div>
        <div className="user flex items-center gap-2">
          <img
            src={admin?.avatar ? convertBase64ToImage(admin.avatar) : avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-violet-300"
          />
          <h1 className="text-violet-600 text-lg font-bold">
            {admin?.fullName || "Guest"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
