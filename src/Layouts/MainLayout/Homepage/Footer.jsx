import React from "react";
import imgavatar from "../../../Assets/img-avata-gosu.png";
import imgsearch from "../../../Assets/img-search.png";
import imgbton from "../../../Assets/img-bnt.png";

const Footer = () => {
  return (
    <div className="w-full mt-[calc(35%)]">
      <footer className="relative w-[654px] h-[200px] mx-auto">
        <div className="relative w-[650px] h-[200px]">
          <img
            className="absolute w-[364px] h-[200px]"
            src={imgavatar}
            alt="imgavatar"
          />
          <img
            className="absolute w-[393px] h-[81px] top-[91px] left-[257px] object-cover"
            src={imgsearch}
            alt="imgsearch"
          />
          {/* Discord Button */}
          <div className="absolute top-8 left-[250px] flex flex-col items-center justify-center">
            <img
              className="w-[181px] h-[73px] object-cover"
              src={imgbton}
              alt="imgbton"
            />
            <p className="absolute text-black font-semibold text-lg">Discord</p>
          </div>
          {/* Fanpage Button */}
          <div className="absolute top-8 left-[469px] flex flex-col items-center justify-center">
            <img
              className="w-[181px] h-[73px] object-cover"
              src={imgbton}
              alt="imgbton"
            />
            <p className="absolute text-black font-semibold text-lg">Fanpage</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;