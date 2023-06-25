import React from "react";
import { Outlet } from "react-router-dom";
import style from "./style.module.scss";
import NavHeader from "./NavHeader";

const Nav = () => {
  return (
    <div className={style.nav}>
      <NavHeader />

      <Outlet />
    </div>
  );
};

export default Nav;
