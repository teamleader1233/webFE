import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import emptyBill from "../../data/img/emptybill.jpg";
const cookies = new Cookies();

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

      setData(responsive.data);
    } catch (e) {
      setNotice("Không Tồn Tại Đơn Hàng !");
    }
  };
  const deleteBill = async (id) => {
    const token = cookies.get("access");

    try {
      await axios.delete(`http://127.0.0.1:8000/bills/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Xóa Đơn Hàng Thành Công !");
      handleCloseInfor();
    } catch (e) {
      toast.error("Error deleting");
    }
  };
  useEffect(() => {
    getData();
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
    }
  }, []);
  const InforStatus = (status) => {
    if (status === "pending") {
      return (
        <span className="text-[#50d53c] font-semibold"> Chờ Xác Nhận</span>
      );
    } else if (status === "paid") {
      return (
        <span className="text-[#4bff4b] font-semibold">
          Đã Thanh Toán <i class="bi bi-check-lg font-semibold"></i>
        </span>
      );
    } else if (status === "delivered") {
      return (
        <span className="text-[#ff994a] font-semibold">Đang giao hàng</span>
      );
    } else if (status === "canceled") {
      return <span className="text-[#ff4b4b] font-semibold"> Đã hủy</span>;
    }
  };
  return (
    <div
      className="fixed h-screen w-screen bg-[#828181bd] z-[200] flex justify-center items-center px-[20px] top-0 "
      onClick={(e) => {
        handleCloseInfor();
        e.stopPropagation();
      }}
    >
      <div
        className="w-[480px] min-h-[260px] bg-[white]  rounded-md relative pb-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
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
              Mã Sản Phẩm : <span className="text-[#ec904d]">{data.id}</span>
            </div>
            <div className="mt-[10px]  ">
              Loại Vận Chuyển:
              <span className="text-[#ec904d]">
                {data.delivery_option === "nd" ? "Nội Địa" : "Việt Trung"}
              </span>
            </div>
            <div className="mt-[10px]">
              Trạng Thái : {InforStatus(data.status)}
            </div>
            <div className="mt-[10px]">
              Địa Điểm :{" "}
              <span className="font-medium italic">
                {data.current_location || "Đang Cập Nhật"}
              </span>
            </div>
            <div className="mt-[10px]">
              Thời Gian Cập Nhật Đơn Hàng Của Của Bạn Gần Nhất:{" "}
              <span className="text-[#ec904d]">
                {dayjs(data.date).format("HH:mm:ss - DD/MM/YYYY")}
              </span>
            </div>
            <div className="mt-[10px]">Số Lượng Sản Phẩm : {data.quantity}</div>
            <div className="mt-[10px] font-semibold">
              Giá :
              <span className="font-medium italic">
                {data.total_price !== 0
                  ? " " +
                    data.total_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
                    " VND"
                  : " Đang Cập Nhật"}
              </span>
            </div>
            {isAdmin ? (
              <div className="flex justify-between ">
                <div
                  onClick={() => navigate("/EditBill", { state: data })}
                  className="bg-[#e6712c] text-[white] my-[20px] py-[10px] px-[10px] rounded-md inline-block cursor-pointer hover:opacity-80"
                >
                  Chỉnh Sửa Đơn Hàng
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
          <div className="text-center mt-[20px] text-[18px] flex flex-col items-center">
            <img src={emptyBill} alt="empty" className="object-cover" />
            <div className="font-semibold">{notice}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBill;
