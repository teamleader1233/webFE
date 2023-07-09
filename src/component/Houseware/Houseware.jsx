import React from "react";
import ContainMain from "./components/ContainMain";
import MainProductReview from "./components/MainProductReview";
import FooterContent from "../Home/component/FooterContent";
import Footer from "../Footer/Footer";

const Houseware = () => {
  return (
    <div id="top" className="overflow-x-hidden">
      <ContainMain />
      <MainProductReview />
      <Footer />
    </div>
  );
};

export default Houseware;
