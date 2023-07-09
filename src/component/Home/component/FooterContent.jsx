import React from "react";

const FooterContent = ({ img }) => {
  return (
    <div className="w-[320px] flex justify-center flex-col items-center mx-[40px] my-[20px]">
      <div className="text-orange-300 mt-[10px] flex">
        <i className="bi bi-star-fill m-[6px]"></i>
        <i className="bi bi-star-fill m-[6px]"></i>
        <i className="bi bi-star-fill m-[6px]"></i>
        <i className="bi bi-star-fill m-[6px]"></i>
        <i className="bi bi-star-fill m-[6px]"></i>
      </div>
      <div className="w-full">
        <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
          asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
        </span>
      </div>
      <img src={img} alt="img" className="h-[380px] object-cover rounded-md" />
    </div>
  );
};

export default FooterContent;
