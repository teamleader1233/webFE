import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResetToken } from "../../api/ResetToken";

const InfoBill = ({ inputSearch }) => {
  ResetToken();

  const [notice, setNotice] = useState("Loading...");
  const getData = async () => {
    try {
      const responsive = await axios.get(
        `http://127.0.0.1:8000/bills/${inputSearch}`
      );
      console.log(responsive.data);
    } catch (e) {
      setNotice("Không Tồn Tại Đơn Hàng !");
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <div className="fixed h-screen w-screen bg-[#abababc4] z-[200] flex justify-center items-center ">
      <div className="w-[480px] h-[320px] bg-[white] mt-[-184px] rounded-md">
        <div className="text-center">Đơn của bạn</div>
        <div>{notice}</div>
      </div>
    </div>
  );
};

export default InfoBill;
