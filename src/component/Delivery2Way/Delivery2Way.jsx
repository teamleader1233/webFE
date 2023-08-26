import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import Footer from "../Footer/Footer";
import deli2way from "../../data/img/picdeli2way.png";
import LayOut from "../LayOut/LayOut";
const Delivery2Way = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <LayOut />
      <div className="w-4/5">
        <ButtonSearch />
        <div className="flex space-x-3 place-content-center mt-[40px]">
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center font-medium text-[26px] my-[40px] tracking-wider  ">
              VẬN CHUYỂN HÀNG HÓA 2 CHIỀU VIỆT - TRUNG
            </h1>{" "}
          </div>
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>
        </div>

        <div>
          <div>
            <span className="font-semibold">Mô Tả:</span> Sản phẩm tuyệt cà là
            vời
          </div>
          <div>
            <span className="font-semibold">Liên Hệ:</span> MR.Dong
          </div>
        </div>
        <div className="mt-[60px]">
          <img src={deli2way} alt="deli2way" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery2Way;
