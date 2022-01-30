import React from "react";
import "./Menu.scss";
import MenuItem from "./MenuItem/MenuItem";
import img from "../../resources/meal-1.jpeg";
import { DUMMY_DATA } from "../../DUMMY_DATA";
import { useSelector } from "react-redux";

const Menu = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <div className="menu">
      <h1 className="heading-1">Delicious Asian food to order</h1>
      <div className="menu__grid">
        {DUMMY_DATA.map((item) => (
          <MenuItem
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            desc={item.description}
            quantity={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
