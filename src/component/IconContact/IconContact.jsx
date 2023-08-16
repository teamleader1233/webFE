import React from "react";
import imgZalo from "../../data/img/favicon.png";
const IconContact = () => {
  return (
    <div className="relative  w-full h-full ">
      <a href="https://zalo.me/0985986883">
        <img
          className="rounded-[40%] bg-transparent transition-all ease-in-out duration-200 cursor-pointer hover:shadow-[0px_2px_4px_rgba(0,0,0,0.5)] fixed z-50 left-[40px] bottom-[40px] h-[60px] max-[2080px]:h-[50px]"
          src={imgZalo}
          alt="img zalo"
        />
      </a>
    </div>
  );
};

export default IconContact;
