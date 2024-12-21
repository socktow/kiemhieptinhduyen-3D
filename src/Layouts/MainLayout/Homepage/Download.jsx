import React from "react";
import imgbgdownload from "../../../Assets/img-bg-download.png";
import avatar from "../../../Assets/img-avata-gosu.png";
import imgbnt from "../../../Assets/img-bnt.png";
import napthe from "../../../Assets/img-napthe.png";
import giftcode from "../../../Assets/img-giftcode.png";

const Download = () => {
  return (
    <div className="relative flex justify-center items-center download-container" id="download">
      <img
        src={imgbgdownload}
        alt="Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-4 px-8">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt="Gosu"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Download Buttons Section */}
          <div className="flex flex-col space-y-3">
            {/* IOS Button */}
            <div className="relative group">
              <img
                src={imgbnt}
                alt="Download for iOS"
                className="w-[280px] h-[52px] object-cover"
              />
              <div className="absolute inset-0 flex items-center px-4 space-x-2">
                <i className="fas fa-apple text-[#334c99] text-xl"></i>
                <span className="text-[#334c99] text-lg">Tải game trên App Store</span>
              </div>
            </div>

            {/* Android Button */}
            <div className="relative group">
              <img
                src={imgbnt}
                alt="Download for Android"
                className="w-[280px] h-[52px] object-cover"
              />
              <div className="absolute inset-0 flex items-center px-4 space-x-2">
                <i className="fab fa-google-play text-[#334c99] text-xl"></i>
                <span className="text-[#334c99] text-lg">Tải game trên Google Play</span>
              </div>
            </div>

            {/* PC Button */}
            <div className="relative group">
              <img
                src={imgbnt}
                alt="Download for PC"
                className="w-[280px] h-[52px] object-cover"
              />
              <div className="absolute inset-0 flex items-center px-4 space-x-2">
                <i className="fas fa-desktop text-[#334c99] text-xl"></i>
                <span className="text-[#334c99] text-lg">Tải game trên PC giả lập</span>
              </div>
            </div>
          </div>

          {/* Additional Buttons */}
          <div className="flex space-x-4 ml-8">
            {/* Nạp Thẻ Button */}
            <div className="relative group cursor-pointer">
              <img
                src={napthe}
                alt="Nạp Thẻ"
                className="w-24 h-24 object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <span className="text-[#334c99] font-medium">Nạp Thẻ</span>
              </div>
            </div>

            {/* Giftcode Button */}
            <div className="relative group cursor-pointer">
              <img
                src={giftcode}
                alt="Giftcode"
                className="w-24 h-24 object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <span className="text-[#334c99] font-medium">Giftcode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
