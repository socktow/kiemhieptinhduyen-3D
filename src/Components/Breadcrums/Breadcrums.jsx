import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrums = ({ category, title }) => {
  const categoryName = {
    'tin-tuc': 'Tin Tức',
    'su-kien': 'Sự Kiện',
    'tinh-nang': 'Tính Năng',
    'huong-dan': 'Hướng Dẫn'
  };

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
      <Link to="/home" className="hover:text-blue-600">
        HOME
      </Link>
      <span>&gt;</span>
      <Link to="/home/news" className="hover:text-blue-600">
        News
      </Link>
      <span>&gt;</span>
      <Link to={`/home/news/${category}`} className="hover:text-blue-600">
        {categoryName[category] || category}
      </Link>
      {title && (
        <>
          <span>&gt;</span>
          <span className="text-gray-800 font-medium truncate max-w-xs">
            {title}
          </span>
        </>
      )}
    </div>
  );
};

export default Breadcrums;