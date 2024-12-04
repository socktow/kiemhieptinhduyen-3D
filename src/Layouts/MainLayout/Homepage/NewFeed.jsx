import React from "react";
import imgTitle1 from "../../../Assets/img-title-1.png";
import imgslide from "../../../Assets/img-bg-slider.png";
import imgnews from "../../../Assets/img-bg-news.png";

const NewFeed = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 newfeed-container">
      <img src={imgTitle1} alt="Title" className="w-auto h-auto" />
      
      {/* Container for images */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 md:space-y-0 w-full">
        <img src={imgslide} alt="Slider" className="w-auto h-auto object-cover" />
        <img src={imgnews} alt="News" className="w-auto h-auto object-cover" />
      </div>
    </div>
  );
};

export default NewFeed;
