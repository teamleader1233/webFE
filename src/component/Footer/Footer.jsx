import React from "react";
import logoFooter from "../../data/img/imgFooter.png";
import logoName from "../../data/img/logoName.png";
import location from "../../data/img/location.png";
import imgMain from "../../data/img/imgMain.png";
const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[60px] w-4/5 ">
        <img
          src={imgMain}
          alt="imgRent"
          className="w-full  lg:h-[200px] sm:h-[100px]"
        />
      </div>
      <div className="w-full flex justify-center relative overflow-hidden">
        <img
          src={logoFooter}
          alt="imgFooter"
          className="w-screen brightness-[0.8] object-cover opacity-30 h-[200px]"
        />
        <div className="w-4/5 absolute flex justify-between items-center h-full ">
          <img
            src={logoName}
            alt="logo"
            className=" xl:block xl:h-[160px] hidden"
          />
          <div className=" sm:w-1/2 mx-[20px] lg:px-[40px] sm:px-[8px] py-[20px] px-[6px] max-[639px]:justify-center   b border-x-[2px] font-medium text-black border-[white] border-solid  flex flex-col justify-between h-auto ">
            <h1 className="text-[1.2rem] font-bold">THÔNG TIN LIÊN HỆ :</h1>
            <div className="text-[0.8rem]">
              <p>Liên hệ : 0837.239.888 / 0985.986.883 </p>
              <p>Địa Chỉ: Số 59, Đường Nguyễn Văn Giáp, Nam Từ Liêm, Hà Nội.</p>
            </div>
            <p className="text-[0.8rem] break-words">
              Email: svn.logistics99@gmail.com
            </p>
          </div>
          <a
            className=" "
            href="https://www.google.com/maps/place/SVN+LOGISTICS/@21.0387667,105.7606313,19z/data=!4m6!3m5!1s0x3135a99b0f2f1635:0xcb0ee68bd8b2a67d!8m2!3d21.0387809!4d105.761211!16s%2Fg%2F11t7mr_1_c?hl=vi-VN&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              const href = e.currentTarget.href;
              window.open(href, "_blank");
            }}
          >
            <img
              src={location}
              alt="location"
              className="rounded-md w-[160px] "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;