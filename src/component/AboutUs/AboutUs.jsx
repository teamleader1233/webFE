import React from "react";
import Footer from "../Footer/Footer";
import LayOut from "../LayOut/LayOut";
const AboutUs = () => {
  return (
    <div className="w-full">
      <LayOut />
      <div className="flex space-x-3 place-content-center">
        <div className=" flex items-center">
          <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
        </div>

        <div>
          <h1 className="text-center font-semibold text-[26px] my-[40px] tracking-wider  ">
            Về Chúng Tôi
          </h1>{" "}
        </div>
        <div className=" flex items-center">
          <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
        </div>
      </div>

      <div className="content h-auto pt-[15px] pb-0 px-[70px]">
        <div className="box1 sm:flex sm:flex-row sm:justify-between mb-[70px] flex flex-col">
          <div className="information sm:w-[1000px] text-[16px] bg-[#d6a80334] border min-h-[200px] m-[15px] p-[30px] rounded-[50px] border-solid ">
            SVN LOGISTICS IMPORT EXPORT., JSC là nhà cung cấp dịch vụ Logistics
            chuyên nghiệp và tin cậy, hoạt động trong lĩnh vực vận tải nội địa,
            quốc tế và các dịch vụ ngoại thương. Chúng tôi cam kết đem đến môi
            trường tốt và sự hài lòng cao nhất cho khách hàng.
          </div>

          <div className="style sm:w-[400px] bg-[#d6a80334] border min-h-[200px] m-[15px] p-[30px] rounded-[50px] border-solid ">
            <div className="style-title text-center font-medium text-xl">
              Phong cách
            </div>
          </div>
        </div>

        <div className="mission bg-[#d6a80334] border min-h-[200px] m-[15px] p-[30px] rounded-[50px] border-solid ">
          <div className="mission-title text-center font-medium text-xl">
            Sứ mệnh{" "}
          </div>
        </div>
        <div className="values">
          <div className="flex space-x-3 place-content-center">
            <div className=" flex items-center">
              <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
            </div>

            <div>
              <h1 className="text-center font-medium text-[26px] my-[60px] tracking-wider  ">
                Giá Trị
              </h1>{" "}
            </div>
            <div className=" flex items-center">
              <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
            </div>
          </div>

          <div className="value-contents sm:flex  sm:justify-around sm:flex-row flex-col  flex items-center">
            <div className="value-items bg-[#d6a80334] border-[1px] border-[#a9a9a9cc] w-[200px] h-[200px] inline-block relative rounded-[50%]">
              <div className="value-text absolute w-full -translate-y-2/4 text-center text-[22px] font-medium top-2/4">
                TRÁCH NHIỆM
              </div>
            </div>
            <div className="value-items bg-[#d6a80334] border-[1px] border-[#a9a9a9cc] w-[200px] h-[200px] inline-block relative rounded-[50%] sm:mx-[20px] sm:my-[0] my-[20px]">
              <div className="value-text absolute w-full -translate-y-2/4 text-center text-[22px] font-medium top-2/4">
                KHÁCH HÀNG
              </div>
            </div>
            <div className="value-items bg-[#d6a80334] border-[1px] border-[#a9a9a9cc] w-[200px] h-[200px] inline-block relative rounded-[50%]">
              <div className="value-text absolute w-full -translate-y-2/4 text-center text-[22px] font-medium top-2/4">
                MINH BẠCH
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
