import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../Api/api";
import innerpg1 from "../Assets/inner_bg1.webp";
import innerpg2 from "../Assets/inner_bg2.webp";

const ArticleDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      console.log("URL params:", { category, id });

      if (!id) {
        console.error("No ID in URL");
        setError("ID bài viết không hợp lệ");
        return;
      }

      try {
        console.log("Making API call for ID:", id);
        const response = await api.getarticlebyid(id);
        console.log("API Response:", response);

        if (!response) {
          console.error("No response from API");
          setError("Không tìm thấy bài viết");
          return;
        }

        // Kiểm tra xem bài viết có thuộc category đúng không
        if (response.contentType !== category) {
          console.error("Article category mismatch:", { 
            expected: category, 
            actual: response.contentType 
          });
          setError("Không tìm thấy bài viết trong chuyên mục này");
          return;
        }

        setArticle(response);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError(
          error.response?.data?.message || 
          "Có lỗi xảy ra khi tải bài viết"
        );
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
    <div className="article-detail relative bg-white min-h-screen">
      {/* Banner */}
      <div
        className="banner h-72 bg-cover bg-center relative z-10"
        style={{
          backgroundImage: `url(${article.thumbnail})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4">{article.title}</h1>
        </div>
      </div>

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
        <div className="relative z-10 bg-white bg-opacity-95 max-w-4xl mx-auto my-8 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span className="mr-4">
                {new Date(article.publishDate).toLocaleDateString("vi-VN", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="capitalize">{article.contentType}</span>
            </div>
          </div>

          {article.thumbnail && (
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-auto rounded-lg mb-6 max-h-[400px] object-cover"
            />
          )}

          <div 
            className="prose max-w-none mt-6 text-gray-800"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
