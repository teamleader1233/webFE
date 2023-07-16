import React from "react";

const Input = ({ register, errors, placeholder, dataInput, ...prop }) => {
  return (
    <div className="w-full">
      <input
        className="w-full p-[10px] outline-none bg-transparent"
        type="text"
        placeholder={placeholder}
        id={dataInput}
        {...register(`${dataInput}`)}
        {...prop}
      />
    </div>
  );
};

export default Input;
