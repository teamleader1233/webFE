import React, { useRef } from "react";
import NavHeader from "../Nav/NavHeader";
import IconContact from "../IconContact/IconContact";
import Footer from "../Footer/Footer";
const SreachCode = () => {
  const hidden = useRef(true);

  return (
    <div className="flex flex-col justify-around w-screen h-screen">
      <div className="grow-[1]">
        <NavHeader hidden={hidden.current} />
        <IconContact />
      </div>
      <div className="w-full z-[10] grow-[8] flex  justify-center items-center flex-col">
        <div>
          <span>SVN Logistic</span> <span>|</span>{" "}
          <span>Tra cứu đơn hàng </span>
        </div>
        <div className=" w-auto  flex items-center overflow-hidden border-[1px] border-solid rounded-sm">
          <label
            htmlFor="input"
            className="text-[]] bg-[#858585] px-[18px] py-[8px] "
          >
            <i class="bi bi-search   "></i>
          </label>
          <input
            id="input"
            type="text"
            className="outline-none px-[10px] py-[8px] "
          />
        </div>
        <div>
          <div className="bg-black text-white">
            <span>Liên hệ </span> <span>|</span> <span>CSKH</span>
          </div>
          <div>
            <div>
              <label htmlFor="mailbox">
                {" "}
                <i class="bi bi-envelope"></i>
              </label>
              <input type="text" id="mailbox" placeholder="Địa Chỉ Email" />
            </div>
            <div>
              <label htmlFor="mailbox">
                {" "}
                <i class="bi bi-telephone"></i>
              </label>
              <input type="text" id="mailbox" placeholder="Địa Chỉ Email" />
            </div>
            <div>
              <label htmlFor="mailbox">
                {" "}
                <i class="bi bi-facebook"></i>
              </label>
              <input type="text" id="facebook" placeholder="Địa Chỉ Email" />
            </div>
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
