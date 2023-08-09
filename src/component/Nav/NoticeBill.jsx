import React from "react";

const NoticeBill = () => {
  return (
    <div
      className="w-[360px] h-[300px] bg-white absolute top-[40px] right-0 shadow-xl rounded-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div>Đơn Hàng</div>
    </div>
  );
};

export default NoticeBill;
