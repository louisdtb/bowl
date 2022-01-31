import React, { useState } from "react";
import "./MenuItem.scss";
import { cartActions } from "../../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UilHeart } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { UilMinus } from "@iconscout/react-unicons";

const MenuItem = (props) => {
  const [liked, setLiked] = useState(false);

  const { name, price, id, desc, image } = props;
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const existingItem = items.find((item) => item.itemId === id);
  console.log(existingItem);

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
      <div
        className="menu-item__save"
        onClick={() => {
          setLiked(!liked);
        }}
      >
        {liked ? (
          <UilHeart size="24" color="#DB1846" />
        ) : (
          <UilHeart size="24" />
        )}
      </div>
      <div className="menu-item__content">
        <span>
          <div className="menu-item__name">{name}</div>
          <div className="menu-item__desc">{desc}</div>
        </span>
        <div className="menu-item__order">
          <span className="menu-item__price">${price}</span>
          <div className="menu-item__ui">
            <button className="menu-item__button" onClick={itemDecreaseHandler}>
              <UilMinus size="12" color="#ffffff" />
            </button>
            <span className="menu-item__number">
              {existingItem ? existingItem.quantity : 0}
            </span>
            <button className="menu-item__button" onClick={itemIncreaseHandler}>
              <UilPlus size="12" color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
