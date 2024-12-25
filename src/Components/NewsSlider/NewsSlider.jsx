import React from 'react';
import icondotline from "../../Assets/img-line.png";
import icondotnews from "../../Assets/icon-dot-news.png";
import icondotnewsactive from "../../Assets/icon-dot-news-ac.png";
import bgslide from "../../Assets/img-bg-slide.png";

const NewsSlider = ({ slides, currentSlide, onDotClick }) => {
  return (
    <div className="relative w-[788px] h-[622px]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgslide}
        alt="Slide Background"
      />
      <div className="relative w-[500px] h-[477px] top-[89px] left-[148px]">
        {slides.map((slide, index) => (
          <img
            key={index}
            className={`absolute w-[508px] h-[406px] transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <img
          className="absolute w-[327px] h-5 top-[425px] left-[86px]"
          src={icondotline}
          alt="Dot Line"
        />
        {slides.map((_, index) => (
          <img
            key={index}
            className={`absolute w-[78px] h-[70px] top-[399px] cursor-pointer ${
              currentSlide === index && "z-20"
            }`}
            style={{ left: `${122 + index * 78}px` }}
            src={currentSlide === index ? icondotnewsactive : icondotnews}
            alt={`Dot ${index + 1}`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
