import React from "react";
import { Link } from "react-router-dom";
import demohuongdan from "../Assets/thum-huong-dan.jpg"
const PageCateGory = ({ banner, category }) => {
  const topics = [
    {
      id: 1,
      avatar: demohuongdan,
      title: "Hướng Dẫn Nhập Code",
      date: "01/12/2024",
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/200",
      title: "Bài viết thứ hai",
      date: "02/12/2024",
    },
  ];

  const categories = [
    { name: "Tin Tức", path: "/home/news/tin-tuc" },
    { name: "Sự Kiện", path: "/home/news/su-kien" },
    { name: "Tính Năng", path: "/home/news/tinh-nang" },
    { name: "Hướng Dẫn", path: "/home/news/huong-dan" },
  ];

  return (
    <div className="page-category">
      <div
        className="banner h-72 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
      </div>
        <div className="header text-5xl py-10 px-12 flex gap-x-16 justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="text-blue-600 hover:underline font-semibold"
            >
              {cat.name}
            </Link>
          ))}
        </div>

      {/* Topics Section */}
      <div className="content max-w-7xl mx-auto p-5 space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="topic-item flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            style={{ height: "100px" }}
          >
            {/* Avatar */}
            <div className="avatar w-auto h-auto">
              <img
                src={topic.avatar}
                alt={topic.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="content flex-auto p-4 flex flex-col justify-between relative group">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{topic.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{topic.date}</p>
              </div>

              {/* View Article Button */}
              <Link
                to={`/news/${category}/${topic.id}`}
                className="absolute bottom-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Xem bài viết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCateGory;
