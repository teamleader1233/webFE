import React from "react";
import banner1 from "../../../data/img/banner1.jpg";
const Banner = () => {
  return (
    <div className=" relative w-full h-screen bg-red-200 top-0">
      <div className=" absolute w-screen">
        <img
          src={banner1}
          alt="banner1"
          className="h-screen w-full  bg-cover bg-center  bg-no-repeat object-cover"
        />
        <div className="absolute left-[100px]  bottom-[180px] text-white">
          <p className="text-[36px] max-[1024px]:text-[20px]">
            Tận Hưởng Trải Nghiệm Mua Sắm An{" "}
          </p>
          <p className="text-[36px] max-[1024px]:text-[20px]">
            Toàn Của Bạn | 09855986883
          </p>
          <button className="bg-[#f94f2f] px-[20px] py-[10px] max-[1024px]:text-[16px] text-[24px] rounded-lg font-bold ease-linear transition-all duration-[0.1s] hover:translate-y-0.5 hover:shadow-lg">
            SHOP NOW
          </button>
        </div>
        <a href="#scrollContent">
          <div className="absolute bottom-[10px] opacity-50 left-1/2 bg-white rounded-full px-[10px] pt-[4px] shadow-md ease-linear transition-all duration-[0.2s] hover:bottom-0 hover:opacity-100 ">
            <i class="bi bi-chevron-down text-black text-[32px] "></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Banner;
