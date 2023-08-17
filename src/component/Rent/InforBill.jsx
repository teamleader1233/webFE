import React from "react";

const InforBill = ({ infor, closeNotice }) => {
  return (
    <div
      className="fixed w-full h-screen bg-[#aaaaaa8d] flex justify-center items-center top-0 z-[200]"
      onClick={(e) => {
        closeNotice();
        e.stopPropagation();
      }}
    >
      <div
        className="bg-white w-[420px] h-[360px] rounded-md  py-[20px] text-center flex flex-col justify-between relative px-[10px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <i
          className="bi bi-x-lg absolute top-2 right-4"
          onClick={(e) => {
            closeNotice();
            e.stopPropagation();
          }}
        ></i>
        <h1 className="font-semibold text-[20px]">Mã Đơn Hàng Của bạn</h1>
        <div className="text-[#ec904d] text-[30px]">{infor.id}</div>
        <div className="font-semibold">
          Loại Vận Chuyển:{" "}
          <span className="text-[#ec904d]">
            {infor.delivery_option === "nd" ? "Nội Địa" : "Việt Trung"}{" "}
          </span>
        </div>
        <p className="text-[16px]">
          <i className="bi bi-exclamation-triangle-fill text-[#ec904d] text-[20px] cursor-pointer"></i>{" "}
          Hãy Giữ Mã Đơn Hàng Này Để Tra Cứu Đơn Hàng Của Bạn.
        </p>
      </div>
    </div>
  );
};

export default InforBill;
