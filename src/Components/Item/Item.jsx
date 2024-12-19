import React from "react";
import { Link } from "react-router-dom";

const Item = ({ avatar, title, date, link }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow relative">
      {/* Phần 1: Avatar */}
      <div className="w-40 h-40 flex-shrink-0">
        <img
          src={avatar}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Phần 2: Tiêu đề và ngày tháng */}
      <div className="flex-auto flex flex-col p-4">
        <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{date}</p>
      </div>

      {/* Phần 3: Nút "Xem bài viết" */}
      <div className="absolute bottom-10 right-4 ">
        <Link
          to={link}
          className="bg-blue-500 text-white py-6 px-10 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          Xem bài viết
        </Link>
      </div>
    </div>
  );
};

export default Item;
