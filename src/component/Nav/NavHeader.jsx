import React from "react";
import style from "./style.module.scss";
import logo from "../../data/img/logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useRef } from "react";
import china from "../../data/img/china.jpg";
import vietnam from "../../data/img/vietnam.jpg";
import english from "../../data/img/english.jpg";
import { useState } from "react";
const NavHeader = () => {
  const [iconflexible, setIconFlexible] = useState("bi-list");
  const show = useRef();
  const showDetail = useRef();
  const handeBackHome = () => {
    window.scrollTo({ top: 0 });
  };
  const handleClose = (e) => {
    show &&
      show.current?.classList.add(
        ..."opacity-0 pointer-events-none".split(" ")
      );
    e.stopPropagation();
  };
  const handeClickDetail = () => {
    if (iconflexible === "bi-list") {
      showDetail.current?.classList.remove(
        ..."sm:opacity-0 sm:pointer-events-none".split(" ")
      );
      setIconFlexible("bi-x-lg");
    } else {
      showDetail.current?.classList.add(
        ..."sm:opacity-0 sm:pointer-events-none".split(" ")
      );
      setIconFlexible("bi-list");
    }
  };
  return (
    <div
      onClick={() => {
        show &&
          show.current?.classList.add(
            ..."opacity-0 pointer-events-none".split(" ")
          );
      }}
    >
      <div className="fixed w-full flex flex-col items-center justify-center bg-white z-[20] ">
        <div className="flex justify-between  w-4/5 h-[100px] ">
          <div className=" flex items-center">
            <Link to={"/"} onClick={handeBackHome}>
              <div className={style.nav_header_title_logo}>
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className=" ml-[40px] flex flex-col text-[#d11908] ">
              <span className="font-semibold xl:text-[22px] sm:text-[16px]">
                CÔNG TY CỔ PHẦN SVN LOGISTICS
              </span>
              <span className="font-medium xl:text-[16px] sm:text-[12px]">
                SVN LOGISTICS IMPORT EXPORT.,JSC
              </span>
            </div>
          </div>
          <div className="flex  flex-col   justify-center ">
            <div className="flex justify-start items-start mb-[10px]">
              <img
                src={vietnam}
                alt="vietnam"
                className="h-[20px] w-[30px] ml-[20px]"
              />
              <img
                src={china}
                alt="china"
                className="h-[20px] w-[30px] ml-[20px]"
              />
              <img
                src={english}
                alt="english"
                className="h-[20px] w-[30px] ml-[20px]"
              />
            </div>
            <div className="flex">
              <div className="2xl:px-[40px] sm:px-[20px] border-r-[1px] border-solid border-[#8d8c8c70] 2xl:text-[16px] sm:text-[10px]">
                <h2>
                  <i className="bi bi-headset pr-[6px] text-[#ff7134]"></i>
                  Hotline:
                </h2>
                <h2>0985.986.833</h2>
              </div>
              <div className="2xl:px-[40px] sm:px-[20px] border-r-[1px] border-solid border-[#8d8c8c70] 2xl:text-[16px] sm:text-[10px]">
                <h2>
                  <i className="bi bi-clock pr-[6px] text-[#ff7134]"></i>Work
                  time:
                </h2>
                <h2>8h - 18h</h2>
              </div>
              <div className="2xl:px-[40px] sm:px-[20px] 2xl:text-[16px] sm:text-[10px]">
                <h2>
                  <i className="bi bi-envelope pr-[6px] text-[#ff7134]"></i>
                  Email:
                </h2>
                <h2>svn.logistics99@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-[100px] bg-gradient-to-r from-[#cb0101] to-[#e97c30] relative">
          <div className="w-[40%] ">
            <div className="h-[50px] bg-white relative"></div>
            <div className="bg-transparent h-[50px] relative">
              <div className="h-[0] w-[0] absolute  top-[-49px] right-[-49px] border-l-[50px] border-r-[50px]  border-l-[transparent] border-r-[transparent] border-b-[50px] border-b-[#d73214] border-solid"></div>
            </div>
          </div>
          <div
            className={`${style.nav_header} sm:justify-end xl:justify-start`}
          >
            <div className={`${style.nav_header_title} `}>
              <div
                className=" lg:hidden sm:w-full sm:flex sm:mr-[40px] "
                onClick={() => handeClickDetail()}
              >
                <i className={`bi ${iconflexible} text-[30px]`}></i>
              </div>
              <div
                ref={showDetail}
                className={`lg:text-center sm:w-full text-white sm:opacity-0 lg:opacity-[1] lg:pointer-events-auto sm:pointer-events-none  sm:py-[14px] flex sm:flex-col lg:text-[16px] xl:text-[18px] lg:flex-row lg:static sm:absolute sm:bottom-[-160px] sm:bg-gradient-to-r sm:from-[#cb0101] sm:to-[#e97c30] lg:bg-gradient-to-r lg:from-[tranparent] lg:to-[tranparent] sm:right-0 sm:left-0b  `}
              >
                {/* Dịch Vụ Săn Hàng */}
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} ${style.nav_header_title_list} sm:py-[20px] sm:hover:opacity-80   `
                  }
                >
                  Trang Chủ
                  <span className="sm:hidden lg:block"></span>
                </NavLink>

                <div
                  className={`${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80 lg:hover:opacity-100 `}
                  onClick={(e) => {
                    show &&
                      show.current?.classList.remove(
                        ..."opacity-0 pointer-events-none".split(" ")
                      );
                    e.stopPropagation();
                  }}
                >
                  Dịch Vụ
                  <span className="sm:hidden lg:block"></span>
                  <div
                    ref={show}
                    className=" opacity-0 pointer-events-none transition-all ease-in-out duration-200 absolute w-screen left-0 right-0 flex items-center bottom-[-300px] justify-between text-black bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.5)] h-[300px] "
                  >
                    <div
                      className="w-[15%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center "
                      onClick={(e) => handleClose(e)}
                    >
                      <img src={logo} alt="ss" />
                      <div className="mt-[20px]">
                        XUẤT NHẬU KHẨU CHÍNH NGẠCH
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleClose(e)}
                      className="w-[15%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={logo} alt="ss" />
                      <div className="mt-[20px]">
                        ĐẶT HÀNG ONLINE TRÊN CÁC SÀN TMĐT TRUNG QUỐC
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleClose(e)}
                      className="w-[15%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={logo} alt="ss" />
                      <div className="mt-[20px]">
                        VẬN CHUYỂN HÀNG HÓA 2 CHIỀU VIỆT-TRUNG
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleClose(e)}
                      className="w-[15%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={logo} alt="ss" />
                      <div className="mt-[20px]">
                        THANH TOÁN MAU BÁN NHƯỢNG QUYỀN GIAO DỊCH
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleClose(e)}
                      className="w-[15%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={logo} alt="ss" />
                      <div className="mt-[20px]">
                        NHẬN CHUYỂN TIỀN TRUNG QUỐC VỀ VIỆT NAM
                      </div>
                    </div>
                    <div
                      onClick={(e) => handleClose(e)}
                      className="w-[15%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={logo} alt="ss" />
                      <div className="mt-[20px]">VẬN CHUYỂN 24H</div>
                    </div>
                  </div>
                </div>

                <NavLink
                  onClick={handeBackHome}
                  to="/InlandTransport"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Vận Đơn
                  <span className="sm:hidden lg:block"></span>
                </NavLink>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Bảng Giá
                  <span className="sm:hidden lg:block"></span>
                </NavLink>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Tuyển Dụng
                  <span className="sm:hidden lg:block"></span>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Về Chúng Tôi
                  <span className="sm:hidden lg:block"></span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[200px]">
        <Outlet />
      </div>
    </div>
  );
};

export default NavHeader;
