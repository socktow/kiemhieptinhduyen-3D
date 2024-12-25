import React, { useState, useEffect } from "react";
import api from "../Api/api";
import Item from "../Components/Item/Item";
import icondotnews from "../Assets/icon-dot-news.png";
import icondotnewsactive from "../Assets/icon-dot-news-ac.png";
import icondotnewsline from "../Assets/icon-dot-news-line.png";
import innerpg1 from "../Assets/inner_bg1.webp";
import innerpg2 from "../Assets/inner_bg2.webp";

const PageCateGory = ({ banner }) => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("su-kien");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const itemsPerPage = 3;

  const categories = [
    { name: "Tin Tức", path: "tin-tuc" },
    { name: "Sự Kiện", path: "su-kien" },
    { name: "Tính Năng", path: "tinh-nang" },
    { name: "Hướng Dẫn", path: "huong-dan" },
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.getarticles();
        setAllArticles(response);
        const filteredArticles = response.filter(
          (article) => article.contentType === selectedCategory
        );
        setArticles(filteredArticles);
      } catch (error) {
        setError("Error fetching articles: " + error.message);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const filteredArticles = allArticles.filter(
      (article) => article.contentType === selectedCategory
    );
    setArticles(filteredArticles);
    setCurrentPage(1);
  }, [selectedCategory, allArticles]);

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const displayedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-category relative bg-white">
      {/* Banner */}
      <div
        className="banner h-72 bg-cover bg-center relative z-10"
        style={{
          backgroundImage: `url(${banner})`,
          zIndex: 1,
        }}
      ></div>

      {/* Inner Backgrounds */}
      <div className="relative w-full min-h-screen z-0">
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${innerpg1})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${innerpg2})`,
            backgroundSize: "cover",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 bg-opacity-90 max-w-5xl mx-auto p-5 space-y-8">
          {/* Category Tabs */}
          <div className="bg-white rounded-md shadow-md header text-xl md:text-3xl py-6 flex items-center justify-center md:gap-x-4">
            {/* Hiển thị menu dạng nút trên màn hình lớn */}
            <div className="hidden md:flex">
              {categories.map((cat, index) => (
                <React.Fragment key={cat.name}>
                  <button
                    onClick={() => setSelectedCategory(cat.path)}
                    className={`px-6 py-2 font-semibold border-b-2 transition-all duration-300 ${
                      selectedCategory === cat.path
                        ? "border-white text-black"
                        : "border-transparent text-black hover:border-white hover:text-blue-600"
                    }`}
                  >
                    {cat.name}
                  </button>
                  {index < categories.length - 1 && (
                    <span className="text-gray-400 font-bold mx-2">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Hiển thị menu dạng select trên màn hình nhỏ */}
            <div className="flex md:hidden w-full justify-center">
              <select
                className=" px-4 py-2 text-black font-semibold text-3xl"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.path}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Articles List */}
          <div className="content space-y-8">
            {displayedArticles.map((article) => {
              if (!article._id) {
                setError("Article missing ID: " + article);
                return null;
              }

              return (
                <div key={article._id}>
                  <Item
                    avatar={article.thumbnail}
                    title={article.title}
                    date={new Date(article.publishDate).toLocaleDateString(
                      "vi-VN"
                    )}
                    id={article._id}
                    contentType={article.contentType}
                  />
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="pagination flex flex-col items-center mt-8 space-y-4">
            <div className="relative w-64 h-8">
              <img
                src={icondotnewsline}
                alt="pagination background"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 flex justify-between items-center px-6">
                {Array.from({ length: totalPages }, (_, index) => (
                  <div
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative cursor-pointer flex justify-center items-center ${
                      currentPage === index + 1 ? "w-30 h-30" : "w-30 h-30"
                    }`}
                  >
                    <img
                      src={
                        currentPage === index + 1
                          ? icondotnewsactive
                          : icondotnews
                      }
                      alt={`page ${index + 1}`}
                      className="w-full h-full"
                    />
                    <span
                      className={`absolute text-lg font-bold ${
                        currentPage === index + 1
                          ? "text-red-600"
                          : "text-white"
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
      </div>
    </div>
  );
};

export default PageCateGory;
