import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png"
const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto mr-3"
          />
          <span className="text-lg font-semibold tracking-wide">
            Kiếm Hiệp Tình Duyên 3D - Admin
          </span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            id="mobile-menu-button"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden" id="mobile-menu">
        <div className="bg-gray-700 px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-500 hover:text-gray-200"
          >
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-500 hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
