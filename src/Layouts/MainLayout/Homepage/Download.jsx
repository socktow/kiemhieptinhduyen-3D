import React from "react";
import avatar from "../../../Assets/img-avata-gosu.png";
import downloadBackground from "../../../Assets/img-bg-download.png";
import iconNavAndroid1 from "../../../Assets/icon-android.png";
import iconNavIos1 from "../../../Assets/icon-ios.png";
import iconNavPc1 from "../../../Assets/icon-pc.png";
import imgGiftcode1 from "../../../Assets/img-giftcode.png";
import imgNapthe1 from "../../../Assets/img-napthe.png";
import imgbnt1 from "../../../Assets/img-bnt.png";

const download = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-[1012px] h-[308px]">
        <div className="h-[308px]">
          <div className="relative w-[1012px] h-[308px]">
            <img
              className="absolute w-[958px] h-[293px] top-0 left-[54px] object-cover"
              alt="Download background"
              src={downloadBackground}
            />

            <img
              className="absolute w-[464px] h-[266px] top-[42px] left-0 object-cover"
              alt="Avatar"
              src={avatar}
            />

            <div className="absolute w-[231px] h-[243px] top-8 left-[376px]">
              <div className="h-[243px]">
                <div className="relative w-[233px] h-[243px]">
                  <div className="absolute w-[233px] h-[93px] top-[150px] left-0">
                    <div
                      className="relative w-[231px] h-[93px]"
                      style={{
                        backgroundImage: `url(${imgbnt1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    >
                      <div className="absolute top-8 left-[90px] font-normal text-[#5e70ae] text-2xl tracking-[0] leading-[Truepx]">
                        GIẢ LẬP
                      </div>

                      <img
                        className="absolute w-[38px] h-[41px] top-[30px] left-[34px] object-cover"
                        alt="Icon nav pc"
                        src={iconNavPc1}
                      />
                    </div>
                  </div>

                  <div className="absolute w-[233px] h-[93px] top-[75px] left-0">
                    <div
                      className="relative w-[231px] h-[93px]"
                      style={{
                        backgroundImage: `url(${imgbnt1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    >
                      <div className="absolute top-8 left-[95px] font-normal text-[#5e70ae] text-2xl tracking-[0] leading-[Truepx]">
                        IOS
                      </div>

                      <img
                        className="absolute w-[38px] h-[41px] top-[30px] left-[34px] object-cover"
                        alt="Icon nav ios"
                        src={iconNavIos1}
                      />
                    </div>
                  </div>

                  <div className="absolute w-[233px] h-[93px] top-0 left-0">
                    <div
                      className="relative w-[231px] h-[93px]"
                      style={{
                        backgroundImage: `url(${imgbnt1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    >
                      <div className="absolute top-8 left-[90px] ont-normal text-[#5e70ae] text-2xl tracking-[0] leading-[Truepx]">
                        ANDROID
                      </div>

                      <img
                        className="absolute w-[38px] h-[41px] top-[30px] left-[34px] object-cover"
                        alt="Icon nav android"
                        src={iconNavAndroid1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[336px] h-[146px] top-20 left-[616px]">
              <div className="relative w-[332px] h-[146px]">
                <img
                  className="absolute w-[171px] h-[146px] top-0 left-0 object-cover"
                  alt="Img giftcode"
                  src={imgGiftcode1}
                />

                <img
                  className="absolute w-[171px] h-[146px] top-0 left-[161px] object-cover"
                  alt="Img napthe"
                  src={imgNapthe1}
                />

                <div className="absolute w-[97px] top-[13px] left-[203px] font-normal text-[#ff7e00] text-xl text-center tracking-[0] leading-[Truepx]">
                  Nạp Thẻ
                </div>

                <div className="absolute top-4 left-[58px] font-normal text-[#334c99] text-xl text-center tracking-[0] leading-[Truepx] whitespace-nowrap">
                  GIFCODE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default download;
