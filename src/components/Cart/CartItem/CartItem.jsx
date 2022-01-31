import React from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { DUMMY_DATA } from "../../../DUMMY_DATA";
import { UilPlus } from "@iconscout/react-unicons";
import { UilMinus } from "@iconscout/react-unicons";

const CartItem = (props) => {
  console.log(props);
  const { id, name, quantity, total, price } = props.item;
  const existingItem = DUMMY_DATA.find((item) => item.id === id);
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
    <div className="cart-item">
      <img src={existingItem.image} alt="" className="cart-item__img" />
      <div className="cart-item__body">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">${total.toFixed(2)}</div>
      </div>
      <div className="cart-item__ui">
        <button className="cart-item__button" onClick={itemDecreaseHandler}>
          <UilMinus size="12" color="#000" />
        </button>
        <span className="menu-item__number">{quantity}</span>
        <button className="cart-item__button" onClick={itemIncreaseHandler}>
          <UilPlus size="12" color="#000" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
