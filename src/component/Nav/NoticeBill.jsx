import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const NoticeBill = () => {
  const billCurrent = useRef(0);
  const totalNewBill = useRef(0);
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const token = cookies.get("access");
    try {
      const response = await axios.get("http://127.0.0.1:8000/bills", {
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'application/json', // Đặt kiểu dữ liệu gửi đi (nếu cần)
        },
      });
      console.log(response.data);
      setData(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div
      className="w-[600px] h-[360px] bg-white absolute lg:top-[60px] lg:right-[20px] lg:left-[auto]  shadow-xl rounded-sm overflow-auto text-black py-[10px] left-0 top-0"
      onClick={(e) => e.stopPropagation()}
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
              <th className="font-normal w-[10%]  text-[14px] px-[12px] ">
                STT
              </th>
              <th className="font-normal  w-[20%]  text-[14px] px-[12px] border-x-[1px]">
                Mã Đơn Hàng
              </th>
              <th className=" w-1/2 font-normal text-[14px] border-x-[1px]">
                Loại Vận Chuyển
              </th>
              <th className="px-[12px]   w-[20%] font-normal text-[14px]">
                Trạng Thái
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-[#fdece5]" : ""
                  } select-text`}
                >
                  <th className="font-normal w-[10%]  text-[14px] px-[12px] ">
                    {index + 1}
                  </th>
                  <th className="font-normalw-[20%] text-left  text-[14px] px-[12px]">
                    {item.id}
                  </th>
                  <th className=" w-1/2 font-normal text-[14px] ">
                    Việt - Trung /{" "}
                    {dayjs(item.date).format("HH:mm:ss - DD/MM/YYYY")}
                  </th>
                  <th className="px-[12px]  w-[20%] font-normal text-[14px] flex">
                    <span className="mr-[10px]">{item.status}</span>
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
