import React, { useRef } from "react";
import NavHeader from "../Nav/NavHeader";
import IconContact from "../IconContact/IconContact";
import Footer from "../Footer/Footer";
const SreachCode = () => {
  return (
    <div className="flex flex-col justify-between md:h-screen">
      <div className="grow-[1] max-[1280px]:h-[120px]">
        <NavHeader />
        <IconContact />
      </div>
      <div className="w-screen  grow-[8] flex  justify-center items-center max-[1280px]:mb-[40px]">
        <div className="bg-[#ee751f] max-[640px]:w-[300px]  max-[1280px]:w-[400px] xl:w-[600px] rounded-2xl min-h-[300px] flex items-center justify-around flex-col py-[20px] my-[10px]">
          <div className="text-white">
            <span>SVN Logistic</span> <span>|</span>{" "}
            <span>Tra cứu đơn hàng </span>
          </div>
          <div className=" w-4/5  flex items-center justify-center overflow-hidden border-solid border-[1px] rounded-md my-[20px]">
            <label
              htmlFor="input"
              className="text-[#858585] bg-white  px-[18px] py-[8px] grow-[2] flex justify-center"
            >
              <i class="bi bi-search   "></i>
            </label>
            <input
              id="input"
              type="text"
              placeholder="Tra cứu đơn hàng thuộc về bạn"
              className="outline-none px-[10px] py-[8px] grow-[8]"
            />
          </div>
          <div className="w-full flex flex-col items-center overflow-hidden ">
            <div className="w-4/5 rounded-md overflow-hidden ">
              <div className="bg-black text-white text-center py-[10px]">
                <span>Liên hệ </span> <span>|</span> <span>CSKH</span>
              </div>
              <div className=" bg-white px-[10px] ">
                <div className="w-full py-[10px] flex items-center">
                  <label htmlFor="mailbox" className="px-[6px] ">
                    {" "}
                    <i class="bi bi-envelope"></i>
                  </label>
                  <input
                    type="text"
                    id="mailbox"
                    placeholder="Địa Chỉ Email"
                    className="grow-[9] p-[6px] outline-none"
                  />
                </div>
                <div className="w-full py-[10px] flex items-center">
                  <label htmlFor="call" className="px-[6px]">
                    {" "}
                    <i class="bi bi-telephone"></i>
                  </label>
                  <input
                    type="text"
                    id="call"
                    placeholder="Số Điện Thoại "
                    className="grow-[9] p-[6px] outline-none"
                  />
                </div>
                <div className="w-full py-[10px] flex items-center">
                  <label htmlFor="facebook" className="px-[6px]">
                    {" "}
                    <i class="bi bi-facebook"></i>
                  </label>
                  <input
                    type="text"
                    id="facebook"
                    placeholder="Link Facebook"
                    className="grow-[9] p-[6px] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[14px] text-white w-4/5 text-center py-[10px] mt-[10px]">
            Niềm Hạnh Phúc Của Khách Hàng Là Động Lực Của Chúng Tôi{" "}
          </div>
        </div>
      </div>
      <div className="grow-[1] border-t-[1px] border-solid border-[#686868cc]">
        <Footer />
      </div>
    </div>
  );
};

export default SreachCode;
