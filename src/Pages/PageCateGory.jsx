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
      <img className="shopcategory-banner" src={banner} alt="Banner" />
      <div className="shopcategory-content">
        {content && content.length > 0 ? (
          content.map((item, index) => (
            <div key={index} className="shopcategory-article">
              <h2 onClick={() => handleClick(item.title)} style={{ cursor: 'pointer' }}>
                {item.title}
              </h2>
              <p><strong>Ngày Đăng:</strong> {item.date}</p>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))
        ) : (
          <p>Trang không tồn tại hoặc không có bài viết nào.</p>
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore-More
      </div>
    </div>
  );
};

export default PageCateGory;
