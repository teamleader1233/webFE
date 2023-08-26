import React from "react";
import Footer from "../Footer/Footer";
import TextDetail from "./TextDetail";
import LayOut from "../LayOut/LayOut";
const PriceList = () => {
  return (
    <div>
      <LayOut />
      <div className="w-4/5 ml-auto mr-auto items-center">
        <div className="flex space-x-3 place-content-center">
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>

          <div>
            <h1 className="text-center my-5 uppercase text-3xl font-bold">
              bảng giá và chính sách
            </h1>
          </div>
          <div className=" flex items-center">
            <div className="w-[160px] h-[2px] bg-black rounded-md"></div>
          </div>
        </div>

        <div className="text-black px-6">
          <h2 className="text-center my-5 pt-4 uppercase font-semibold text-xl">
            bảng giá và dịch vụ
          </h2>
          <h4 className="pb-6 font-semibold underline">
            I. CƯỚC PHÍ VẬN CHUYỂN HÀNG HÓA ĐƯỜNG BỘ TỪ TRUNG QUỐC VỀ VIỆT NAM
          </h4>
          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <tr>
                <th className="h-12 bg-orange-400 text-white">TRỌNG LƯỢNG</th>
                <th className="h-12 bg-orange-400 text-white">
                  VẬN CHUYỂN THÔNG THƯỜNG (VNĐ)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center h-8">Dưới 10 kg</td>
                <td className="text-center h-8">35.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">10 - 50 k</td>
                <td className="text-center h-8 bg-orange-100">30.000</td>
              </tr>
              <tr>
                <td className="text-center h-8">50-100 kg</td>
                <td className="text-center h-8">28.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">100 - 300 kg</td>
                <td className="text-center h-8 bg-orange-100">25.000</td>
              </tr>
              <tr>
                <td className="text-center h-8">300 - 500 kg</td>
                <td className="text-center h-8">22.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">500 - 1 tấn</td>
                <td className="text-center h-8 bg-orange-100">19.000</td>
              </tr>
              <tr>
                <td className="text-center h-8">Trên 1 tấn</td>
                <td className="text-center h-8">15.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">1m3</td>
                <td className="text-center h-8 bg-orange-100">3.500.000</td>
              </tr>
              <tr className="h-6">
                <td className="text-center h-8">
                  Thời gian vận chuyển ( dự kiến )
                </td>
                <td className="text-center h-8">
                  5-7 ngày (±) 3 ngày kho TQ - Hà Nội VN
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Cước phí vận chuyển hàng hóa đường bộ
          </p>

          <h4 className="pb-6 font-semibold underline">
            II. CƯỚC PHÍ VẬN CHUYỂN HÀNG HÓA HAI CHIỀU HỎA TỐC VIỆT
          </h4>
          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <tr>
                <th className="h-12 bg-orange-400 text-white" colSpan={2}>
                  VĂN KIỆN/ĐƠN HÀNG(giới hạn 5kg)
                </th>
                <th className="h-12 bg-orange-400 text-white" rowSpan={2}>
                  THỜI GIAN VẬN CHUYỂN
                </th>
              </tr>
              <tr>
                <td className="text-center h-8">Trọng lượng 1kg đầu tiên</td>
                <td className="text-center h-8">
                  đầu tiên Trọng lượng 1kg tiếp theo
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center h-8 bg-orange-100">200 (RMB)</td>
                <td className="text-center h-8 bg-orange-100">50 (RMB)</td>
                <td className="text-center h-8 bg-orange-100">24h</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Cước phí vận chuyển HỎA TỐC 24H hai chiều Việt Nam - Trung Quốc
          </p>

          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <tr>
                <th className="h-12 bg-orange-400 text-white" colSpan={2}>
                  VĂN KiỆN/ĐƠN HÀNG(giới hạn 20kg)
                </th>
                <th className="h-12 bg-orange-400 text-white" rowSpan={2}>
                  THỜI GIAN VẬN CHUYỂN
                </th>
              </tr>
              <tr>
                <td className="text-center h-8">Trọng lượng 1kg đầu tiên</td>
                <td className="text-center h-8">
                  đầu tiên Trọng lượng 1kg tiếp theo
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center h-8 bg-orange-100">100 (RMB)</td>
                <td className="text-center h-8 bg-orange-100">30 (RMB)</td>
                <td className="text-center h-8 bg-orange-100">3 ngày</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Cước phí chuyển hàng NHANH hai chiều Việt Nam - Trung Quốc
          </p>

          <div className="pb-20">
            <ul>
              <div className="flex text-[#d84040] text-[18px] underline">
                <i className="bi bi-exclamation-circle-fill mr-[10px]"></i>
                <h3 className="pb-4 font-semibold">Lưu ý :</h3>
              </div>
              <li className="list-decimal pb-1">
                Đơn hàng vận chuyển HỎA TỐC hai chiều Việt - Trung giới hạn ở
                trọng lượng dưới 5
              </li>
              <li className="list-decimal pb-1">
                Đơn hàng vận chuyển NHANH hai chiều Việt - Trung giới hạn ở
                trọng lượng dưới 20kg/1 đơn h
              </li>
            </ul>
          </div>

          <h4 className="pb-6 font-semibold underline">
            III. DỊCH VỤ ORDER HÀNG HÓA TMĐT VIỆT TRUNG.
          </h4>
          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <th className="h-12 bg-orange-400 text-white">TÊN DỊCH VỤ</th>
              <th className="h-12 bg-orange-400 text-white">GIẢI THÍCH</th>
              <th className="h-12 bg-orange-400 text-white">LỰA CHỌN</th>
            </thead>

            <tbody>
              <tr>
                <td className="h-8 pl-1.5">Giá sản phẩm trên Website</td>
                <td className=" h-8">
                  Giá sản phẩm hiển thị trên các sàn TMĐT
                </td>
                <td className=" h-8"></td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5 bg-orange-100">
                  Chi phí vận chuyển nội địa Trung
                </td>
                <td className=" h-8 bg-orange-100">
                  Phí vận chuyển hàng hóa từ Nhà cung cấp TQ tới kho của SVN tại
                  TQ
                </td>
                <td className=" h-8 bg-orange-100"></td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5">Chi phí tìm kiếm sản phẩm</td>
                <td className=" h-8">
                  Phí tìm kiếm và lựa chọn các mặt hàng theo yêu cầu của khách
                  hàng
                </td>
                <td className=" h-8"></td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5 bg-orange-100">
                  Chi phí vận chuyển TQ - VN
                </td>
                <td className=" h-8 bg-orange-100">
                  Phí vận chuyển hàng hóa từ kho Trung Quốc về kho Việt Nam của
                  SVN
                </td>
                <td className=" h-8 bg-orange-100"></td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5">Chi phí kiểm đếm sản phẩm</td>
                <td className=" h-8">
                  Phí kiểm hàng tại kho Trung Quốc và kho Việt Nam để đảm bảo
                  hàng hóa cho quý khách
                </td>
                <td className="text-center h-8">Tùy chọn</td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5 bg-orange-100">Chi phí bảo quản</td>
                <td className=" h-8 bg-orange-100">
                  Đóng kiện bảo quản chống va đập, móp méo, biến dạng
                </td>
                <td className="text-center h-8 bg-orange-100">Tùy chọn</td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5">Chi phí lưu kho</td>
                <td className=" h-8">
                  Phí lưu kho vượt quá thời gian quy định lấy hàng của SVN
                </td>
                <td className="text-center h-8">Tùy chọn</td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5 bg-orange-100">
                  Chi phí giao hàng yêu cầu
                </td>
                <td className=" h-8 bg-orange-100">
                  Phí chuyển phát nội địa Việt Nam tới địa chỉ yêu cầu của quý
                  khách
                </td>
                <td className="text-center h-8 bg-orange-100">Tùy chọn</td>
              </tr>
              <tr>
                <td className="h-8 pl-1.5">Chi phí vận chuyển phát sinh</td>
                <td className=" h-8">
                  Phí nâng hàng, hạ hàng đối với các kiện hàng quá khổ quá tải
                </td>
                <td className="text-center h-8">Tùy chọn</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Biểu phí một đơn hàng order
          </p>

          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <th className="h-12 bg-orange-400 text-white">
                Giá trị đơn hàng
              </th>
              <th className="h-12 bg-orange-400 text-white">phí dịch vụ</th>
            </thead>

            <tbody>
              <tr>
                <td className="text-center h-8">
                  Phí dịch vụ tối thiểu 1 đơn hàng
                </td>
                <td className="text-center h-8">10.000 (VNĐ)</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">0 - 10tr</td>
                <td className="text-center h-8 bg-orange-100">3,5 %</td>
              </tr>
              <tr>
                <td className="text-center h-8">10tr - 30tr</td>
                <td className="text-center h-8">3,2 %</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">30tr - 50tr</td>
                <td className="text-center h-8 bg-orange-100">3,5%</td>
              </tr>
              <tr>
                <td className="text-center h-8">50tr - 200tr</td>
                <td className="text-center h-8">3%</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">200tr - 350tr</td>
                <td className="text-center h-8 bg-orange-100">2,5%</td>
              </tr>
              <tr>
                <td className="text-center h-8">Trên 350tr</td>
                <td className="text-center h-8">2%</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Biểu phí dịch vụ mua hàng
          </p>

          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <th className="h-12 bg-orange-400 text-white">SỐ LƯỢNG</th>
              <th className="h-12 bg-orange-400 text-white">
                MỨC GIÁ ( VNĐ/1 SẢN PHẨM )
              </th>
            </thead>

            <tbody>
              <tr>
                <td className="text-center h-8">0 - 10 sản phẩm</td>
                <td className="text-center h-8">8.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">
                  10 - 30 sản phẩm
                </td>
                <td className="text-center h-8 bg-orange-100">6.000</td>
              </tr>
              <tr>
                <td className="text-center h-8">30 - 50 sản phẩm</td>
                <td className="text-center h-8">5.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">
                  100 - 300 sản phẩm
                </td>
                <td className="text-center h-8 bg-orange-100">3.000</td>
              </tr>
              <tr>
                <td className="text-center h-8">300 - 500 sản phẩm</td>
                <td className="text-center h-8">2.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">
                  Trên 500 sản phẩm
                </td>
                <td className="text-center h-8 bg-orange-100">1.000</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Biểu phí kiểm đếm sản phẩm
          </p>

          <table
            className="ml-auto mr-auto w-11/12 mb-6 border-solid border border-black border-collapse rounded-3xl overflow-hidden"
            border={1}
          >
            <thead>
              <th className="h-12 bg-orange-400 text-white" colSpan={2}>
                PHÍ ĐÓNG KIỆN(kg)
              </th>
            </thead>

            <tbody>
              <tr>
                <th className="text-center h-8">TRỌNG LƯỢNG</th>
                <th className="text-center h-8">PHÍ ĐÓNG KIỆN (VNĐ)</th>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">1kg đầu tiên</td>
                <td className="text-center h-8 bg-orange-100">70.000</td>
              </tr>
              <tr>
                <td className="text-center h-8">1kg tiếp theo</td>
                <td className="text-center h-8">3.500</td>
              </tr>
            </tbody>

            <thead>
              <th className="h-12 bg-orange-400 text-white" colSpan={2}>
                PHÍ ĐÓNG KIỆN(m3)
              </th>
            </thead>

            <tbody>
              <tr>
                <th className="h-8">Khối lượng</th>
                <th className="h-8">Phí đóng kiện (VNĐ)</th>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">Dưới 0.01m3</td>
                <td className="text-center h-8 bg-orange-100">70.000</td>
              </tr>
              <tr>
                <td className="text-center h-8 ">Từ 0.01m3 tới 0.1m3</td>
                <td className="text-center h-8 ">
                  70.000/0,01m3 đầu tiên + 15.000/0,01m3 tiếp theo
                </td>
              </tr>
              <tr>
                <td className="text-center h-8 bg-orange-100">
                  Từ 0.1m3 tới 1m3
                </td>
                <td className="text-center h-8 bg-orange-100">
                  205.000/0,1m3 đầu tiên + 50.000/0,1m3 tiếp theo
                </td>
              </tr>
              <tr>
                <td className="text-center h-8 ">Trên 1m3</td>
                <td className="text-center h-8 ">655.000/1m</td>
              </tr>
            </tbody>
          </table>

          <p className="text-center pb-20 text-base italic underline">
            Biểu phí đóng kiện sản phẩm (m3)
          </p>

          <div className="warning">
            <ul>
              <div className="flex text-[#d84040] text-[18px] underline">
                <i className="bi bi-exclamation-circle-fill mr-[10px]"></i>
                <h3 className="pb-4 font-semibold">Lưu ý :</h3>
              </div>
              <TextDetail
                title="Các sản phẩm vi phạm quyền sở hữu trí tuệ và các mặt hàng bị cấm
                đều bị công ty chúng tôi từ chối, các mặt hàng bị cấm qua đường
                hàng không sẽ không được gửi qua các hãng vận chuyển hàng không,
                nếu bị phát hiện quý khách sẽ phải tự chịu trách nhiệm về hậu"
              />{" "}
              <TextDetail
                title=" Dịch vụ có thể bị hoãn, chậm trễ do các yếu tố bất khả kháng như
              chuyến bay, thời tiết, thủ tục hải quan, v.v.."
              />
              <TextDetail
                title="  Trường hợp khách hàng muốn bảo hiểm giá trị hàng hóa, phí bảo
                hiểm được tính là 5% giá trị hàng hóa. Giá trị tối thiểu là 100
                RMB và giá trị bảo hiểm tối đa của mặt hàng là 20.000RMB. Đối
                với các mặt hàng dễ vỡ hoặc hàng hóa không phù hợp các yêu cầu
                vận chuyển,công ty có quyền từ chối vận chuyển."
              />
              <TextDetail
                title="  Đối với các hàng hóa không mua bảo hiểm, nếu hàng hóa bị mất,
                mức bồi thường tối đa sẽ được tính là 50 Tệ / kg tổng trọng
                lượng của hàng hóa bị hư hỏng. Công ty sẽ không chịu trách nhiệm
                bồi thường trong trường hợp bao bì, thùng hàng, bưu kiện không
                bị sao nhưng hàng hóa bên trong bị hỏng. Bên A vui lòng lưu ý
                quy chuẩn đóng gói hàng hóa"
              />
              <TextDetail
                title="  Do thời gian làm việc có hạn vào ban đêm nên quý khách hàng vui
                lòng ghi rõ địa điểm muốn vận chuyển bằng bút lớn trên mặt bill
                hàng để tránh xảy ra nhầm lẫn trong quá trình phân loại."
              />
              <TextDetail
                title="  Đối với những đơn hàng nhờ thu tiền hộ công ty chúng tôi sẽ thu
                10% phí dịch vụ và hoàn trả trong vòng 30 ngày"
              />
              <TextDetail
                title=" Các sản phẩm điện tử, máy móc, thiết bị, vật có giá trị, chất
                lỏng, thực phẩm, ... Vui lòng tham khảo ý kiến công tychúng tôi
                trước khi đặt hàng."
              />
              <TextDetail title=" Giá trên chưa bao gồm VAT." />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PriceList;
