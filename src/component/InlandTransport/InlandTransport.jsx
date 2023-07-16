import React, { useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import imgMap from "../../data/img/map.jpg";
import { useNavigate } from "react-router-dom";
const InlandTransport = () => {
  const navigate = useNavigate()
  const show = useRef();
  useEffect(() => {
    show.current?.classList.remove(..."mt-[200px] opacity-0".split(" "));
  }, []);
  return (
    <div
      id="top"
      className="overflow-x-hidden mt-[200px] transition-all duration-1000 ease-in-out opacity-0"
      ref={show}
    >
      <div id="product" className="pt-[160px] pb-[60px] flex justify-center">
        <h1 className="max-[1024px]:text-[20px] text-[32px] bg-[#f94f2f] text-white p-[6px] px-[20px] rounded-md select-none ">
          Vận Tải Nội Địa 24h
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <img src={imgMap} alt="imgMap" className="bg-transparent h-[600px]" />
      </div>
      <div className="w-full mt-[100px] border-y-[4px] border-solid flex justify-center py-[60px] ">
        <div className="w-4/5">
          <h1 className="font-bold text-[30px]"> Mô Tả </h1>
          <p>Dịch vụ tiện chuyến, vận chuyển hàng cồng kềnh trong ngày.</p>
          <div className="rounded-sm my-[40px] border-solid border-[2px] h-[200px] flex justify-center items-center font-semibold text-[24px] max-[1024px]:text-[16px] px-[10px] text-center">
            Hà Nội - Bắc Ninh - Hà Nam - Nam Định - Thái Bình - Hải Phòng
          </div>
          <div onClick={()=>{}} className="max-[1024px]:w-full bg-black text-white text-center w-[200px] py-[10px] rounded-md text-[24px] hover:shadow-[0_0_5px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-150 hover:translate-y-[-6px]">
            Tạo Đơn{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InlandTransport;
