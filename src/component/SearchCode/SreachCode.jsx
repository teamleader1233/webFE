import React, { useState } from "react";
import NavHeader from "../Nav/NavHeader";
import IconContact from "../IconContact/IconContact";
import Footer from "../Footer/Footer";
import imgSearchCode from "../../data/img/imgFooter.png";
import InfoBill from "./InfoBill";

const SreachCode = () => {
  const [infor, setInfor] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setInfor(true);
    }
  };
  const handleCloseInfor = () => {
    setInfor(false);
    setInputSearch("");
  };
  return (
    <div className="">
      {infor ? (
        <InfoBill
          inputSearch={inputSearch}
          handleCloseInfor={handleCloseInfor}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col justify-between md:h-screen relative   z-[9]  ">
        <div className="w-full  flex  justify-center">
          <img
            src={imgSearchCode}
            alt="img avar"
            className=" w-screen object-cover h-screen "
          />
          <div className="mt-[120px] absolute bg-[#ffffffae] max-[640px]:w-[300px]  max-[1280px]:w-[400px] xl:w-[600px] rounded-2xl min-h-[300px] flex items-center justify-around flex-col py-[20px] my-[10px] z-[10]">
            <div className="text-black font-semibold text-[20px] px-[20px]">
              <span>SVN Logistic</span> <span>|</span>{" "}
              <span>Tra cứu đơn hàng </span>
            </div>
            <div className=" w-4/5  flex items-center justify-center overflow-hidden border-solid border-[1px] rounded-md my-[20px]">
              <label className="text-[#858585] bg-white  px-[18px] py-[8px] grow-[2] flex justify-center cursor-pointer ">
                <div className="pl-[20px] sm:pl-[0]">
                  <i
                    className="bi bi-search  cursor-pointer "
                    onClick={(e) => {
                      setInfor(true);
                      e.stopPropagation();
                    }}
                  ></i>
                </div>
              </label>
              <input
                id="input"
                type="text"
                placeholder="Tra cứu đơn hàng thuộc về bạn"
                className="outline-none px-[10px] py-[8px] grow-[8]"
                onKeyDown={(e) => handleKeyDown(e)}
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value.trim())}
              />
            </div>
            <div className="w-full flex flex-col items-center overflow-hidden ">
              <div className="w-4/5 rounded-md overflow-hidden ">
                <div className="bg-black text-white text-center py-[10px]">
                  <span>Liên hệ </span> <span>|</span> <span>CSKH</span>
                </div>
                <div className=" bg-white px-[10px] ">
                  <div className="w-full py-[10px] flex items-center">
                    <label
                      htmlFor="mailbox"
                      className="px-[6px] "
                      onClick={() => setInfor(true)}
                    >
                      {" "}
                      <i className="bi bi-envelope"></i>
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
                      <i className="bi bi-telephone"></i>
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
                      <i className="bi bi-facebook"></i>
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
            <div className="text-[14px] text-black  w-4/5 text-center py-[10px] mt-[10px]">
              Niềm Hạnh Phúc Của Khách Hàng Là Động Lực Của Chúng Tôi{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SreachCode;
