import React from "react";
import imgTitle1 from "../../../Assets/img-title-1.png";
import imgslide from "../../../Assets/img-bg-slider.png";
import imgnews from "../../../Assets/img-bg-news.png";

const NewFeed = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 newfeed-container">
      <img src={imgTitle1} alt="Title" className="w-auto h-auto" />

      {/* Hiển thị imgslide và imgnews theo hàng ngang */}
      <div className="flex justify-center items-center space-x-4 w-full">
        <img src={imgslide} alt="Slider" className="w-auto h-auto object-cover" />
        <img src={imgnews} alt="News" className="w-auto h-auto object-cover" />
      </div>
    </div>
  );
};

export default NewFeed;
