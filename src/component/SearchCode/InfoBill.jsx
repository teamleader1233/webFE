import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const InfoBill = ({ inputSearch, handleCloseInfor }) => {
  const navigate = useNavigate();
  const [notice, setNotice] = useState("Loading...");
  const [data, setData] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const getData = async () => {
    try {
      const responsive = await axios.get(
        `http://127.0.0.1:8000/bills/${inputSearch}`
      );
      console.log(responsive.data);
      setData(responsive.data);
    } catch (e) {
      setNotice("Không Tồn Tại Đơn Hàng !");
    }
  };
  const deleteBill = async (id) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/bills/${id}`);
      console.log(res);
    } catch (e) {
      toast.error("Error deleting");
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
    }
  }, []);
  return (
    <div
      className="fixed h-screen w-screen bg-[#abababc4] z-[200] flex justify-center items-center px-[20px] "
      onClick={() => {
        handleCloseInfor();
      }}
    >
      <div
        className="w-[480px] min-h-[260px] bg-[white] mt-[-184px] rounded-md relative pb-[20px]"
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
            <div className="mt-[10px]  ">
              Mã Sản Phẩm : <span className="text-[#ec904d]">{data.id}</span>{" "}
            </div>
            <div className="mt-[10px]">
              Trạng Thái : <span>{data.status}</span>
            </div>
            <div className="mt-[10px]"> Địa Điểm : Hà Nội </div>
            <div className="mt-[10px]">
              {" "}
              Thời Gian Cập Nhật Đơn Hàng Của Của Bạn Gần Nhất:{" "}
              <span className="text-[#ec904d]">
                {dayjs(data.date).format("HH:mm:ss - DD/MM/YYYY")}
              </span>
            </div>
            <div className="mt-[10px]">Số Lượng Sản Phẩm : {data.quantity}</div>
            <div className="mt-[10px]">Giá : {data.total} VND</div>
            {isAdmin ? (
              <div className="flex justify-between ">
                <div
                  onClick={() => navigate("/EditBill", { state: data })}
                  className="bg-[#e6712c] text-[white] my-[20px] py-[10px] px-[10px] rounded-md inline-block cursor-pointer hover:opacity-80"
                >
                  Chỉnh Sửa Đơn Hàng{" "}
                </div>
                <div
                  onClick={() => deleteBill(data.id)}
                  className="bg-[#6a6a6a] text-[white] my-[20px] py-[10px] px-[10px] rounded-md inline-block cursor-pointer hover:opacity-80"
                >
                  Xóa Đơn Hàng
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="text-center mt-[20px] text-[18px]">{notice}</div>
        )}
      </div>
    </div>
  );
};

export default InfoBill;
