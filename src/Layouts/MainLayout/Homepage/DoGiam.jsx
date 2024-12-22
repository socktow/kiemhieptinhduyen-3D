import React from "react";
import immtittle3 from "../../../Assets/img-title-3.png";
import imgarrow from "../../../Assets/img-arrow.png";
import slideaftermb from "../../../Assets/slider-after-mb.png";

const DoGiam = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="relative w-[1004px] h-[670px]">
        <div className="relative h-[670px] top-1/4">
          <img
            className="absolute w-[790px] h-[239px] top-[-50px] left-1/2 transform -translate-x-1/2 object-cover"
            src={immtittle3}
            alt="tieudiemdacsac"
          />
          <img
            className="absolute ư-[889px] h-[613px] top-[50px] left-[62px] object cover"
            src={slideaftermb}
            alt="slideaftermb"
          />
          {/* Arrow 2 */}
          <img
            className="absolute left-[790px] w-[190px] h-[172px] top-[389px] object-cover"
            src={imgarrow}
            alt=""
          />
          {/* Arrow 1 */}
          <img
            className="absolute left-0 w-[190px] h-[172px] top-[389px] object-cover rotate-180"
            src={imgarrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DoGiam;
