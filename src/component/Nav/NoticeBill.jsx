import React, { useRef } from "react";

const NoticeBill = () => {
  const fixedIitem = useRef("fixed");
  const handleScroll = () => {
    const innerDiv = document.getElementById("innerDiv");
    const scrollY = innerDiv.getBoundingClientRect().top;
    const theadTable = document.getElementById("theadTable");
    console.log(scrollY);
    if (scrollY <= 124) {
      theadTable.classList.add(fixedIitem.current);
    } else if (scrollY >= 177) {
      theadTable.classList.remove(fixedIitem.current);
    }
  };
  return (
    <div
      className="w-[420px] h-[360px] bg-white absolute lg:top-[60px] lg:right-[20px] lg:left-[auto]  shadow-xl rounded-sm overflow-auto text-black py-[10px] left-0 top-0"
      onClick={(e) => e.stopPropagation()}
      onScroll={() => handleScroll()}
    >
      <div id="innerDiv" className=" mt-[10px] text-[#ff7134] ">
        Đơn Hàng{" "}
      </div>
      <div className="w-full mt-[10px] px-[10px]  ">
        <table className="w-full relative ">
          <thead
            id="theadTable"
            className="bg-[#ff7134] text-white w-[400px]   top-[164px]  "
          >
            <tr>
              <th className="font-normal w-1/4  text-[14px] px-[12px] ">
                Mã Đơn Hàng
              </th>
              <th className=" w-1/2 font-normal text-[14px] border-x-[1px]">
                Loại Vận Chuyển
              </th>
              <th className="px-[12px]  w-1/4 font-normal text-[14px]">
                Trạng Thái
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="font-normal w-1/4  text-[14px] px-[12px]">1234</th>
              <th className=" w-1/2 font-normal text-[14px] ">Việt - Trung</th>
              <th className="px-[12px]  w-1/4 font-normal text-[14px]">
                <span className="mr-[10px]">Mới</span>
                <span>
                  <i className="bi bi-check2 text-[#5ed141] text-[18px] cursor-pointer"></i>
                </span>
              </th>
            </tr>
            <tr>
              <th className="font-normal w-1/4  text-[14px] px-[12px]">1234</th>
              <th className=" w-1/2 font-normal text-[14px] ">Việt - Trung</th>
              <th className="px-[12px]  w-1/4 font-normal text-[14px]">
                <span className="mr-[10px]">Cũ</span>
                <span>
                  <i className="bi bi-x text-[18px] cursor-pointer text-[red]"></i>
                </span>
              </th>
            </tr>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <tr key={item}>
                <th className="font-normal w-1/4  text-[14px] px-[12px]">
                  1234
                </th>
                <th className=" w-1/2 font-normal text-[14px] ">
                  Việt - Trung
                </th>
                <th className="px-[12px]  w-1/4 font-normal text-[14px]">
                  <span className="mr-[10px]">Cũ</span>
                  <span>
                    <i className="bi bi-x text-[18px] cursor-pointer text-[red]"></i>
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeBill;
