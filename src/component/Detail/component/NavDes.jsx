import React, { useState } from "react";
import ProductInformation from "./Description/ProductInformation";
import Evaluate from "./Description/Evaluate";
import Guarantee from "./Description/Guarantee";

const NavDes = () => {
  const [mainDes, setMainDes] = useState("productInformation");
  const [isBackgroundClicked, setIsBackgroundClicked] = useState(false);

  const showDes = (currentDes) => {
    setMainDes(currentDes);
  };

  const handleClickBackground = () => {
    setIsBackgroundClicked(true);
  };

  const resetBackground = () => {
    setIsBackgroundClicked(false);
  };

  return (
    <div
      className={`flex justify-center mt-[40px] flex-col items-center ${
        isBackgroundClicked ? "bg-red" : ""
      }`}
      onClick={resetBackground}
    >
      <div className="">
        <span
          className={`px-[30px] py-[10px] bg-black text-white ${
            mainDes === "productInformation" ? "selected" : ""
          }`}
          onClick={() => showDes("productInformation")}
        >
          Thông Tin Sản Phẩm
        </span>
        <span
          className={`px-[30px] py-[10px] bg-black text-white ${
            mainDes === "evaluate" ? "selected" : ""
          }`}
          onClick={() => showDes("evaluate")}
        >
          Đánh Giá
        </span>
        <span
          className={`px-[30px] py-[10px] bg-black text-white ${
            mainDes === "guarantee" ? "selected" : ""
          }`}
          onClick={() => showDes("guarantee")}
        >
          Bảo Hành
        </span>
      </div>
      <div className="mt-[23px] w-full" onClick={handleClickBackground}>
        {mainDes === "productInformation" && <ProductInformation />}
        {mainDes === "evaluate" && <Evaluate />}
        {mainDes === "guarantee" && <Guarantee />}
      </div>
    </div>
  );
};

export default NavDes;
