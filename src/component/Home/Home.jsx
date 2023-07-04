import React from "react";
import Banner from "./component/Banner";
import MainContent from "./component/MainContent";
import MainProductReview from "./component/MainProductReview";

import Footer from "./component/Footer";
const Home = () => {
  return (
    <div id="home" className="relative">
      <Banner />
      <MainContent />
      <MainProductReview />
      <Footer />
      <div className="text-[18px] font-bold mt-[40px] text-center">
        CÔNG TY CỔ PHẦN VẬN TẢI VÀ XUẤT NHẬP KHẨU SVN LOGISTICS
      </div>
    </div>
  );
};

export default Home;
