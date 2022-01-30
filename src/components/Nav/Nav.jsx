import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <img
        src={require("../../resources/bowl-logo.png")}
        alt="logo"
        className="nav__logo"
      />
      <ul className="nav__items">
        <li className="nav__item">
          <a href="#">Discover</a>
        </li>
        <li className="nav__item">
          <a href="#">Search</a>
        </li>
        <li className="nav__item">
          <a href="#">Past orders</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
