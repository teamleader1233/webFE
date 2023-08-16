import React from "react";
import { useNavigate } from "react-router-dom";
const ButtonSearch = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        navigate("/Rent");
        window.scrollTo({ top: 0 });
      }}
      className="text-white bg-[#ec904d] py-[10px] px-[20px] fixed z-10 text-[18px] rounded-2xl right-[10px] cursor-pointer shadow-lg bottom-[60px]"
    >
      Tạo Đơn
    </div>
  );
};

export default ButtonSearch;
