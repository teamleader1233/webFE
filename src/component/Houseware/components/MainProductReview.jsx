import React from "react";
import HeaderContent from "../../Home/component/HeaderContent";
import FooterContent from "../../Home/component/FooterContent";
import ProductHouseWare from "../../../data/img/productHouseware.jpg";
const MainProductReview = () => {
  return (
    <div className=" transition-all ease-in-out duration-[1000ms]">
      <HeaderContent title={"VIEW ALL PRODUCTS"} />
      <div className="mt-[40px] flex justify-center flex-col items-center">
        <h1 className="text-[28px]">ĐÁNH GIÁ CAO NHẤT</h1>
        <div className="text-orange-300 mt-[10px]">
          <i className="bi bi-star-fill m-[6px]"></i>
          <i className="bi bi-star-fill m-[6px]"></i>
          <i className="bi bi-star-fill m-[6px]"></i>
          <i className="bi bi-star-fill m-[6px]"></i>
          <i className="bi bi-star-fill m-[6px]"></i>
        </div>
        <h1 className="text-[28px] mt-[10px]">LƯỢT ĐÁNH GIÁ </h1>
      </div>
      <div className="px-[60px] flex justify-center flex-wrap">
        <FooterContent img={ProductHouseWare} />
        <FooterContent img={ProductHouseWare} />
        <FooterContent img={ProductHouseWare} />
        <FooterContent img={ProductHouseWare} />
      </div>
      <a href="#top">
        <HeaderContent title={"BACK TO TOP "} />
      </a>
    </div>
  );
};

export default MainProductReview;
