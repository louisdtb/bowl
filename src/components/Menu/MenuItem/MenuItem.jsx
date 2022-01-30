import React from "react";
import "./MenuItem.scss";
import { cartActions } from "../../../store/cart-slice";
import { useDispatch } from "react-redux";

const MenuItem = (props) => {
  const { name, price, id, quantity, desc, image } = props;
  const dispatch = useDispatch();

  const itemDecreaseHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id,
      })
    );
  };

  const itemIncreaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name,
      })
    );
  };

  return (
    <div className="menu-item">
      <img src={image} alt="" className="menu-item__img" />
      <div className="menu-item__save">&nbsp;</div>
      <div className="menu-item__content">
        <div className="menu-item__name">{name}</div>
        <div className="menu-item__desc">{desc}</div>
        <div className="menu-item__order">
          <span>${price}</span>
          <div className="menu-item__ui">
            <button className="menu-item__button" onClick={itemDecreaseHandler}>
              -
            </button>
            <span className="menu-item__number">{quantity}</span>
            <button className="menu-item__button" onClick={itemIncreaseHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
