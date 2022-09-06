import React from "react";
import "./Nav.scss";
import { UilMapMarker, UilListUl, UilSearch } from "@iconscout/react-unicons";
import { ReactComponent as BowlLogo } from "../../resources/bowl-logo.svg";
import { ReactComponent as BowlLogoMobile } from "../../resources/bowl-logo--mobile.svg";

const Nav = () => {
  return (
    <div className="nav">
      <BowlLogo className="nav__logo"></BowlLogo>
      <BowlLogoMobile className="nav__logo--mobile"></BowlLogoMobile>
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
