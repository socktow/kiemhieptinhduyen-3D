import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../Api/api";
import innerpg1 from "../Assets/inner_bg1.webp";
import innerpg2 from "../Assets/inner_bg2.webp";
import Breadcrums from "../Components/Breadcrums/Breadcrums";

const ArticleDetail = () => {
  const { category, id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetail = async () => {

      if (!id) {
        console.error("No ID in URL");
        setError("ID bài viết không hợp lệ");
        return;
      }      

      try {
        const response = await api.getarticlebyid(id);

        if (!response) {
          console.error("No response from API");
          setError("Không tìm thấy bài viết");
          return;
        }

        if (response.contentType !== category) {
          console.error("Article category mismatch:", {
            expected: category,
            actual: response.contentType,
          });
          setError("Không tìm thấy bài viết trong chuyên mục này");
          return;
        }

        setArticle(response);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError(error.response?.data?.message || "Có lỗi xảy ra khi tải bài viết");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [category, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="text-xl text-gray-600">{error || "Không tìm thấy bài viết"}</div>
      </div>
    );
  }

  return (
    <div className="article-detail relative min-h-screen">
      {/* Inner Backgrounds */}
      <div className="relative w-full min-h-screen">
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
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <Breadcrums category={category} title={article.title} />
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
              <div className="flex items-center text-gray-600 text-sm space-x-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(article.publishDate).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span className="capitalize">{article.contentType}</span>
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Buttons */}
            <div className="flex justify-center space-x-4 mt-8 pt-8 border-t border-gray-200">
              <button className="flex items-center px-6 py-3 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Chia sẻ
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-100/90 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Lưu bài viết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
