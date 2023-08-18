import React, { useEffect, useRef, useState } from "react";

import Footer from "../Footer/Footer";

import bgUrl from "../../data/img/bgUrl.png";
import InfoBill from "../SearchCode/InfoBill";
import { useNavigate } from "react-router-dom";

// import axios from "axios";
const Home = () => {
  const show = useRef();
  const navigate = useNavigate();
  return (
    <div
      ref={show}
      id="home"
      className="relative w-full overflow-x-hidden flex justify-around flex-col items-center z-[8]"
    >
      <img src={bgUrl} alt="bgUrl" className="fixed w-screen top-0 z-0" />
      <div className="flex  w-4/5 mt-[40px] flex-col relative z-10">
        <div className="w-full flex flex-col sm:flex sm:justify-center sm:flex-row  ">
          <div className="sm:w-[40%] mb-[40px]">
            <h1 className="text-[24px] font-bold my-[20px]">Giới Thiệu</h1>
            <p className="mt-[6px] text-justify">
              SVN LOGISTICS IMPORT EXPORT., JSC là nhà cung cấp dịch vụ
              Logistics chuyên nghiệp và tin cậy, hoạt động trong lĩnh vực vận
              tải nội địa, quốc tế và các dịch vụ ngoại thương. Chúng tôi cam
              kết đem đến môi trường tốt và sự hài lòng cao nhất cho khách hàng.
            </p>
            <p
              className="mt-[6px] text-[#ff7134] cursor-pointer hover:opacity-80"
              onClick={() => navigate("/About-us")}
            >
              Xem thêm....
            </p>
          </div>
          <div className="w-[20%]  sm:flex justify-center hidden">
            <div className="w-[2px] h-full bg-slate-300 rounded-md"></div>
          </div>
          <div className="sm:w-[40%]">
            <div className="bg-[#D9D9D9] min-h-[400px]  flex flex-col py-[20px] px-[20px] rounded-2xl ">
              <h1 className="text-center font-medium text-[24px]">
                Bảng Tin Hàng Về
              </h1>
              <div className="mt-[20px] break-words text-justify">
                Chào các bạn thân yêu của chúng tôi! 🌟 Chúng tôi vô cùng phấn
                khích thông báo rằng tính năng "Theo dõi đơn hàng" đã chuẩn bị
                ra mắt! Từ giờ, bạn sẽ không còn phải mất niềm tin khi đợi chờ
                hàng hóa từ Trung Quốc về Việt Nam mà không biết chúng đang ở
                đâu. Với tính năng mới này, việc theo dõi đơn hàng trở nên dễ
                dàng và tiện lợi hơn bao giờ hết!
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-b-[2px] mt-[60px] sm:hidden bg-slate-300"></div>
        <div className=" flex justify-between sm:mt-[200px] flex-wrap">
          <div className="bg-[#D9D9D9] min-h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl w-[100%] relative lg:w-[30%] mt-[60px] lg:mt-0">
            <div className="mt-[20px] break-words text-justify">
              Chào các bạn thân mến, Bạn đang có kế hoạch kinh doanh hoặc cá
              nhân và cần dịch vụ vận chuyển 2 chiều giữa Việt Nam và Trung
              Quốc? SVN Logistics đã sẵn sàng đồng hành cùng bạn với những giải
              pháp vận chuyển độc đáo và chất lượng hàng đầu!
            </div>
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-[24px] font-medium">
              Bài Báo{" "}
            </div>
          </div>
          <div className="bg-[#D9D9D9] min-h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl w-[100%] relative lg:w-[30%] mt-[60px] lg:mt-0">
            <div className="mt-[20px] min-h-[400px] break-words text-justify">
              SVN Logistics tự hào là đối tác đáng tin cậy cho mọi nhu cầu vận
              chuyển 2 chiều giữa Việt Nam và Trung Quốc. Chúng tôi cam kết mang
              đến sự tiện lợi, an toàn và hiệu quả cho mọi gói hàng của bạn. Hãy
              liên hệ với chúng tôi ngay hôm nay để biết thêm chi tiết và nhận
              báo giá tốt nhất! 📞📧 🏢 VPLV : Số 59 đường Nguyễn Văn Giáp,
              Phường Cầu Diễn, Nam Từ Liêm, Hà Nội 🏗️ Kho: Hà Nội, Sài Gòn
              🌐Facebook : SVN Logistics, SVN order ☎️ Call/Zalo : 0837.239.888
              / 0985.986.883"
            </div>
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-[24px] font-medium">
              Bài Báo{" "}
            </div>
          </div>
          <div className="bg-[#D9D9D9] min-h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl w-[100%] relative lg:w-[30%] mt-[60px] lg:mt-0">
            <div className="mt-[20px] break-words text-justify">
              Bạn đang kinh doanh và muốn mở rộng thị trường sang Trung Quốc hay
              đang tìm kiếm một đối tác đáng tin cậy để hỗ trợ cho quá trình
              xuất nhập khẩu? Hãy đến với SVN LOGISTICS
            </div>
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-[24px] font-medium">
              Bài Báo{" "}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
