import React from "react";
import dacquyentuanthu from "../../../Assets/img-dacquyen-tanthu.png";
import dacquyennapthe from "../../../Assets/img-dacquyen-napthe.png";
import dacquyenvip from "../../../Assets/img-dacquyen-vip.png";
import dacquyenhuongdan from "../../../Assets/img-dacquyen-huongdan.png"; 
const InfoGuide = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-whidden w-[1411px] h-[119px]">
        <div className="relative w-[1414px] h-[110px">
          {/* CẨM NANG TÂN THỦ */}
          <div className="absolute w-[355px] left-[1050px] h-[110px] top-p">
            <div className="relative w-[353px] h-[119px] bg-cover bg-[50%_50%]">
              <img src={dacquyentuanthu} alt="dacquyentuanthu" />
              <p className="absolute top-[35px] left-[162px] font-normal text-transparent text-2xl text-center tracking-[0] leading-[Truepx]">
                <span className="text-[#5e70ae]">CẨM NANG <br /></span>
                <span className="text-[#3c4b8c]">TÂN THỦ</span>
              </p>
            </div>
          </div>
          {/* ĐĂC QUYỀN VIP */}
          <div className="absolute w-[355px] left-0 h-[110px] top-p">
            <div className="relative w-[353px] h-[119px] bg-cover bg-[50%_50%]">
              <img src={dacquyenvip} alt="dacquyenvip" />
              <p className="absolute top-[35px] left-[162px] font-normal text-transparent text-2xl text-center tracking-[0] leading-[Truepx]">
                <span className="text-[#5e70ae]">ĐẶC QUYỀN <br /></span>
                <span className="text-[#3c4b8c]">VIP</span>
              </p>
            </div>
          </div>
          {/* HƯỚNG DẪN */}
          <div className="absolute w-[355px] left-[705px] h-[110px] top-p">
            <div className="relative w-[353px] h-[119px] bg-cover bg-[50%_50%]">
              <img src={dacquyenhuongdan} alt="dacquyenhuongdan" />
              <p className="absolute top-[35px] left-[162px] font-normal text-transparent text-2xl text-center tracking-[0] leading-[Truepx]">
                <span className="text-[#5e70ae]">HƯỚNG DẪN <br /></span>
                <span className="text-[#3c4b8c]">GIFTCODE</span>
              </p>
            </div>
          </div>
          {/* NẠP THẺ */}
          <div className="absolute w-[355px] left-[353px] h-[110px] top-p">
            <div className="relative w-[353px] h-[119px] bg-cover bg-[50%_50%]">
              <img src={dacquyennapthe} alt="dacquyennapthe" />
              <p className="absolute top-[35px] left-[162px] font-normal text-transparent text-2xl text-center tracking-[0] leading-[Truepx]">
                <span className="text-[#d58238]">Hướng Dẫn <br /></span>
                <span className="text-[#f86f00]">Nạp Thẻ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGuide;
