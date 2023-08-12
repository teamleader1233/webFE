import React from "react";

const Input = ({
  register,
  errors,
  placeholder,
  dataInput,
  isdisabled,
  value,
  ...prop
}) => {
  return (
    <div className="w-full">
      {isdisabled !== "true" ? (
        <input
          className="w-full p-[10px] outline-none bg-transparent"
          type="text"
          placeholder={placeholder}
          id={dataInput}
          {...register(`${dataInput}`)}
          {...prop}
        />
      ) : (
        <input
          className="w-full p-[10px] outline-none bg-[#dcdcdc6c]"
          type="text"
          placeholder={placeholder}
          id={dataInput}
          disabled
          {...register(`${dataInput}`)}
          {...prop}
        />
      )}
    </div>
  );
};

export default Input;
