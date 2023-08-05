import React, { useEffect, useRef } from "react";

import Footer from "../Footer/Footer";
import axios from "axios";
import bgUrl from "../../data/img/bgUrl.png";

// import axios from "axios";
const Home = () => {
  const show = useRef();
  const data = {
    username: "admin",
    password: "admin",
  };
  const getData = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/token/", data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div
      ref={show}
      id="home"
      className="relative w-full overflow-x-hidden flex justify-around flex-col items-center "
    >
      <img src={bgUrl} alt="bgUrl" className="fixed w-screen top-0" />
      <div className="flex  w-4/5 mt-[40px] flex-col">
        <div className="w-full flex justify-center">
          <div className="w-[40%] mb-[40px]">
            <h1 className="text-[24px] font-bold my-[20px]">Giới Thiệu</h1>
            <p className="mt-[6px] text-justify">
              SVN LOGISTICS IMPORT EXPORT., JSC là nhà cung cấp dịch vụ
              Logistics chuyên nghiệp và tin cậy, hoạt động trong lĩnh vực vận
              tải nội địa, quốc tế và các dịch vụ ngoại thương. Chúng tôi cam
              kết đem đến môi trường tốt và sự hài lòng cao nhất cho khách hàng.
            </p>
            <p className="mt-[6px]">
              Xem thêm.... ( bấm vào xem thêm ra thẳng link về chúng tôi )
            </p>
          </div>
          <div className="w-[20%]  flex justify-center">
            <div className="w-[2px] h-full bg-slate-300 rounded-md"></div>
          </div>
          <div className="w-[40%]">
            <div className="bg-[#D9D9D9] h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl ">
              <h1 className="text-center font-medium text-[24px]">
                Bảng Tin Hàng Về
              </h1>
              <div className="mt-[20px] break-words">asdasdasdasdasdasdasd</div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between mt-[200px] flex-wrap">
          <div className="bg-[#D9D9D9] h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl w-[100%] relative lg:w-[30%] mt-[60px] lg:mt-0">
            <div className="mt-[20px] break-words">asdasdasdasdasdasdasd</div>
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-[24px] font-medium">
              Bài Báo{" "}
            </div>
          </div>
          <div className="bg-[#D9D9D9] h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl w-[100%] relative lg:w-[30%] mt-[60px] lg:mt-0">
            <div className="mt-[20px] break-words">asdasdasdasdasdasdasd</div>
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-[24px] font-medium">
              Bài Báo{" "}
            </div>
          </div>
          <div className="bg-[#D9D9D9] h-[400px] flex flex-col py-[20px] px-[20px] rounded-2xl w-[100%] relative lg:w-[30%] mt-[60px] lg:mt-0">
            <div className="mt-[20px] break-words">asdasdasdasdasdasdasd</div>
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
