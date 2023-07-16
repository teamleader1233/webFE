import React from "react";
import style from "./style.module.scss";
import logo from "../../data/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

const NavHeader = () => {
  const showNav = useRef();
  const showUser_Cart = useRef();
  const handleShowNav = () => {
    showNav.current.classList.toggle(`${style.show}`);
    showUser_Cart.current.classList.toggle(`${style.show}`);
  };
  const handeBackHome = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <div className={style.nav_header}>
        <div className={style.nav_header_title}>
          <div style={{ position: "relative", marginRight: "20px" }}>
            <Link to={"/"} onClick={handeBackHome}>
              <div className={style.nav_header_title_logo}>
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div
              onClick={handleShowNav}
              className={style.nav_header_title_responsive_open}
            >
              <i className="bi bi-list"></i>
            </div>
          </div>

          <div className={`${style.nav_header_title_responsive}`} ref={showNav}>
            <div
              onClick={handleShowNav}
              className={style.nav_header_title_responsive_close}
            >
              <i className="bi bi-x-lg"></i>
            </div>
            <NavLink
              to="/HuntingService"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-solid border-white"
                  : `${style.nav_header_title_content} ${style.nav_header_title_list}`
              }
            >
              Dịch Vụ Săn Hàng
              <span></span>
              <div className={style.nav_header_title_content_list}>
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
              </div>
            </NavLink>
            <NavLink
              to="/toy"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-solid border-white"
                  : `${style.nav_header_title_content}`
              }
            >
              Đồ Chơi
              <span></span>
            </NavLink>

            <NavLink
              to="/Houseware"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-solid border-white"
                  : `${style.nav_header_title_content}`
              }
            >
              Đồ Gia Dụng
              <span></span>
            </NavLink>

            <NavLink
              to="/fashion"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-solid border-white"
                  : `${style.nav_header_title_content}`
              }
            >
              Thời Trang
              <span></span>
            </NavLink>

            <NavLink
              to="/Delivery"
              className={({ isActive }) =>
                isActive
                  ? "border-b-[2px] border-solid border-white"
                  : `${style.nav_header_title_content} ${style.nav_header_title_list}`
              }
            >
              Vận Tải
              <span></span>
              <div className={style.nav_header_title_content_list}>
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
              </div>
            </NavLink>
          </div>
        </div>

        <div className={style.nav_heasder_Infor}>
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
        </div>
      </div>
    </>
  );
};

export default NavHeader;
