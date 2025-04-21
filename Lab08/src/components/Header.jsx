import { useState } from "react";
import logo from '/logo.png';
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md relative">
        <div className="flex items-center space-x-4 ">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-pink-600">Chefify</h1>
        </div>

        <div className="hidden md:flex items-center w-full max-w-6xl justify-between">
          <div className="relative">
            <BiSearchAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-800" />
            <input
              type="text"
              placeholder="Search..."
              className="w-100 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-pink-600">
              What to cook
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              Recipes
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              Ingredients
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              Occasions
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              About Us
            </a>
          </nav>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-100 cursor-pointer">
            Login
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 cursor-pointer">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-pink-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`absolute top-0 right-0 bg-white shadow-lg w-64 h-screen p-4 z-20 transform transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="text-gray-700 hover:text-pink-600 focus:outline-none mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-pink-600">
              What to cook
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              Recipes
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              Ingredients
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              Occasions
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600">
              About Us
            </a>
          </nav>
          <div className="mt-6 flex flex-col space-y-2">
            <button className="w-full px-4 py-2 border border-pink-600 text-pink-600 rounded-full hover:bg-pink-100">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    );
}

export default Header;