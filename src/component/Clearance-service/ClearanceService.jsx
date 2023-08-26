import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import imgContent from "../../data/img/tq&dvc.png";
import imgMain from "../../data/img/imgMain.png";
import Footer from "../Footer/Footer";
import LayOut from "../LayOut/LayOut";
const ClearanceService = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <LayOut />
      <div className="w-4/5">
        <ButtonSearch />
        <div className="flex space-x-3 place-content-center ">
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center font-medium text-[26px] my-[40px] tracking-wider  ">
              THÔNG QUAN VÀ DỊCH VỤ CẢNG
            </h1>{" "}
          </div>
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>
        </div>

        <div className="leading-[26px] text-justify">
          <span className="ml-[40px]">SVN</span> LOGISTICS EXPORT IMPORT., JSC
          cung cấp các dịch vụ kê khai hải quan và làm chứng từ thông quan cho
          hàng hóa xuất khẩu và nhập khẩu. Dịch vụ kê khai hải quan giúp xử lý
          các thủ tục pháp lý và hải quan cần thiết để hàng hóa của bạn được vận
          chuyển qua biên giới quốc gia một cách hiệu quả và hợp pháp. Các chứng
          từ thông quan và các giấy tờ cần thiết, đảm bảo mọi thông tin liên
          quan đến hàng hóa của bạn được chính xác và hoàn chỉnh.
        </div>
        <div className="mt-[40px]">
          <div>
            <span className="font-semibold">Hotline:</span> 0985.986.883
          </div>{" "}
          <div>
            <span className="font-semibold">Địa Chỉ:</span> : Số 59 Nguyễn Văn
            Giáp, Quận Nam Từ Liêm, Thành phố Hà Nội.
          </div>
          <div>
            Chúng tôi sẵn lòng hỗ trợ và tư vấn mọi nhu cầu vận chuyển và
            logistics của bạn.
          </div>
        </div>
        <div className="mt-[40px]">
          <img src={imgContent} alt="imgContent " />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClearanceService;
