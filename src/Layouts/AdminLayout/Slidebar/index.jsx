import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileTextOutlined, UserOutlined, GiftOutlined, PayCircleOutlined, EditOutlined, UploadOutlined, PlusCircleOutlined, HistoryOutlined } from "@ant-design/icons"; // Import các icon cần thiết

const Slidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState("");

  const toggleMenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? "" : menuName);
  };

  const menuItems = [
    {
      title: "Quản Lý Bài Viết",
      path: "/admin/posts",
      icon: <FileTextOutlined />, // Icon cho mục "Quản Lý Bài Viết"
      subMenu: [
        { title: "Tạo Bài Viết", path: "/admin/posts/create", icon: <PlusCircleOutlined /> },
        { title: "Danh Sách Bài Viết", path: "/admin/posts/list", icon: <EditOutlined /> },
        { title: "Upload Ảnh", path: "/admin/posts/upload", icon: <UploadOutlined /> },
      ],
    },
    {
      title: "Quản Lý Tài Khoản",
      path: "/admin/users",
      icon: <UserOutlined />, // Icon cho mục "Quản Lý Tài Khoản"
      subMenu: [
        { title: "Chỉnh Sửa Tài Khoản", path: "/admin/users/edit", icon: <EditOutlined /> },
        { title: "Cộng Xu Tài Khoản", path: "/admin/users/add-credits", icon: <GiftOutlined /> },
      ],
    },
    {
      title: "Quản Lý GiftCode",
      path: "/admin/giftcode",
      icon: <GiftOutlined />, // Icon cho mục "Quản Lý GiftCode"
      subMenu: [
        { title: "Danh Sách GiftCode", path: "/admin/giftcode/list", icon: <HistoryOutlined /> },
        { title: "Tạo GiftCode", path: "/admin/giftcode/create", icon: <PlusCircleOutlined /> },
        { title: "Lịch sử Nhập GiftCode", path: "/admin/giftcode/history", icon: <HistoryOutlined /> },
      ],
    },
    {
      title: "Quản Lý Mốc Nạp",
      path: "/admin/recharge-goals",
      icon: <PayCircleOutlined />, // Icon cho mục "Quản Lý Mốc Nạp"
      subMenu: [
        { title: "Tạo Mốc Nạp", path: "/admin/recharge-goals/create", icon: <PlusCircleOutlined /> },
        { title: "Lịch Sử Nhận Mốc Nạp", path: "/admin/recharge-goals/history", icon: <HistoryOutlined /> },
      ],
    },
    {
      title: "Quản Lý Nạp Thẻ",
      path: "/admin/recharges",
      icon: <PayCircleOutlined />, // Icon cho mục "Quản Lý Nạp Thẻ"
      subMenu: [
        { title: "Chỉnh Rate Nạp Thẻ", path: "/admin/recharges/rate", icon: <EditOutlined /> },
        { title: "Lịch Sử Nạp Thẻ", path: "/admin/recharges/history", icon: <HistoryOutlined /> },
      ],
    },
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="px-6 py-4 text-xl font-semibold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        {menuItems.map((menu, index) => (
          <div key={index} className="space-y-2">
            <button
              onClick={() => toggleMenu(menu.title)}
              className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
            >
              {menu.icon && <span className="mr-3">{menu.icon}</span>}
              {menu.title}
            </button>
            {expandedMenu === menu.title && (
              <div className="ml-4 space-y-2">
                {menu.subMenu.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={sub.path}
                    className="flex items-center block py-2 px-4 rounded hover:bg-gray-600"
                  >
                    {sub.icon && <span className="mr-3">{sub.icon}</span>}
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Slidebar;
