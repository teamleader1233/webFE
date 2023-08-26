import React from "react";
import svnOrder from "../../data/img/SVNOrder.png";
import alibaba from "../../data/img/alibaba.png";
import tiktok from "../../data/img/tiktok.png";
import taobao from "../../data/img/taobao.png";
import JD from "../../data/img/JD.png";
import express from "../../data/img/express.png";

import Footer from "../Footer/Footer";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import LayOut from "../LayOut/LayOut";
const Order = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <LayOut />
      <div className="w-4/5">
        <ButtonSearch />
        <div className="flex space-x-3 place-content-center ">
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center font-medium text-[26px] my-[40px] tracking-wider  ">
              ORDER TMĐT NỘI ĐỊA TRUNG QUỐC
            </h1>{" "}
          </div>
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>
        </div>

        <div>
          <h1 className="text-[18px] font-semibold">Hướng Dẫn</h1>
          <p>
            中国 - 越南最大的出口和进口市场
            ❌目前，网上经营者在进口中国货物时遇到了一些困难和常见问题：
            🔺货物丢失，找不到原因 🔺海关堵塞，货物无法返回
            🔺货物被计算体积，换算，四舍五入 🔺咨询一边，处理货物另一边
            🔺货物政策不透明 🔺不接受运输某些笨重的货物
            💯💯💯了解这个问题，SVN物流以快速、创新、高效、诚信、始终把客户放在首位的工作风格，我们一直在研究和探讨以提供最佳方案和具体解决方案：
            📌中国 - 越南运输到仓库 📌货物快速稳定返回 📌超级快速运输
            📌协助与工厂谈判 📌严密控制和跟踪订单 📌始终有支持团队周到支持
            📌接受所有类型的货物 📌河内市内免费发货 SVN物流 -
            最佳中国越南运输服务💯💯💯
            请立即与我们联系以获得咨询并安排送货时间！ 🏢办公室: 59 Nguyễn Văn
            Giáp, Cầu Diễn, Nam Từ Liêm, Hà Nội 🏗️仓库：河内，胡志明市
            🌐Facebook: 中越海运 - SVN ☎️电话/ Zalo：0837.239.888 / 0985.986.883
          </p>
        </div>
        <div className="flex justify-center mt-[40px]">
          <img src={svnOrder} alt="svnOrder" />
        </div>
        <div className="sm:flex sm:justify-start my-[60px] w-full flex justify-center">
          <a
            href="https://www.facebook.com/SVN.LOGISTICS"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              const href = e.currentTarget.href;
              window.open(href, "_blank");
            }}
            className="w-full sm:w-full text-center lg:w-auto bg-[#ec904d] text-white px-[20px] py-[10px] sm:text-[18px] xl:text-[20px] cursor-pointer rounded-md hover:shadow-[0_0px_10px_1px_#E46000E8] transition-all duration-150 hover:translate-y-[-4px]"
          >
            Đặt Hàng
          </a>
        </div>
        <div className="flex justify-center my-[40px]">
          <img src={alibaba} alt="alibaba" />
        </div>
        <div className="flex justify-between flex-wrap ">
          <img
            src={tiktok}
            alt="alibaba"
            className="sm:w-full lg:w-1/2 xl:w-auto"
          />
          <img
            src={taobao}
            alt="taobao"
            className="sm:w-full lg:w-1/2 xl:w-auto"
          />
          <img src={JD} alt="JD" className="sm:w-full lg:w-1/2 xl:w-auto" />
          <img
            src={express}
            alt="ex"
            className="sm:w-full lg:w-1/2 xl:w-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
