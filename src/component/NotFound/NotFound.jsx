import React from "react";
import style from "./style.module.scss";
import img404 from "../../data/img/404.png";
const NotFound = () => {
  const handleBackPage = () => {
    window.history.back();
  };
  return (
    <header className={style.page_not_found}>
      <div>
        <img src={img404} alt="img not found page" />
      </div>
      <span>PAGE NOT FOUND</span>
      <div className={style.page_not_found_back}>
        <button onClick={() => handleBackPage()}>Go Back</button>
      </div>
    </header>
  );
};

export default NotFound;
