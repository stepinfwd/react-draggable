import React from "react";
import logo from "../../components/images/logo.png";
import logout from "../../components/images/logout.png";

import magnifier from "../../components/images/mag.js";

function Header() {
  return (
    <div className="header">
      <a to="/">
        <img className="header__icon" src={logo} alt="" />
      </a>

      <div className="header__center">
        <input type="text" placeholder="search" />
        <img alt="" src={magnifier} />
      </div>

      <div className="header__right">
        <div className="header__right__userdetails">
          <div className="header__admin__image"></div>
          <p>Super Admin</p>
        </div>
        <img className="header__icon__logout" src={logout} alt=""></img>
      </div>
    </div>
  );
}

export default Header;
