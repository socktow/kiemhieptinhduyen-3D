import React from "react";
import background from "../../../Assets/img-bg.jpg";
import imgslogan from "../../../Assets/img-slogan.png";

const Hero = ({ children }) => {
  return (
    <div
      className="relative w-full bg-no-repeat "
      style={{ backgroundImage: `url(${background})`, height: "5002px" }}
    >
      <img
        src={imgslogan}
        alt="slogan"
        className="absolute bottom-2/3 right-1/4 transform -translate-x-1/3 -translate-y-1/2 w-4/5 md:w-1/2"
      />
      <div className="absolute top-[calc(22%-100px)] left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Hero;
