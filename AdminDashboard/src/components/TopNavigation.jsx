import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { useState } from "react";

const TopNavigation = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white shadow-sm py-3 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
        >
          <FiMenu size={20} />
        </button>

        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FiBell size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            AU
          </div>
          <span className="hidden md:inline-block font-medium text-gray-700">
            Admin User
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
