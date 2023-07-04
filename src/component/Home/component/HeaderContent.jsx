import React from "react";

const HeaderContent = ({ title }) => {
  return (
    <div className="mt-[60px] flex justify-center pb-[40px] border-b-[4px] border-solid border-[#CCCC]">
      <div className="px-[40px] py-[20px] bg-black rounded-md">
        <h1 className="font-medium text-[28px] text-white">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderContent;
