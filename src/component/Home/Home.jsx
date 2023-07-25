import React from "react";
import imgRent from "./../../data/img/imgRent.png";
import Footer from "../Footer/Footer";
import img8 from "./../../data/img/image8.png";
const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full overflow-x-hidden flex justify-around flex-col items-center "
    >
      <div className="flex  w-4/5 mt-[40px] flex-col">
        <div className="w-full flex justify-between">
          <div className="w-[40%] mb-[40px]">
            <h1 className="text-[20px] font-bold my-[20px]">Giới Thiệu</h1>
            <p className="mt-[6px]">
              SVN LOGISTICS IMPORT EXPORT., JSC là nhà cung cấp dịch vụ
              Logistics chuyên nghiệp và tin cậy, hoạt động trong lĩnh vực vận
              tải nội địa, quốc tế và các dịch vụ ngoại thương. Chúng tôi cam
              kết đem đến môi trường tốt và sự hài lòng cao nhất cho khách hàng.
              Các dịch vụ LOGISTICS của SVN bao gồm:
            </p>
            <p className="mt-[6px]">
              Vận chuyển quốc tế: Đường bộ, đường biển, đường hàng không và
              nhiều phương tiện khác, đảm bảo hàng hóa được vận chuyển an toàn
              và đúng thời gian.
            </p>
            <p className="mt-[6px]">
              Xuất nhập khẩu ủy thác: Chúng tôi hỗ trợ khách hàng trong mọi thủ
              tục xuất nhập khẩu, giúp đơn giản hóa quy trình kinh doanh.  Thông
              quan và dịch vụ cảng: Đội ngũ chuyên nghiệp của chúng tôi sẽ xử lý
              các thủ tục hải quan và dịch vụ cảng một cách chính xác và nhanh
              chóng.
            </p>
            <p className="mt-[6px]">
              Chuyển phát nhanh nội địa: Đảm bảo hàng hóa được giao nhận nhanh
              chóng và đúng địa điểm.
            </p>
            <p className="mt-[6px]">
              Chúng tôi đặt trách nhiệm công việc và sự tin tưởng của khách hàng
              lên hàng đầu. Để tận hưởng các dịch vụ xuất sắc của SVN LOGISTICS.
            </p>
          </div>
          <div className="w-[40%]">
            <img src={imgRent} alt="imgRent" />
          </div>
        </div>
        <div className="w-full flex justify-between mt-[80px]">
          <div className="w-[40%]">
            <img src={imgRent} alt="imgRent" />
          </div>
          <div className="w-[40%]">
            <img src={imgRent} alt="imgRent" />
          </div>
        </div>
        <div className="w-full flex justify-between mt-[80px]">
          <div className="w-[40%]">
            <img src={imgRent} alt="imgRent" />
          </div>
          <div className="w-[40%]">
            <img src={imgRent} alt="imgRent" />
          </div>
        </div>
      </div>
      <div className="w-screen mt-[80px]">
        <img
          src={img8}
          alt="imgRent"
          className="w-full object-cover xl:h-[300px] sm:[100px]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
