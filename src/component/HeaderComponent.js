import React from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";

const HeaderComponent = () => {
  return (
    <>
      <section className="header">
        <div>
          <img src={logo} alt="" className="header_logo" />
        </div>
        <div>
          <img src={menu} alt="" className="header_menu" />
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
