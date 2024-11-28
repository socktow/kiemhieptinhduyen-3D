import React from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../Assets/img-avata.png";
import logo from "../../Assets/logo.png";
import '../Scss/Navbar.scss';

const Navbar = () => {
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
    { href: "/home/login", label: "Đăng Nhập" },
  ];

  return (
    <div className="main-page">
      <nav className="header_pc">
        <ul className="navbar-logo">
          <li>
            <Link to="/" className="navbar-logo-link">
              <img src={avatarImg} alt="Avatar" />
              <div className="navbar-logo-text">
                <span>Kiếm Hiệp Tình 3D</span>
                <span>NPH ChuChu</span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                {item.target ? (
                  // Nếu có target="_blank", dùng thẻ <a> thông thường
                  <a href={item.href} target={item.target} rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  // Nếu không có target, dùng <Link> để chuyển trang nội bộ mà không tải lại
                  <Link to={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
              {index === Math.floor(navItems.length / 2) - 1 && (
                <li key="logo">
                  <Link to="/home">
                    <img src={logo} alt="Logo" />
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
