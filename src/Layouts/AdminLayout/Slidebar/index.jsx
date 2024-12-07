import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState("");

  const toggleMenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? "" : menuName);
  };

  const menuItems = [
    {
      title: "Quản Lý Bài Viết",
      path: "/admin/posts",
      subMenu: [
        { title: "Tạo Bài Viết", path: "/admin/posts/create" },
        { title: "Danh Sách Bài Viết", path: "/admin/posts/list" },
        { title: "Upload Ảnh", path: "/admin/posts/upload" },
      ],
    },
    {
      title: "Quản Lý Tài Khoản",
      path: "/admin/users",
      subMenu: [
        { title: "Thêm Tài Khoản", path: "/admin/users/create" },
        { title: "Chỉnh Sửa Tài Khoản", path: "/admin/users/edit" },
        { title: "Cộng Xu Tài Khoản", path: "/admin/users/add-credits" },
      ],
    },
    {
      title: "Quản Lý GiftCode",
      path: "/admin/giftcode",
      subMenu: [
        { title: "Danh Sách GiftCode", path: "/admin/giftcode/list" },
        { title: "Tạo GiftCode", path: "/admin/giftcode/create" },
        { title: "Lịch sử Nhập GiftCode", path: "/admin/giftcode/history" },
      ],
    },
    {
      title: "Quản Lý Mốc Nạp",
      path: "/admin/recharge-goals",
      subMenu: [
        { title: "Tạo Mốc Nạp", path: "/admin/recharge-goals/create" },
        { title: "Lịch Sử Nhận Mốc Nạp", path: "/admin/recharge-goals/history" },
      ],
    },
    {
      title: "Quản Lý Nạp Thẻ",
      path: "/admin/recharges",
      subMenu: [
        { title: "Chỉnh Rate Nạp Thẻ", path: "/admin/recharges/rate" },
        { title: "Lịch Sử Nạp Thẻ", path: "/admin/recharges/history" },
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
              className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700"
            >
              {menu.title}
            </button>
            {expandedMenu === menu.title && (
              <div className="ml-4 space-y-2">
                {menu.subMenu.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={sub.path}
                    className="block py-2 px-4 rounded hover:bg-gray-600"
                  >
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
