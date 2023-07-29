import React from "react";
import vcqt from "../../data/img/vcqt.png";
import Footer from "../Footer/Footer";
import imgMain from "../../data/img/imgMain.png";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
const Logistic = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <ButtonSearch />
      <div className="w-4/5 my-[20px]">
        <h1 className="text-center font-medium text-[24px] my-[40px] tracking-wider    ">
          Logistic Quốc Tế{" "}
        </h1>
        <div className="my-[40px]">
          <p>
            Đội ngũ chuyên nghiệp của SVN cung cấp các dịch vụ hậu cần LOGISTICS
            QUỐC TẾ mang đến sự hài lòng và tin tưởng cho khách hàng. Với mạng
            lưới vận chuyển trên các quốc gia và vùng lãnh thổ, đội ngũ nhân
            viên làm việc tại các cửa khẩu quốc tế, SVN đáp ứng các nhu cầu gửi
            hàng quốc tế, thủ tục thông quan hàng hóa, dịch vụ cảng,… tới khách
            hàng.
          </p>
        </div>
        <div className="text-center flex justify-center">
          <img src={vcqt} alt="img" className="object-cover h-[600px]" />
        </div>
      </div>
      <div className="">
        <img
          src={imgMain}
          alt="imgRent"
          className="w-full object-cover xl:h-[200px] sm:h-[100px]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Logistic;
