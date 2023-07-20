import React from "react";
import style from "./style.module.scss";
import logo from "../../data/img/logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useRef } from "react";

const NavHeader = () => {
  const show = useRef();
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
  return (
    <div>
      <div
        className="fixed w-full flex flex-col items-center justify-center bg-white z-[20] "
        onClick={(e) =>
          show &&
          show.current?.classList.add(
            ..."opacity-0 pointer-events-none".split(" ")
          )
        }
      >
        <div className="flex justify-between  w-4/5 h-[100px] ">
          <div className="w-1/2 flex items-center">
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
          <div className="flex w-1/2  items-center">
            <div className="xl:px-[40px] sm:px-[20px] border-r-[1px] border-solid border-[#8d8c8c70] xl:text-[16px] sm:text-[12px]">
              <h2>
                <i className="bi bi-headset pr-[6px]"></i>Hotline:
              </h2>
              <h2>0985.986.833</h2>
            </div>
            <div className="xl:px-[40px] sm:px-[20px] border-r-[1px] border-solid border-[#8d8c8c70] xl:text-[16px] sm:text-[12px]">
              <h2>
                <i className="bi bi-clock pr-[6px]"></i>Work time:
              </h2>
              <h2>8h - 18h</h2>
            </div>
            <div className="xl:px-[40px] sm:px-[20px] xl:text-[16px] sm:text-[12px]">
              <h2>
                <i className="bi bi-envelope pr-[6px]"></i>Email:
              </h2>
              <h2>svn.logistics99@gmail.com</h2>
            </div>
          </div>
        </div>
        <div className="w-full flex h-[100px] bg-gradient-to-r from-[#cb0101] to-[#e97c30]">
          <div className="w-[40%] ">
            <div className="h-[50px] bg-white relative"></div>
            <div className="bg-transparent h-[50px] relative">
              <div className="h-[0] w-[0] absolute  top-[-50px] right-[-50px] border-l-[50px] border-r-[50px]  border-l-[transparent] border-r-[transparent] border-b-[50px] border-b-[#d73214] border-solid"></div>
            </div>
          </div>
          <div className={`${style.nav_header}`}>
            <div className={style.nav_header_title}>
              <div className={`${style.nav_header_title_responsive}`}>
                <div className={style.nav_header_title_responsive_close}>
                  <i className="bi bi-x-lg"></i>
                </div>
                {/* Dịch Vụ Săn Hàng */}
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} ${style.nav_header_title_list}`
                  }
                >
                  Trang Chủ
                  <span></span>
                  {/* <div className={style.nav_header_title_content_list}>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <p>Dịch Vụ Xếp Hàng</p>
                    </li>
                    <li>
                      <p>Camp Sản Phẩm</p>
                      <p>( Hàng limited giá retail )</p>
                    </li>
                    <li>
                      <p>Nhượng Quyền Giao Dịch</p>
                    </li>
                    <li>
                      <p>Thanh Toán Hộ</p>
                      <p>( Với các đơn vị nước ngoài )</p>
                    </li>
                    <li>
                      <p>Liên Hệ Dịch Vụ Đặc Biệt</p>
                    </li>
                  </ul>
                </div> */}
                </NavLink>
                {/* Đồ Chơi */}
                <div
                  className={`${style.nav_header_title_content} `}
                  onClick={(e) => {
                    show &&
                      show.current?.classList.remove(
                        ..."opacity-0 pointer-events-none".split(" ")
                      );
                    e.stopPropagation();
                  }}
                >
                  Dịch Vụ
                  <span></span>
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
                {/* Đồ Gia Dụng */}
                <NavLink
                  onClick={handeBackHome}
                  to="/InlandTransport"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content}`
                  }
                >
                  {" "}
                  Vận Đơn
                  <span></span>
                </NavLink>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content}`
                  }
                >
                  {" "}
                  Bảng Giá
                  <span></span>
                </NavLink>
                {/* Vận Tải */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content} `
                  }
                >
                  {" "}
                  Tin Tức
                  <span></span>
                  {/* <div className={style.nav_header_title_content_list}>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <NavLink to="/InlandTransport">Vận Tải Nội Địa</NavLink>
                    </li>
                    <li>
                      <NavLink to="/OutlandTransport">
                        Vận Tải Việt - Trung
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Rent">Thuê Xe Tải</NavLink>
                    </li>
                  </ul>
                </div> */}
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[2px] border-solid border-white"
                      : `${style.nav_header_title_content}`
                  }
                >
                  {" "}
                  Tuyển Dụng
                  <span></span>
                </NavLink>
              </div>
            </div>

            {/* <div className={style.nav_heasder_Infor}>
          <div className="flex justify-between bg-white px-[10px] rounded-sm ">
            <input
              maxLength="40"
              type="text"
              placeholder="Search..."
              className="focus:outline-none md:w-[380px] "
            />
            <div className=" bg-[#f94f2f] w-[60px]  flex justify-center my-[4px] rounded-sm text-white">
              <i className="bi bi-search"></i>
            </div>
          </div>

          <div className={style.nav_heasder_Infor_icon} ref={showUser_Cart}>
            <Link to="/Register">
              <div className={style.nav_heasder_Infor_user}>
                <i className="bi bi-person-fill"></i>
              </div>
            </Link>
            <div className={style.nav_heasder_Infor_cart}>
              <i className="bi bi-cart3"></i>
            </div>
          </div>
        </div> */}
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
