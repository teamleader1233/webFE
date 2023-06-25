import React from "react";
import style from "./style.module.scss";
import logo from "../../data/img/logo.png";
import { Link } from "react-router-dom";
const NavHeader = () => {
  return (
    <div className={style.nav_header}>
      <div className={style.nav_header_title}>
        <Link to={"/"}>
          <div className={style.nav_header_title_logo}>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div
          className={`${style.nav_header_title_content} ${style.nav_header_title_list}`}
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
        </div>
        <div className={style.nav_header_title_content}>
          Đồ Chơi
          <span></span>
        </div>
        <div className={style.nav_header_title_content}>
          Đồ Gia Dụng
          <span></span>
        </div>
        <div className={style.nav_header_title_content}>
          Thời Trang
          <span></span>
        </div>
        <div
          className={`${style.nav_header_title_content} ${style.nav_header_title_list}`}
        >
          Vận Tải
          <span></span>
          <div className={style.nav_header_title_content_list}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p>Vận Tải Nội Địa</p>
              </li>
              <li>
                <p>Vận Tải Việt - Trung</p>
              </li>
              <li>
                <p>Thuê Xe Tải</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.nav_heasder_Infor}>
        <div className={style.nav_heasder_Infor_search}>
          <input maxlength="40" type="text" placeholder="Search..." />
          <div>
            <i className="bi bi-search"></i>
          </div>
        </div>
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
  );
};

export default NavHeader;
