import React, { useEffect, useRef } from "react";
import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";
const MainProductReview = () => {
  const scrollY = useRef();
  useEffect(() => {
    function scroll() {
      let scrollDown = window.scrollY;
      if (scrollDown >= 2000) {
        const removeClass = "opacity-0 pointer-events-none mt-[800px]";

        scrollY.current?.classList.remove(...removeClass.split(" "));
      }
    }
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <div
      className="opacity-0 pointer-events-none mt-[800px] transition-all ease-in-out duration-[1000ms]"
      ref={scrollY}
    >
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
        <FooterContent />
        <FooterContent />
        <FooterContent />
        <FooterContent />
      </div>
      <a href="#home">
        <HeaderContent title={"BACK TO TOP "} />
      </a>
    </div>
  );
};

export default MainProductReview;
