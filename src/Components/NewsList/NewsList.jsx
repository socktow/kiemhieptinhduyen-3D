import React from 'react';
import bgnews from "../../Assets/img-bg-news.png";
import btnviewmore from "../../Assets/img-bnt-viewmore.png";
import icondot2 from "../../Assets/icon-dot-2.png";

const CATEGORIES = ["Tất Cả", "Tin Tức", "Sự Kiện", "Hướng Dẫn"];

const NewsList = ({ 
  articles, 
  selectedCategory, 
  isLoading, 
  onCategoryClick, 
  onViewMoreClick,
  onArticleClick 
}) => {
  return (
    <div className="relative w-[788px] h-[622px]">
      <img
        className="absolute w-full h-full object-cover"
        src={bgnews}
        alt="News Background"
      />
      
      {/* View More Button */}
      <div
        className="absolute top-[467px] left-[284px] w-[233px] h-[75px] cursor-pointer"
        onClick={onViewMoreClick}
      >
        <img className="w-full h-full" src={btnviewmore} alt="View More" />
        <div className="absolute top-[20px] left-[57px] text-white text-2xl">
          Xem Thêm
        </div>
      </div>

      {/* Categories */}
      <div className="absolute flex justify-between w-[512px] top-[133px] left-[154px] text-[#5459b8] text-3xl">
        {CATEGORIES.map((category, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              selectedCategory === category && "font-bold"
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* News Dots */}
      <div className="absolute top-[226px] left-[146px] space-y-[65px]">
        {articles.map((_, index) => (
          <img
            key={index}
            className="w-4 h-[9px]"
            src={icondot2}
            alt={`News Dot ${index + 1}`}
          />
        ))}
      </div>

      {/* News List */}
      <div className="absolute top-[220px] left-[180px] space-y-[42px]">
        {isLoading ? (
          <div className="text-[#5459b8] text-xl">Đang tải tin tức...</div>
        ) : articles.length === 0 ? (
          <div className="text-[#5459b8] text-xl">Không có tin tức trong mục này</div>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="flex text-[#5459b8] text-xl cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onArticleClick(article._id)}
            >
              <span>{article.date} - </span>
              <p className="hover:underline">{article.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsList;
