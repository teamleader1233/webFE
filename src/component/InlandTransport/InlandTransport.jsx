import React, { useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import imgMap1 from "../../data/img/map.jpg";
import imgMap2 from "../../data/img/map2.jpg";
import { useNavigate } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
const InlandTransport = () => {
  const navigate = useNavigate();
  const show = useRef();
  useEffect(() => {
    show.current?.classList.remove(..."mt-[200px] opacity-0".split(" "));
  });
  return (
    <div
      id="top"
      className="overflow-x-hidden mt-[200px] transition-all duration-1000 ease-in-out opacity-0 "
      ref={show}
    >
      <LayOut />
      <div className="flex space-x-3 place-content-center mb-[40px]">
        <div className=" flex items-center">
          <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
        </div>

        <div>
          <h1 className="text-center font-semibold text-[26px] my-[40px] tracking-wider  ">
            Vận Tải Nội Địa 24h
          </h1>{" "}
        </div>
        <div className=" flex items-center">
          <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-4/5 flex justify-between sm:flex-col md:flex-row">
          <img
            src={imgMap1}
            alt="imgMap"
            className="bg-transparent  mr-[20px] sm:h-[200px] md:h-[300px] xl:h-[400px] 2xl:h-[500px] "
          />
          <img
            src={imgMap2}
            alt="imgMap"
            className="bg-transparent  mr-[20px] sm:mt-[20px] sm:h-[200px] md:h-[300px] xl:h-[400px] 2xl:h-[500px]"
          />
        </div>
      </div>
      <div className="w-full mt-[100px] border-y-[4px] border-solid flex justify-center py-[60px] ">
        <div className="w-4/5">
          <h1 className="font-bold text-[30px]"> Mô Tả </h1>
          <p>Dịch vụ tiện chuyến, vận chuyển hàng cồng kềnh trong ngày.</p>
          <div className="rounded-sm my-[40px] border-solid border-[2px] h-[200px] flex justify-center items-center font-semibold text-[24px] max-[1024px]:text-[16px] px-[10px] text-center">
            Hà Nội - Bắc Ninh - Hà Nam - Nam Định - Thái Bình - Hải Phòng
          </div>
          <div
            onClick={(e) => {
              navigate("/Rent");
              e.stopPropagation();
            }}
            className="max-[1024px]:w-full bg-black text-white text-center w-[200px] py-[10px] rounded-md text-[24px] hover:shadow-[0_0_5px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-150 hover:translate-y-[-6px]"
          >
            Tạo Đơn{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InlandTransport;
