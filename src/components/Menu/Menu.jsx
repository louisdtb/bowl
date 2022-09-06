import React from "react";
import "./Menu.scss";
import MenuItem from "./MenuItem/MenuItem";
import { DUMMY_DATA } from "../../DUMMY_DATA";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="heading-1 menu__heading">Delicious Asian food to order</h1>
      <div className="menu__grid">
        {DUMMY_DATA.map((item, index) => (
          <MenuItem
            id={item.id}
            key={"menu_grid-" + index}
            image={item.image}
            name={item.name}
            price={item.price}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
