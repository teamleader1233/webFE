import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import imgMain from "../../data/img/imgMain.png";
import Footer from "../Footer/Footer";
import LayOut from "../LayOut/LayOut";
const TrustImports = () => {
  return (
    <div className="w-full flex justify-between items-center flex-col">
      <LayOut />
      <div className="w-4/5">
        <ButtonSearch />
        <div className="flex space-x-3 place-content-center ">
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center font-medium text-[26px] my-[40px] tracking-wider  ">
              Xuất Nhập Khẩu Ủy Thác
            </h1>
          </div>
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>
        </div>

        <div className="my-[40px]">
          <p>
            <span className="ml-[40px] text-justify">SVN LOGISTICS </span>EXPORT
            IMPORT., JSC là đơn vị uy tín với nhiều năm kinh nghiệm trong lĩnh
            vực ngoại thương và thương mại xuất nhập khẩu. Chúng tôi tự hào với
            đội ngũ chuyên nghiệp và trình độ cao, cam kết mang đến sự hỗ trợ
            thuận lợi cho hoạt động xuất nhập khẩu của khách hàng.
          </p>
          <p className="my-[40px] font-semibold">
            Dịch vụ ủy thác XNK tại SVN bao gồm:
          </p>
          <p className="">
            <span className="mt-[10px] block">
              1. Đại diện khách hàng ký kết hợp đồng ngoại thương và thực hiện
              thanh toán ngoại thương.{" "}
            </span>
            <span className="mt-[10px] block">
              2. Tư vấn và giới thiệu khách hàng quốc tế và các mặt hàng phù hợp
              khi khách hàng cần tìm kiếm đối tác.{" "}
            </span>
            <span className="mt-[10px] block">
              {" "}
              3. Hỗ trợ thực hiện các thủ tục xuất nhập khẩu hàng hóa, giao nhận
              tại cảng.{" "}
            </span>
            <span className="mt-[10px] block">
              {" "}
              4. Đồng hành cùng khách hàng giải quyết khiếu nại đối với các đối
              tác nước ngoài.{" "}
            </span>
            <span className="mt-[10px] block">
              5. Thu tiền phí ủy thác ở mức hợp lý dựa trên giá trị lô hàng.{" "}
            </span>
            <span className="mt-[10px] block">
              {" "}
              6. Cung cấp tư vấn tài chính cho khách hàng trong việc thanh toán,
              với mức và thời hạn linh hoạt tùy theo uy tín của khách hàng.
            </span>
          </p>
        </div>
        <div>
          <h1 className="mb-[20px] font-semibold">Liên hệ</h1>
          <div>
            <div className="mt-[10px]">
              Liên Hệ: 0837.239.888 / 0985.986.883
            </div>
            <div className="mt-[10px]">
              Chỉ: Số 59 đường Nguyễn Văn Giáp, Nam Từ Liêm, Hà Nội
            </div>
            <div className="mt-[10px]"> Email: svn.logistics99@gmail.com</div>
            <div className="mt-[10px]">
              Chúng tôi sẵn lòng hỗ trợ và tư vấn mọi nhu cầu vận chuyển và
              logistics của bạn.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrustImports;
