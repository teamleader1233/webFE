import React from "react";
import logoFooter from "../../data/img/imgFooter.png";
import logoName from "../../data/img/logoName.png";
import location from "../../data/img/location.png";
const Footer = () => {
  return (
    <div className="w-full flex justify-center relative h-[400px]">
      <img
        src={logoFooter}
        alt="imgFooter"
        className="w-screen brightness-50 object-cover"
      />
      <div className="w-4/5 absolute flex justify-between items-center h-full">
        <img src={logoName} alt="logo" className="sm:hidden xl:block" />
        <div className="xl:w-[30%] sm:w-1/2 mx-[20px] px-[20px] py-[40px] b border-x-[2px] font-medium border-[white] border-solid  flex flex-col justify-between text-white">
          <h1 className="text-[22px] font-bold">THÔNG TIN LIÊN HỆ :</h1>
          <div className="text-[18px]">
            <p>Liên hệ : 0837.239.888 / 0985.986.883 </p>
            <p>Địa Chỉ: Số 59, Đường Nguyễn Văn Giáp, Nam Từ Liêm, Hà Nội.</p>
          </div>
          <p className="text-[18px] break-words">
            Email: svn.logistics99@gmail.com
          </p>
        </div>
        <a
          className="xl:w-[30%] sm:w-1/2"
          href="https://www.google.com/maps/place/SVN+LOGISTICS/@21.0387667,105.7606313,19z/data=!4m6!3m5!1s0x3135a99b0f2f1635:0xcb0ee68bd8b2a67d!8m2!3d21.0387809!4d105.761211!16s%2Fg%2F11t7mr_1_c?hl=vi-VN&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            const href = e.currentTarget.href;
            window.open(href, "_blank");
          }}
        >
          <img src={location} alt="location" className="h-[300px] rounded-md" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
