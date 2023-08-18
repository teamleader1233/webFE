import React from "react";
import style from "./style.module.scss";
import logo from "../../data/img/logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useRef } from "react";
import china from "../../data/img/china.jpg";
import vietnam from "../../data/img/vietnam.jpg";
import english from "../../data/img/english.jpg";

import { useNavigate } from "react-router-dom";
import vcqt from "../../data/img/vcqt.png";
import order from "../../data/img/order.png";
import xnk from "../../data/img/xnk.png";
import vc24h from "../../data/img/vc24h.png";
import tq from "../../data/img/tq.png";
import vc2c from "../../data/img/vc2c.png";
import NoticeBill from "./NoticeBill";
import IconContact from "../IconContact/IconContact";

const NavHeader = () => {
  const show = useRef();
  const showDetail = useRef();
  const navigate = useNavigate();
  const showNotice = useRef(false);
  const handeBackHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClose = (e) => {
    showDetail.current?.classList.add(
      ..."opacity-0 pointer-events-none".split(" ")
    );
    window.scrollTo({ top: 0 });
    show &&
      show.current?.classList.add(
        ..."opacity-0 pointer-events-none".split(" ")
      );
    e.stopPropagation();
  };
  const handeClickDetail = () => {
    showDetail.current?.classList.remove(
      ..."opacity-0 pointer-events-none".split(" ")
    );
  };

  return (
    <div
      onClick={(e) => {
        show &&
          show.current?.classList.add(
            ..."opacity-0 pointer-events-none".split(" ")
          );
        showDetail.current?.classList.add(
          ..."opacity-0 pointer-events-none".split(" ")
        );
        if (localStorage.getItem("role") === "admin") {
          showNotice?.current?.classList.add("hidden".split(" "));
        }
      }}
    >
      <div className="top-0 w-full flex flex-col items-center justify-center bg-white z-[20] ">
        <div className="lg:flex lg:justify-between  w-4/5 lg:h-[100px] relative ">
          <div className=" flex items-center   ">
            <Link to={"/"} onClick={() => handeBackHome()}>
              <div className={style.nav_header_title_logo}>
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className=" ml-[40px] xl:flex flex-col text-[#d11908] hidden ">
              <span className="font-semibold xl:text-[22px] sm:text-[16px] text-[8px]">
                CÔNG TY CỔ PHẦN SVN LOGISTICS
              </span>
              <span className="font-medium xl:text-[16px] sm:text-[12px] text-[8px]">
                SVN LOGISTICS IMPORT EXPORT.,JSC
              </span>
            </div>
          </div>
          <div className="flex  flex-col   justify-center ">
            <div className="flex justify-end items-start mb-[10px]">
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
            <div className="flex flex-col  sm:flex-row mb-[10px]">
              <div className="2xl:px-[40px] sm:border-b-[0] border-b-[1px]  sm:px-[20px] sm:border-r-[1px] border-solid border-[#8d8c8c70] 2xl:text-[16px] sm:text-[10px]">
                <h2>
                  <i className="bi bi-headset pr-[6px] text-[#ff7134]"></i>
                  Hotline:
                </h2>
                <h2>0985.986.833</h2>
              </div>
              <div className="2xl:px-[40px]  sm:border-b-[0] border-b-[1px] sm:px-[20px] sm:border-r-[1px] border-solid border-[#8d8c8c70] 2xl:text-[16px] sm:text-[10px]">
                <h2>
                  <i className="bi bi-clock pr-[6px] text-[#ff7134]"></i>Work
                  time:
                </h2>
                <h2>8h - 18h</h2>
              </div>
              <div className="2xl:px-[40px]  sm:border-b-[0] border-b-[1px] sm:px-[20px] 2xl:text-[16px] sm:text-[10px] border-[#8d8c8c70]">
                <h2>
                  <i className="bi bi-envelope pr-[6px] text-[#d4240e]"></i>
                  Email:
                </h2>
                <h2>svn.logistics99@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-[70px] bg-gradient-to-r from-[#cb0101] to-[#e97c30] relative bg-black ">
          <div className="xl:w-[40%] w-0">
            <div className="h-[50px] bg-white relative hidden xl:block"></div>
            <div className="bg-transparent h-[50px] relative  hidden xl:block">
              <div className=" h-[0] w-[0] absolute  top-[-49px] right-[-49px] border-l-[50px] border-r-[50px]  border-l-[transparent] border-r-[transparent] border-b-[50px] border-b-[#d4240e] border-solid"></div>
            </div>
          </div>
          <div
            className={`${style.nav_header} xl:justify-start w-full sm:justify-center`}
          >
            <div
              className={`${style.nav_header_title} h-[80px] w-full`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div
                className=" lg:hidden  sm:w-full sm:flex sm:mr-[40px] flex justify-end w-full "
                onClick={() => handeClickDetail()}
              >
                <i className={`bi bi-list text-[30px] `}></i>
              </div>
              <div
                onClick={(e) => {
                  handeBackHome();
                  handleClose(e);
                }}
                ref={showDetail}
                className={` justify-around  lg:text-center  w-full text-white opacity-0 lg:opacity-[1] lg:pointer-events-auto pointer-events-none  py-[14px] flex flex-col lg:text-[16px] xl:text-[18px] lg:flex-row lg:static absolute bottom-[-160px] bg-gradient-to-r from-[#cb0101] to-[#e97c30] lg:bg-gradient-to-r lg:from-[tranparent] lg:to-[tranparent] right-0 left-0  `}
              >
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[1px] border-solid border-white"
                      : `${style.nav_header_title_content} ${style.nav_header_title_list} sm:py-[20px] sm:hover:opacity-80  `
                  }
                >
                  Trang Chủ
                  <span className="sm:hidden lg:block"></span>
                </NavLink>

                <div
                  className={`${style.nav_header_title_content} sm:py-[20px] opacity-100 `}
                  onClick={(e) => {
                    show &&
                      show.current?.classList.remove(
                        ..."opacity-0 pointer-events-none".split(" ")
                      );
                    e.stopPropagation();
                  }}
                >
                  Dịch Vụ
                  <span className={`sm:hidden lg:block`}></span>
                  <div
                    ref={show}
                    className=" flex-wrap  opacity-0 pointer-events-none transition-all ease-in-out duration-200 absolute  left-0 right-0 flex items-center bottom-[-320px] justify-between text-black bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.5)] h-[320px] overflow-auto  w-[100%]"
                  >
                    <Link
                      to={"/Logistic"}
                      className="xl:w-[15%] w-[30%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center "
                      onClick={(e) => handleClose(e)}
                    >
                      <img src={vcqt} alt="ss" />
                      <div className="mt-[20px] h-[40px] ">
                        LOGISTIC QUỐC TẾ
                      </div>
                    </Link>
                    <Link
                      to={"/Order"}
                      onClick={(e) => handleClose(e)}
                      className="xl:w-[15%] w-[30%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={order} alt="ss" />
                      <div className="mt-[20px] h-[40px]">
                        ORDER TMĐT NỘI ĐỊA TRUNG QUỐC
                      </div>
                    </Link>
                    <Link
                      to="/TrustImports"
                      onClick={(e) => handleClose(e)}
                      className="xl:w-[15%] w-[30%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={xnk} alt="ss" />
                      <div className="mt-[20px] h-[40px]">
                        XUẤT NHẬP KHẨU ỦY THÁC
                      </div>
                    </Link>
                    <Link
                      to={"/Delivery24h"}
                      onClick={(e) => handleClose(e)}
                      className="xl:w-[15%] w-[30%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={vc2c} alt="ss" />
                      <div className="mt-[20px] h-[40px]">VẬN CHUYỂN 24H</div>
                    </Link>
                    <Link
                      to={"/Clearance_Service"}
                      onClick={(e) => handleClose(e)}
                      className="xl:w-[15%] w-[30%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={tq} alt="ss" />
                      <div className="mt-[20px] h-[40px]">
                        THÔNG QUAN VÀ DỊCH VỤ CẢNG
                      </div>
                    </Link>
                    <Link
                      to={"Delivery2Way"}
                      onClick={(e) => handleClose(e)}
                      className="xl:w-[15%] w-[30%] flex flex-col items-center px-[10px] hover:bg-[#e97d30b4] h-full justify-center"
                    >
                      <img src={vc24h} alt="ss" />
                      <div className="mt-[20px] h-[40px]">
                        VẬN CHUYỂN HÀNG HÓA 2 CHIỀU VIỆT - TRUNG
                      </div>
                    </Link>
                  </div>
                </div>

                <NavLink
                  onClick={handeBackHome()}
                  to="/SearchCode"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[1px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Tra Cứu Đơn Hàng
                  <span className="sm:hidden lg:block"></span>
                </NavLink>

                <NavLink
                  to="/PriceList"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[1px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Bảng Giá
                  <span className="sm:hidden lg:block"></span>
                </NavLink>

                {/* <NavLink
                  onClick={(e) => handleClose(e)}
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[1px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Tuyển Dụng
                  <span className="sm:hidden lg:block"></span>
                </NavLink> */}
                <NavLink
                  onClick={(e) => handleClose(e)}
                  to="/About-us"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[1px] border-solid border-white"
                      : `${style.nav_header_title_content} sm:py-[20px] sm:hover:opacity-80`
                  }
                >
                  {" "}
                  Về Chúng Tôi
                  <span className="sm:hidden lg:block"></span>
                </NavLink>
                {localStorage.getItem("role") === "admin" ? (
                  <>
                    <div
                      onClick={(e) => {
                        localStorage.clear();
                        navigate("/Home");
                        handleClose(e);
                      }}
                      className="cursor-pointer text-[#ffffff] font-bold"
                    >
                      Đăng Xuất
                    </div>

                    <div className=" right-[30px]  top-[22px] z-[102] select-none">
                      <i
                        className="bi bi-bell text-[24px] text-white cursor-pointer"
                        onClick={(e) => {
                          showNotice.current.classList.toggle("hidden");
                          e.stopPropagation();
                        }}
                      ></i>
                      <div ref={showNotice} className="hidden">
                        <NoticeBill />
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <IconContact />
        <Outlet />
      </div>
    </div>
  );
};

export default NavHeader;
