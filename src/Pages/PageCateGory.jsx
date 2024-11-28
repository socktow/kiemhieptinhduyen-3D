import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./ShopCategory.scss";
import pageContent from './PageContent.json';

const PageCateGory = (props) => {
  const { category, banner } = props;
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const categoryContent = pageContent[category] || [];
    setContent(categoryContent);
  }, [category]);

  const handleClick = (title) => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, '');
    navigate(`/home/news/${category}/${formattedTitle}`);
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner w-[100vw] max-h-[300px] object-cover" src={banner} alt="Banner" />
      
      <div className="shopcategory-content flex flex-col items-center space-y-6 mx-auto w-full py-6">
        {content && content.length > 0 ? (
          content.map((item, index) => (
            <div key={index} className="shopcategory-article bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow w-72">
              <div className="flex flex-row items-center space-x-4 mb-4">
                {/* Phần Avatar */}
                <div className="avatar w-16 h-16 rounded-full overflow-hidden">
                  <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>

                {/* Phần Title */}
                <div className="flex-1">
                  <h2 
                    onClick={() => handleClick(item.title)} 
                    className="cursor-pointer text-xl font-semibold text-left text-blue-600 hover:underline"
                  >
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Phần Ngày Đăng và Nút Xem Bài Viết */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">{item.date}</p>
                <button 
                  onClick={() => handleClick(item.title)} 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Xem Bài Viết
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Trang không tồn tại hoặc không có bài viết nào.</p>
        )}
      </div>

      <div className="shopcategory-loadmore text-center mt-6">
        <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default PageCateGory;
