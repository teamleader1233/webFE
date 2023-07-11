import React from "react";

const HeaderContent = ({ title }) => {
  return (
    <div className="mt-[60px] flex justify-center pb-[40px]">
      <div className="px-[40px] py-[20px] bg-black rounded-md">
        <h1 className="font-medium text-[28px] text-white max-[2048px]:text-[20px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderContent;
