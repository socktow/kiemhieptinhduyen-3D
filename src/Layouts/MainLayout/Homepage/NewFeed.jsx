import React, { useState } from "react";
import imgTitle1 from "../../../Assets/img-title-1.png";
import imgslide from "../../../Assets/img-bg-slider.png";
import imgnews from "../../../Assets/img-bg-news.png";
import slide1 from "../../../Assets/Slides/slide1.png";
import slide2 from "../../../Assets/Slides/slide2.png";
import slide3 from "../../../Assets/Slides/slide3.png";
import icondot from "../../../Assets/icon-dot-3.png";
import icondotactive from "../../../Assets/icon-dot-3-active.png";
import imgline from "../../../Assets/img-line.png";

const NewFeed = () => {
  const slides = [slide1, slide2, slide3];
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  const newsItems = [
    { type: 'TIN TỨC', category: 'SỰ KIỆN WEB', title: 'GIÁNG SINH A...', date: '19.12', isNew: true },
    { type: 'TIN TỨC', category: 'SỰ KIỆN WEB', title: 'NGÀY HỘI THẢ...', date: '16.12' },
    { type: 'TIN TỨC', category: 'SỰ KIỆN WEB', title: 'NGÀY HỘI MÊ...', date: '12.12' },
    { type: 'TIN TỨC', category: 'SỰ KIỆN WEB', title: 'PHÚC LỢI CẬP...', date: '05.12' },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 newfeed-container">
      <img src={imgTitle1} alt="Title" className="w-auto h-auto mb-4" />
      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4 px-4">
        {/* Slider Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={imgslide}
            alt="Slider background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <img
              src={slides[activeSlide]}
              alt={`Slide ${activeSlide + 1}`}
              className="w-[90%] h-auto object-contain"
            />
            <div className="absolute bottom-4 flex justify-center items-center gap-2"
              style={{ backgroundImage: `url(${imgline})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '327px', height: '20px' }}>
              {slides.map((_, index) => (
                <img
                  key={index}
                  src={activeSlide === index ? icondotactive : icondot}
                  alt={`Dot ${index + 1}`}
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleSlideChange(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={imgnews}
            alt="News background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 p-6">
            {/* Tabs */}
            <div className="flex gap-6 text-blue-600 mb-4">
              <button className={`${activeTab === 'all' ? 'font-bold' : ''}`} onClick={() => setActiveTab('all')}>
                Tất cả
              </button>
              <button className={`${activeTab === 'news' ? 'font-bold' : ''}`} onClick={() => setActiveTab('news')}>
                Tin tức
              </button>
              <button className={`${activeTab === 'events' ? 'font-bold' : ''}`} onClick={() => setActiveTab('events')}>
                Sự kiện
              </button>
              <button className={`${activeTab === 'guide' ? 'font-bold' : ''}`} onClick={() => setActiveTab('guide')}>
                Hướng dẫn
              </button>
            </div>

            {/* News Items */}
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-blue-600 hover:text-blue-800 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>[{item.type}]</span>
                    <span>[{item.category}]</span>
                    <span>{item.title}</span>
                    {item.isNew && <span className="text-red-500 font-bold">NEW</span>}
                  </div>
                  <span>{item.date}</span>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-4">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full">
                xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeed;
