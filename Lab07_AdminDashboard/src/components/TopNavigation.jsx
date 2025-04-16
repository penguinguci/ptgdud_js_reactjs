import { FaBell, FaRegQuestionCircle } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import avatar from "/avatar.png";

const TopNavigation = ({ admin }) => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="flex items-center justify-end gap-2 h-16 px-4 sm:px-6 lg:px-8">
        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md">
          <div className="relative flex items-center w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none cursorp">
              <BiSearchAlt2 className="h-5 w-5 text-gray-900" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f44b87] focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-500 hover:text-[#f44b87] focus:outline-none focus:ring-2 focus:ring-[#f44b86ea] cursor-pointer">
            <FaBell className="h-5 w-5" />
          </button>

          <button className="p-1 rounded-full text-gray-500 hover:text-[#f44b87] focus:outline-none focus:ring-2 focus:ring-[#f44b86ea] cursor-pointer">
            <FaRegQuestionCircle className="h-5 w-5" />
          </button>

          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full bg-violet-100 overflow-hidden border border-violet-200">
              <img
                src={
                  admin?.avatar
                    ? `data:image/jpeg;base64,${admin.avatar}`
                    : avatar
                }
                alt={admin?.fullName || "User avatar"}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden md:inline text-2sm font-medium text-gray-700">
              {admin?.fullName || "Guest"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
