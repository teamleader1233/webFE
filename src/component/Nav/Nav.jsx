import React from "react";
import { Outlet } from "react-router-dom";
import style from "./style.module.scss";
import NavHeader from "./NavHeader";
import IconContact from "../IconContact/IconContact";

const Nav = () => {
  return (
    <div className={style.nav}>
      <NavHeader />

      <IconContact />
      <Outlet />
    </div>
  );
};

export default Nav;
