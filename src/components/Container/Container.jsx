import React from "react";
import "./Container.scss";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

const Container = () => {
  return (
    <div className="container">
      <Nav />
      <Menu />
      <Cart />
    </div>
  );
};

export default Container;
