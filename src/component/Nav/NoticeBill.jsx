import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import emptyBill from "../../data/img/emptybill.jpg";
const cookies = new Cookies();
const NoticeBill = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getApiData = async () => {
    const token = cookies.get("access");
    try {
      const response = await axios.get("http://127.0.0.1:8000/bills", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.results);
    } catch (e) {
      toast.error("Error!");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      getApiData();
    }
  }, []);
  const deleteBill = async (id) => {
    const token = cookies.get("access");

    try {
      await axios.delete(`http://127.0.0.1:8000/bills/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getApiData();
    } catch (e) {
      toast.error("Error deleting");
    }
  };
  const InforStatus = (status) => {
    if (status === "pending") {
      return <span className="text-[#50d53c] font-medium"> Chờ Xác Nhận</span>;
    } else if (status === "paid") {
      return <span className="text-[#4bff4b] font-medium"> Đã Thanh Toán</span>;
    } else if (status === "delivered") {
      return <span className="text-[#ff994a] font-medium">Đang giao hàng</span>;
    } else if (status === "canceled") {
      return <span className="text-[#ff4b4b] font-medium"> Đã hủy</span>;
    }
  };
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
              <th className="  w-[30%] font-normal text-[14px] border-x-[1px]">
                Loại Vận Chuyển
              </th>
              <th className="px-[12px]   w-[40%] font-normal text-[14px]">
                Trạng Thái
              </th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {data.length !== 0 ? (
              data.map((item, index) => (
                <tr
                  onClick={() => navigate("/BillDetail", { state: item })}
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
                  <th className=" w-[30%] font-normal text-[14px] ">
                    <span className="text-[#d16243] font-semibold text-[16px]">
                      {item.delivery_option === "nd"
                        ? "Nội Địa"
                        : "Việt - Trung"}{" "}
                    </span>
                    <div>
                      {dayjs(item.date).format("HH:mm:ss - DD/MM/YYYY")}
                    </div>
                  </th>
                  <th className="px-[12px]  w-[40%] font-normal text-[14px] ">
                    <div className="flex justify-around">
                      <div>{InforStatus(item.status)}</div>
                      <i
                        className="bi bi-x text-[18px] cursor-pointer text-[red]"
                        onClick={(e) => {
                          deleteBill(item.id);
                          e.stopPropagation();
                        }}
                      ></i>
                    </div>
                  </th>
                </tr>
              ))
            ) : (
              <div className="absolute flex justify-center w-full flex-col items-center">
                <div className="w-[280px] ">
                  <img src={emptyBill} alt="img empty" />
                </div>
                <span className="font-medium">Không Có Đơn Hàng Nào ! </span>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeBill;
