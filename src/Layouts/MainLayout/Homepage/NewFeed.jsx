import React, { useState } from "react";
import imgTitle1 from "../../../Assets/img-title-1.png";
import imgslide from "../../../Assets/img-bg-slider.png";  // Hình ảnh nền slider
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

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 newfeed-container">
      <img src={imgTitle1} alt="Title" className="w-auto h-auto" />
      
      {/* Container for imgslide and imgnews */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-x-4 md:space-y-0">
        
        {/* imgslide container */}
        <div className="relative flex flex-col items-center w-full md:w-[100%]">
          {/* imgslide as background (full size) */}
          <img
            src={imgslide}
            alt="Slider background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Slide display */}
          <div className="relative w-full h-full flex justify-center items-center z-10">
            <img
              src={slides[activeSlide]}
              alt={`Slide ${activeSlide + 1}`}
              className="w-[60%] h-auto object-contain"
            />
            
            {/* Dots navigation */}
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[327px] h-[20px] flex items-center justify-center"
              style={{ backgroundImage: `url(${imgline})`, backgroundSize: "cover" }}
            >
              {slides.map((_, index) => (
                <img
                  key={index}
                  src={activeSlide === index ? icondotactive : icondot}
                  alt={`Dot ${index + 1}`}
                  className="w-[16px] h-[16px] cursor-pointer mx-2"
                  onClick={() => handleSlideChange(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* imgnews section */}
        <img src={imgnews} alt="News" className="w-auto h-auto object-cover" />
      </div>
    </div>
  );
};

export default NewFeed;
