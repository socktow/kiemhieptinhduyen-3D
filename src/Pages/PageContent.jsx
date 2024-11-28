import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pageContent from './PageContent.json'; // Giả sử bạn có file pageContent.json

const PageContent = () => {
  const { category, title } = useParams(); // Lấy category và title từ URL
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Chuyển đổi title sang định dạng có thể tìm kiếm trong JSON
    const formattedTitle = title.replace(/-/g, ' '); 
    const categoryContent = pageContent[category] || [];
    const article = categoryContent.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === title);
    setContent(article);
  }, [category, title]);

  return (
    <div>
      {content ? (
        <div>
          <h1>{content.title}</h1>
          <p><strong>Ngày Đăng:</strong> {content.date}</p>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
      ) : (
        <p>Bài viết không tồn tại.</p>
      )}
    </div>
  );
};

export default PageContent;
