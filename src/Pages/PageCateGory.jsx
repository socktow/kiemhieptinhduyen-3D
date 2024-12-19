import React, { useState, useEffect } from "react";
import api from "../Api/api";
import Item from "../Components/Item/Item";
import icondotnews from "../Assets/icon-dot-news.png";
import icondotnewsactive from "../Assets/icon-dot-news-ac.png";
import icondotnewsline from "../Assets/icon-dot-news-line.png";
import imgline from "../Assets/img-line.png";
const PageCateGory = ({ banner }) => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("tin-tuc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const categories = [
    { name: "Tin Tức", path: "tin-tuc" },
    { name: "Sự Kiện", path: "su-kien" },
    { name: "Tính Năng", path: "tinh-nang" },
    { name: "Hướng Dẫn", path: "huong-dan" },
  ];

  // Fetch articles based on selected category
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.getarticles();
        const filteredArticles = response.filter(
          (article) => article.contentType === selectedCategory
        );
        setArticles(filteredArticles);
        setCurrentPage(1); // Reset to first page when category changes
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const displayedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-category">
      <div
        className="banner h-72 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>

      {/* Category Tabs */}
      <div className="header text-5xl py-10 px-12 flex gap-x-16 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.path)}
            className={`text-blue-600 hover:underline font-semibold ${
              selectedCategory === cat.path ? "underline" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="content max-w-7xl mx-auto p-5 space-y-4">
        {displayedArticles.map((article, index) => (
          <div key={article._id}>
            <Item
              avatar={article.thumbnail}
              title={article.title}
              date={new Date(article.publishDate).toLocaleDateString("vi-VN")}
              link={`/news/${selectedCategory}/${article._id}`}
            />

            {/* Show imgline between articles, but not after the last article */}
            {index < displayedArticles.length - 1 && (
              <div className="flex justify-center my-4">
                <img
                  src={imgline}
                  alt="line between articles"
                  className="w-3/6 h-2.5"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex flex-col items-center mt-8 space-y-4">
        <div className="relative w-96 h-8">
          {/* Background line */}
          <img
            src={icondotnewsline}
            alt="pagination background"
            className="absolute inset-0 w-full h-full"
          />
          {/* Pagination dots */}
          <div className="absolute inset-0 flex justify-between items-center px-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`relative cursor-pointer flex justify-center items-center ${
                  currentPage === index + 1 ? "w-16 h-16" : "w-14 h-14"
                }`} // Increased size here
              >
                <img
                  src={
                    currentPage === index + 1 ? icondotnewsactive : icondotnews
                  }
                  alt={`page ${index + 1}`}
                  className={`${
                    currentPage === index + 1
                      ? "w-full h-full"
                      : "w-full h-full opacity-80"
                  }`}
                />
                {/* Page number inside dot */}
                <span
                  className={`absolute text-sm font-bold ${
                    currentPage === index + 1 ? "text-white" : "text-gray-800"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCateGory;
