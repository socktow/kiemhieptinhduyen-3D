import React, { useState, useEffect } from "react";
import imgtitle from "../../../Assets/img-title-1.png";
import bgslide from "../../../Assets/img-bg-slide.png";
import bgnews from "../../../Assets/img-bg-news.png";
import icondotline from "../../../Assets/img-line.png";
import icondotnews from "../../../Assets/icon-dot-news.png";
import icondotnewsactive from "../../../Assets/icon-dot-news-ac.png";
import slide1 from "../../../Assets/Slides/slide1.png";
import slide2 from "../../../Assets/Slides/slide2.png";
import slide3 from "../../../Assets/Slides/slide3.png";
import btnviewmore from "../../../Assets/img-bnt-viewmore.png";
import icondot2 from "../../../Assets/icon-dot-2.png";

const NewFeed = () => {
  const slides = [slide1, slide2, slide3];
  const newsArticles = [
    {
      title: "[TIN TỨC] [SỰ KIỆN WEB] GIÁNG SINH A ...",
      date: "19.12",
    },
    {
      title: "[TIN TỨC] [SỰ KIỆN WEB] GIÁNG SINH A ...",
      date: "19.12",
    },
    {
      title: "[TIN TỨC] [SỰ KIỆN WEB] GIÁNG SINH A ...",
      date: "19.12",
    },
    {
      title: "[TIN TỨC] [SỰ KIỆN WEB] GIÁNG SINH A ...",
      date: "19.12",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-[1572px] h-[792px]">
        <div className="relative h-[792px]">
          <div className="w-[790px] h-[239px]">
            <img
              className="absolute top-0 left-[391px] bg-[50%_50%]"
              src={imgtitle}
              alt="title"
            />
          </div>
          <div className="absolute w-[1572px] h-[622px] top-[170px] left-0">
            <div className="relative h-[622px]">
              <div className="w-[788px] h-[622px]">
                <img
                  className="absolute top-0 left-0 bg-cover bg-[50%_50%]"
                  src={bgslide}
                  alt=""
                />
                <div className="relative w-[500px] h-[477px] top-[89px] left-[148px]">
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      className={`w-[508px] h-[406px] left-0 object-cover top-0 absolute transition-opacity duration-500 ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                      src={slide}
                      alt={`slide ${index + 1}`}
                    />
                  ))}
                  <img
                    className="absolute w-[327px] h-5 top-[425px] left-[86px] object-cover"
                    src={icondotline}
                    alt="icondotline"
                  />
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer"
                      onClick={() => handleDotClick(index)}
                    >
                      <img
                        className="absolute left-[122px] w-[78px] h-[70px] top-[399px] object-cover"
                        style={{
                          left: `${122 + index * 78}px`,
                          zIndex: 1,
                        }}
                        src={icondotnews}
                        alt="icon dot news"
                      />
                      {currentSlide === index && (
                        <img
                          className="absolute w-[47px] h-9 top-[416px]"
                          style={{
                            left: `${138 + index * 78}px`,
                            zIndex: 2,
                          }}
                          src={icondotnewsactive}
                          alt="icon dot news active"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* News */}
              <div className="absolute w-[788px] h-[622px] top-0 left-[784px] bg-cover bg-[50%_50%]">
                <img src={bgnews} alt="bg news" />
                <div className="absolute w-[233px] h-[75px] top-[467px] left-[284px]">
                  <div className="relative w-[221px] h-[72px] bg-cover bg-[50%_50%]">
                    <img
                      className="absolute w-[221px] h-[72px]"
                      src={btnviewmore}
                      alt="button viewmore"
                    />
                    <div className="absolute top-[20px] left-[57px] font-nomal text-white text-2xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                      Xem Thêm
                    </div>
                  </div>
                </div>
                <div className="absolute w-[512px] h-9 top-[133px] left-[154px]">
                  <div className="absolute top-0 left-0 font-nomal text-[#5459b8] text-3xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                    Tất Cả
                  </div>
                  <div className="absolute top-0 left-[109px] font-nomal text-[#5459b8] text-3xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                    Tin Tức
                  </div>
                  <div className="absolute top-0 left-[220px] font-nomal text-[#5459b8] text-3xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                    Sự Kiện
                  </div>
                  <div className="absolute top-0 left-[350px] font-nomal text-[#5459b8] text-3xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                    Hướng Dẫn
                  </div>
                </div>
                <div className="absolute w-4 h-[216px] top-[226px] left-[146px]">
                  {[0, 1, 2, 3].map((_, index) => (
                    <img
                      key={index}
                      className="absolute w-4 h-[9px] object-cover"
                      style={{ top: `${index * 69}px` }}
                      src={icondot2}
                      alt="icon dot news"
                    />
                  ))}
                </div>
                {newsArticles.map((article, index) => (
                  <div
                    key={index}
                    className="absolute w-[489px] h-5"
                    style={{ top: `${220 + index * 69}px`, left: "180px" }}
                  >
                    <p className="absolute top-0 left-0 text-[#5459b8] text-xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                      {article.title}
                    </p>
                    <div className="absolute top-0 left-[410px] text-[#5459b8] text-xl tracking-[0] leading-[Truepx] whitespace-nowrap">
                      {article.date}
                    </div>
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

export default NewFeed;
