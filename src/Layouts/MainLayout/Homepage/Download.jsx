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
        alt="imgbgdownload"
        className="w-auto h-auto object-cover"
      />

      {/* Container to divide the image into 3 parts */}
      <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-3 h-auto">
        {/* Part 1: Avatar */}
        <div className="flex justify-center items-center">
          <div className="w-auto h-auto transform translate-x-[45%] translate-y-[15%]">
            <img
              src={avatar}
              alt="avatar"
              className="w-auto h-auto rounded-full object-cover"
            />
          </div>
        </div>

        {/* Part 2: Buttons */}
        <div className="relative flex flex-col justify-center items-center space-y-1 left-[-40px] translate-y-[5px]">
          {/* Button 1: iOS */}
          <div className="relative flex flex-col justify-center items-center">
            <img
              src={imgbnt}
              alt="btn-ios"
              className="w-auto h-[70px] object-cover rounded-md"
            />
            <span className="absolute inset-0 flex justify-center items-center text-[#334c99] text-3xl">
              IOS
            </span>
          </div>

          {/* Button 2: Android */}
          <div className="relative flex flex-col justify-center items-center">
            <img
              src={imgbnt}
              alt="btn-android"
              className="w-auto  h-[70px] object-cover rounded-md"
            />
            <span className="absolute inset-0 flex justify-center items-center text-[#334c99] text-3xl">
              ANDROID
            </span>
          </div>

          {/* Button 3: Giả lập */}
          <div className="relative flex flex-col justify-center items-center">
            <img
              src={imgbnt}
              alt="btn-pc"
              className="w-auto h-[70px] object-cover rounded-md"
            />
            <span className="absolute inset-0 flex justify-center items-center text-[#334c99] text-3xl">
              GIẢ LẬP
            </span>
          </div>
        </div>

        {/* Part 3: Nạp thẻ and Giftcode */}
        <div className="relative flex justify-between items-center">
          {/* Nạp thẻ */}
          <div className="flex justify-center items-center">
            <img
              src={napthe}
              alt="napthe"
              className="w-auto h-auto object-cover"
            />
          </div>

          {/* Giftcode */}
          <div className="flex justify-center items-center">
            <img
              src={giftcode}
              alt="giftcode"
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
