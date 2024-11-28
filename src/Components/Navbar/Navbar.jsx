import React from "react";
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
            <a href="/" className="navbar-logo-link">
              <img src={avatarImg} alt="Avatar" />
              <div className="navbar-logo-text">
                <span>Kiếm Hiệp Tình 3D</span>
                <span>NPH ChuChu</span>
              </div>
            </a>
          </li>
        </ul>
        <ul className="navbar-links">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <a href={item.href} target={item.target || "_self"}>
                  {item.label}
                </a>
              </li>
              {index === Math.floor(navItems.length / 2) - 1 && (
                <li key="logo">
                  <a href="home.html">
                    <img src={logo} alt="Logo" />
                  </a>
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
