import React from "react";
import "./Nav.scss";
import { UilMapMarker, UilListUl, UilSearch } from "@iconscout/react-unicons";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">&nbsp;</div>
      <ul className="nav__items">
        <li className="nav__item">
          <a href="#" className="nav__link">
            <UilMapMarker size="24" className="nav__icon" />
            Discover
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <UilSearch size="24" className="nav__icon" />
            Search
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <UilListUl size="24" className="nav__icon" />
            Past orders
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
