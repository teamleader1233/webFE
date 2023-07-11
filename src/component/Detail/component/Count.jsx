import React from "react";
import NavCount from "./NavCount";

const Count = () => {
  return (
    <div className=" w-[100px] flex flex-row justify-between">
        <NavCount title={'-'}/>
        <span className="ml-[50px] text-[20px]">1</span>
        <NavCount title={'+'}/>
    </div>
  );
};

export default Count;
