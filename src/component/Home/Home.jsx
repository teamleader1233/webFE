import React from "react";
import Banner from "./component/Banner";
import MainContent from "./component/MainContent";
import MainProductReview from "./component/MainProductReview";

import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div id="home" className="relative w-full overflow-x-hidden">
      <Banner />
      <MainContent />
      <MainProductReview />
      <Footer />
    </div>
  );
};

export default Home;
