import React from "react";
import borderDotArtHv from "../../../Assets/border-dot-art-hv.png";
import imgbgtuong from "../../../Assets/img-bg-tuong.png";
import imgBgDotSlider from "../../../Assets/img-bg-dot-slide.png";
import imgTitle2 from "../../../Assets/img-title-2.png";
import thienson from "../../../Assets/thienson.png";
import thienvuong from "../../../Assets/thienvuong.png";
import vodang from "../../../Assets/vodang.png";

const Monphai = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="relative w-[1522px] h-[1198px]">
        <div className="relative h-[1198px]">
          <img
            className="absolute w-[790px] h-[239px] top-1/4 left-1/2 transform -translate-x-1/2 object-cover"
            src={imgTitle2}
            alt="imgTitle2"
          />
        </div>
      </div>
    </div>
  );
};

export default Monphai;
