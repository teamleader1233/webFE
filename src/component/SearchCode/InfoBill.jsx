import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { ResetToken } from "../../api/ResetToken";
import { useNavigate } from "react-router-dom";
const InfoBill = ({ inputSearch, handleCloseInfor }) => {
  ResetToken();
  const navigate = useNavigate();
  const [notice, setNotice] = useState("Loading...");
  const [data, setData] = useState("13123");
  const [isAdmin, setIsAdmin] = useState(false);
  const getData = async () => {
    try {
      const responsive = await axios.get(
        `http://127.0.0.1:8000/bills/${inputSearch}`
      );
      setData(responsive.data);
    } catch (e) {
      setNotice("Không Tồn Tại Đơn Hàng !");
    }
  };
  useEffect(() => {
    getData();
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
    }
  });
  return (
    <div
      className="fixed h-screen w-screen bg-[#abababc4] z-[200] flex justify-center items-center px-[20px] "
      onClick={() => {
        handleCloseInfor();
      }}
    >
      <div
        className="w-[480px] h-auto bg-[white] mt-[-184px] rounded-md relative pb-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <div
          className="absolute right-[10px] top-[4px] text-[20px] cursor-pointer"
          onClick={(e) => {
            handleCloseInfor();
            e.stopPropagation();
          }}
        >
          <i className="bi bi-x"></i>
        </div>
        <div className="flex space-x-3 place-content-center mt-[20px]">
          <div className=" flex items-center">
            <div className="w-[60px] h-[2px] bg-[#d11908] rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center font-medium text-[22px]  tracking-wider  text-[#d11908]">
              Đơn của bạn
            </h1>
          </div>
          <div className=" flex items-center">
            <div className="w-[60px] h-[2px] bg-[#d11908] rounded-md"></div>
          </div>
        </div>
        {data ? (
          <div className="mt-[20px] px-[20px] text-[#6c6c6c]">
            <div className="mt-[10px] ">Mã Sản Phẩm : 123213</div>
            <div className="mt-[10px]">
              Trạng Thái : <span>123213</span>
            </div>
            <div className="mt-[10px]"> Địa Điểm : Hà Nội </div>
            <div className="mt-[10px]">
              {" "}
              Thời Gian Cập Nhật Đơn Hàng Của Của Bạn Gần Nhất: 12/2/2023{" "}
            </div>
            <div className="mt-[10px]">Số Lượng Sản Phẩm :12</div>
            <div className="mt-[10px]">Giá : 120000 VND </div>
            {isAdmin ? (
              <div className="flex justify-center ">
                <div
                  onClick={() => navigate("/EditBill", { data: data })}
                  className="bg-[#e6712c] text-[white] my-[20px] py-[10px] px-[10px] rounded-md inline-block cursor-pointer hover:opacity-80"
                >
                  Chỉnh Sửa Đơn Hàng{" "}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div>{notice}</div>
        )}
      </div>
    </div>
  );
};

export default InfoBill;
