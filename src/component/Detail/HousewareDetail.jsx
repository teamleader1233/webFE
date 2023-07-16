import React from "react";
import Footer from "../Footer/Footer";
import MainSimilarProduct from "./component/MainSimilarProduct";
import MainContent from "./component/MainContent";
import NavDes from "./component/NavDes";

const HousewareDetail = () => {
  return (
    <div id="detail" className="relative w-full overflow-x-hidden">
      <MainContent />
      <NavDes />
      <MainSimilarProduct />
      <Footer />
      <div className="text-[18px] font-bold mt-[40px] text-center">
        CÔNG TY CỔ PHẦN VẬN TẢI VÀ XUẤT NHẬP KHẨU SVN LOGISTICS
      </div>
    </div>
  );
};

export default HousewareDetail;
