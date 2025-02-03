import React from "react";
import Feedback from "./Feedback";

import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/#">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      <div className="header-menu__additional-wrap">
        <div className="header-menu__additional">
          <Feedback />
        </div>
      </div>
    </div>
  );
};
export default Header;
