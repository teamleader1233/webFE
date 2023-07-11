import React from "react";

const NavCount = ({title}) => {
  return (
    <a href="#">
      <div className="px-[20px] ml-[50px] border-solid border-black border-[2px] ">
        <div className="text-[30px]">
          {title}
        </div>
      </div>
    </a>
  );
};

export default NavCount;