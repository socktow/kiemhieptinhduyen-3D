import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../Assets/img-avata.png";
import { useSelector } from "react-redux";
import icondot from "../../Assets/icon-dot.png";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

  const navItems = [
    { href: "/home", label: "Trang Chủ" },
    { href: "/home/news/tin-tuc", label: "Sự Kiện" },
    { href: "/home/", label: "Đổi Quà" },
    { href: "/home/", label: "Điều Khoản" },
    { href: "/home/", label: "Hỗ Trợ" },
    {
      href: "https://www.facebook.com/odaycomotchuchu",
      label: "Cộng Đồng",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/home/login");
  };

  return (
    <div className="main-page">
      <nav className="bg-[#1c253e] border-b-4 border-[#445472]">
        <div className="flex justify-between items-center py-6 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white no-underline">
              <img
                src={avatarImg}
                alt="Avatar"
                className="h-16 w-16 mr-4 object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Kiếm Hiệp Tình Duyên</span>
                <span className="text-base opacity-80">NPH ChuChu</span>
              </div>
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-4 text-4xl">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    {item.target ? (
                      <a
                        href={item.href}
                        target={item.target}
                        rel="noopener noreferrer"
                        className="text-white font-bold hover:text-[#ff9800] transition"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-white font-bold hover:text-[#ff9800] transition"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                  {index < navItems.length - 1 && (
                    <li>
                      <img
                        src={icondot}
                        alt="Dot Icon"
                        className="h-4 w-4 mx-2"
                      />
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Login/Logout Button */}
          <div className="relative">
            {userInfo ? (
              <div className="relative">
                <button
                  className="bg-[#ff9800] text-white px-4 py-2 rounded font-bold hover:bg-[#e58a00] transition w-full text-left"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  {userInfo.username}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 bg-[#2a3552] text-white rounded-lg shadow-lg mt-2 w-48">
                    <ul className="space-y-2 p-2">
                      <li>
                        <Link
                          to="/home/user"
                          className="block py-2 px-4 hover:bg-[#3d4b6b] rounded-lg"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Thông tin
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/home/nap-tien"
                          className="block py-2 px-4 hover:bg-[#3d4b6b] rounded-lg"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Nạp Tiền
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block py-2 px-4 hover:bg-[#3d4b6b] rounded-lg w-full text-left"
                        >
                          Thoát
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/home/login"
                className="bg-[#ff9800] text-white px-4 py-2 rounded font-bold hover:bg-[#e58a00] transition"
              >
                Đăng Nhập
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
