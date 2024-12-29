import React from "react";
import bgnavbar from "../../../Assets/bg-navbar.png";
import imgbtn from "../../../Assets/img-bnt-nav.png";
import iconandroid from "../../../Assets/icon-nav-android.png";
import iconios from "../../../Assets/icon-nav-ios.png";
import iconapk from "../../../Assets/icon-nav-apk.png";
import iconpc from "../../../Assets/icon-nav-pc.png";
import imgqr from "../../../Assets/img-rq.png";
import bntnavac from "../../../Assets/img-bnt-nav-ac.png";
import imgnapthe from "../../../Assets/img-napthe-nav.png";
import iconclosenavright from "../../../Assets/icon-close-nav-right.png";

const methods = [
  { name: "iOS", icon: iconios },
  { name: "Android", icon: iconandroid },
  { name: "App Store", icon: iconapk },
  { name: "Giả lập", icon: iconpc },
];

const Slidebar = () => {
  return (
    <div className="w-[234px] h-auto sticky top-0">
      <div className="relative w-[234px]">
        <div className="relative h-[889px]">
          {/* Background Image */}
          <div className="absolute w-[234px] h-[809px] top-0 left-0 bg-cover bg-[50%_50%]">
            <img src={bgnavbar} alt="Background Navbar" />
          </div>

          {/* Close Button */}
          <img
            className="absolute w-[42px] h-[45px] top-[359px] left-3 object-cover"
            src={iconclosenavright}
            alt="Close Button"
          />

          {/* Header Section */}
          <header className="absolute w-[133px] h-[177px] top-[129px] left-[62px] bg-transparent">
            <img
              className="absolute w-[129px] h-[130px] top-0 left-0.5 object-cover"
              src={imgnapthe}
              alt="Nap The"
            />
            <div className="absolute w-[135px] h-[47px] top-[130px] left-0">
              <div className="relative w-[133px] h-[47px] bg-cover bg-[50%_50%]">
                <img src={bntnavac} alt="Button Background" />
                <div className="absolute top-4 left-[21px] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  NHAP CODE
                </div>
              </div>
            </div>
          </header>

          {/* QR Code */}
          <img
            className="absolute w-[122px] h-[122px] top-[541px] left-[68px] object-cover"
            src={imgqr}
            alt="QR Code"
          />

          {/* Download Methods */}
          <div className="absolute w-[140px] top-[312px] left-[62px]">
            {methods.map((method, index) => (
              <div
                key={index}
                className="relative flex items-center w-[140px] h-[52px] bg-cover bg-center shadow-lg"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgbtn}
                  alt={`${method.name} Button Background`}
                />
                <img
                  className="relative w-[30px] h-[33px] ml-2 object-cover"
                  src={method.icon}
                  alt={`${method.name} Icon`}
                />
                <div className="relative ml-3 font-normal text-white text-[15px] tracking-[0] leading-[normal]">
                  {method.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;


