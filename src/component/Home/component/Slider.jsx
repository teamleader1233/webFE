import React from "react";
import Slider from "react-slick";
import banner1 from "../../../data/img/banner1.jpg";
import banner2 from "../../../data/img/banner2.jpg";
import banner3 from "../../../data/img/banner3.jpg";

const SliderImg = () => {
  const settings = {
    speed: 1500,
    fade: true,
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="w-full slick-slide">
          <img
            src={banner1}
            alt="banner1"
            className="h-screen w-full      object-cover "
          />
        </div>
        <div className="w-full slick-slide">
          <img
            src={banner2}
            alt="banner1"
            className="h-screen w-full     object-cover "
          />
        </div>
        <div className="w-full slick-slide">
          <img
            src={banner3}
            alt="banner1"
            className="h-screen w-full      object-cover "
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderImg;
