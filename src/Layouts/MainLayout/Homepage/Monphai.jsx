import React, { useState } from "react";
import borderDotArtHv from "../../../Assets/border-dot-art-hv.png";
import imgbgtuong from "../../../Assets/img-bg-tuong.png";
import imgBgDotSlider from "../../../Assets/img-bg-dot-slide.png";
import imgTitle2 from "../../../Assets/img-title-2.png";
import thienson from "../../../Assets/thienson.png";
import thienvuong from "../../../Assets/thienvuong.png";
import vodang from "../../../Assets/vodang.png";

const Monphai = () => {
  const [selectedFaction, setSelectedFaction] = useState('thienson');

  const getFactionImage = () => {
    switch (selectedFaction) {
      case 'thienson':
        return thienson;
      case 'vodang':
        return vodang;
      case 'thienvuong':
        return thienvuong;
      default:
        return thienson;
    }
  };

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="relative w-[1522px] h-[1198px]">
        <div className="relative h-[1198px]">
          <img
            className="absolute w-[790px] h-[239px] top-1/4 left-1/2 transform -translate-x-1/2 object-cover"
            src={imgTitle2}
            alt="imgTitle2"
          />
          <div className="absolute w-[1522px] h-[880px]left-0 mt-[45%]">
            <img
              className="absolute w-[1520px] h-[879px] left-[3px] object-cover"
              src={imgbgtuong}
              alt="imgbgtuong"
            />
            <img
              className="absolute w-[241px] h-[740px] top-[78px] left-[1163px] object-cover"
              src={imgBgDotSlider}
              alt="imgBgDotSlider"
            />
            <img
              className="absolute w-[1060px] h-[690px] top-[70px] left-5 object-cover"
              src={getFactionImage()}
              alt="selected-faction"
            />
            
            {/* Thiên Sơn Button */}
            <div className="relative cursor-pointer" onClick={() => setSelectedFaction('thienson')}>
              <img
                className="absolute top-[78px] w-[180px] h-[53px] left-[1157px] object-cover"
                src={borderDotArtHv}
                alt="borderDotArtHv"
              />
              <div className="absolute top-[90px] left-[1157px] w-[180px] text-center text-white font-normal text-2xl">
                THIÊN SƠN
              </div>
            </div>

            {/* Võ Đang Button */}
            <div className="relative cursor-pointer" onClick={() => setSelectedFaction('vodang')}>
              <img
                className="absolute top-[142px] w-[180px] h-[53px] left-[1157px] object-cover"
                src={borderDotArtHv}
                alt="borderDotArtHv"
              />
              <div className="absolute top-[157px] left-[1157px] w-[180px] text-center text-white font-normal text-2xl">
                VÔ ĐẶNG
              </div>
            </div>

            {/* Thiên Vương Button */}
            <div className="relative cursor-pointer" onClick={() => setSelectedFaction('thienvuong')}>
              <img
                className="absolute top-[206px] w-[180px] h-[53px] left-[1157px] object-cover"
                src={borderDotArtHv}
                alt="borderDotArtHv"
              />
              <div className="absolute top-[221px] left-[1157px] w-[180px] text-center text-white font-normal text-2xl">
                THIÊN VƯƠNG
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monphai;