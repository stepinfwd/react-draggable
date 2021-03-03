import React from "react";
import logo from "../../components/images/logo.png";
import magnifier from "../../components/images/mag.svg";

function Header() {
  return (
    <div className="header">
      <a to="/">
        <img className="header__icon" src={logo} alt="" />
      </a>

      <div className="header__center">
        <input type="text" />
        <img alt="" src={magnifier} />
      </div>

      <div className="header__right">
        <div className="header__admin__image"></div>
        <p>Super Admin</p>
      </div>
    </div>
  );
}

export default Header;
