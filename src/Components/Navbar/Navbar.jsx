import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../Assets/img-avata.png";
import logo from "../../Assets/logo.png";
import { useSelector } from "react-redux"; // Import useSelector

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user); // Get userInfo from Redux store

  const navItems = [
    { href: "/home/news/tin-tuc", label: "Tin Tức" },
    { href: "/home/news/su-kien", label: "Sự Kiện" },
    { href: "/home/news/tinh-nang", label: "Tính Năng" },
    { href: "/home/news/huong-dan", label: "Hướng Dẫn" },
    {
      href: "https://www.facebook.com/ichikayuumenaru",
      label: "Cộng Đồng",
      target: "_blank",
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="main-page">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c253e] border-b-4 border-[#445472]">
        <div className="flex justify-between items-center py-4 px-4 md:px-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white no-underline">
              <img
                src={avatarImg}
                alt="Avatar"
                className="h-16 w-16 md:h-20 md:w-20 mr-4 object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold">
                  Kiếm Hiệp Tình 3D
                </span>
                <span className="text-base md:text-lg opacity-80">
                  NPH ChuChu
                </span>
              </div>
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <button
            className="lg:hidden text-white text-3xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isMobileMenuOpen
                ? "fixed inset-0 bg-[#1c253e] pt-20 backdrop-blur-lg bg-opacity-95"
                : "hidden"
            } lg:relative lg:block lg:bg-transparent lg:pt-0`}
          >
            <ul className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-6 lg:space-y-0">
              {navItems.map((item, index) => (
                <li key={index} className="w-full text-center lg:w-auto">
                  {item.target ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel="noopener noreferrer"
                      className="text-white text-xl font-bold hover:text-[#ff9800] transition block py-2 hover:bg-[#2a3552] rounded-lg px-4"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white text-xl font-bold hover:text-[#ff9800] transition block py-2 hover:bg-[#2a3552] rounded-lg px-4"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Login/Logout Button */}
          <div className="hidden lg:block">
            {userInfo ? (
              <button
                className="bg-[#ff9800] text-white px-12 py-3 rounded text-lg font-bold hover:bg-[#e58a00] transition"
                onClick={() => {
                  // Handle logout logic here if needed
                  localStorage.removeItem("token");
                  window.location.replace("/home/login"); // Redirect to login
                }}
              >
                {userInfo.username}
              </button>
            ) : (
              <Link
                to="/home/login"
                className="bg-[#ff9800] text-white px-12 py-3 rounded text-lg font-bold hover:bg-[#e58a00] transition"
              >
                Đăng Nhập
              </Link>
            )}
          </div>
        </div>
      </nav>
      {/* Add spacing to prevent content from hiding under fixed navbar */}
      <div className="h-24 md:h-32"></div>
    </div>
  );
};

export default Navbar;
