import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../Api/api";
import imgtitle from "../../../Assets/img-title-1.png";
import slide1 from "../../../Assets/Slides/slide1.png";
import slide2 from "../../../Assets/Slides/slide2.png";
import slide3 from "../../../Assets/Slides/slide3.png";
import NewsSlider from "../../../Components/NewsSlider/NewsSlider";
import NewsList from "../../../Components/NewsList/NewsList";

const slides = [slide1, slide2, slide3];

const NewFeed = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");
  const [articles, setArticles] = useState({
    "Tất Cả": [],
    "Tin Tức": [],
    "Sự Kiện": [],
    "Hướng Dẫn": []
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await api.getarticles();
        const categorizedArticles = {
          "Tất Cả": [],
          "Tin Tức": [],
          "Sự Kiện": [],
          "Hướng Dẫn": []
        };

        response.forEach(article => {
          const date = new Date(article.publishDate);
          const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
          
          const articleData = {
            title: article.title,
            date: formattedDate,
            _id: article._id,
            thumbnail: article.thumbnail,
            contentType: article.contentType
          };
          categorizedArticles["Tất Cả"].push(articleData);
          switch(article.contentType) {
            case "tin-tuc":
              categorizedArticles["Tin Tức"].push(articleData);
              break;
            case "su-kien":
              categorizedArticles["Sự Kiện"].push(articleData);
              break;
            case "huong-dan":
              categorizedArticles["Hướng Dẫn"].push(articleData);
              break;
            default:
              break;
          }
        });

        Object.keys(categorizedArticles).forEach(category => {
          categorizedArticles[category].sort((a, b) => {
            const dateA = new Date(a.date.split('.').reverse().join('-'));
            const dateB = new Date(b.date.split('.').reverse().join('-'));
            return dateB - dateA;
          });
        });

        setArticles(categorizedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const displayedArticles = (articles[selectedCategory] || []).slice(0, 4);

  return (
    <div className="bg-transparent flex justify-center w-full">
      <div className="w-[1572px] h-[792px]">
        <div className="relative h-[792px]">
          <img
            className="absolute top-0 left-[391px] w-[790px] h-[239px]"
            src={imgtitle}
            alt="Title"
          />
          <div className="absolute w-[1572px] h-[622px] top-[170px]">
            <div className="relative h-[622px] flex">
              <NewsSlider 
                slides={slides}
                currentSlide={currentSlide}
                onDotClick={setCurrentSlide}
              />
              <NewsList 
                articles={displayedArticles}
                selectedCategory={selectedCategory}
                isLoading={isLoading}
                onCategoryClick={setSelectedCategory}
                onViewMoreClick={() => navigate("/home/news/tin-tuc")}
                onArticleClick={(id) => navigate(`/home/news/${id}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeed;
