import React, { useState, useRef } from "react";

import "./MenuItem.scss";

import Spinner from "../../Spinner/Spinner";

import { cartActions } from "../../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UilHeart } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { UilMinus } from "@iconscout/react-unicons";
import { gsap } from "gsap";

const MenuItem = (props) => {
  const [liked, setLiked] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  console.log(isImageLoading);

  const { name, price, id, desc, image } = props;
  const items = useSelector((state) => state.cart.items);
  const existingItem = items.find((item) => item.itemId === id);

  const dispatch = useDispatch();

  const plusRef = useRef();
  const minusRef = useRef();

  const itemDecreaseHandler = () => {
    gsap.from(minusRef.current, { scale: 0.9, ease: "back.out" });
    dispatch(
      cartActions.removeItemFromCart({
        id,
      })
    );
  };

  const itemIncreaseHandler = () => {
    gsap.from(plusRef.current, { scale: 0.9, ease: "back.out" });
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name,
      })
    );
  };

  // ANIMATIONS

  const buttonAnimate = ({ currentTarget }) => {
    gsap.from(currentTarget, { scale: 0.9, ease: "back.out" });
  };

  return (
    <div className="menu-item">
      <div className="menu-item_image-wrapper">
        <div className={!isImageLoading && "d-none"}>
          <Spinner></Spinner>
        </div>
        <img
          src={image}
          onLoad={() => setIsImageLoading(false)}
          alt=""
          className={isImageLoading ? "d-none" : "menu-item__img"}
        />
      </div>
      <div
        className="menu-item__save"
        onClick={() => {
          setLiked(!liked);
        }}
      >
        <UilHeart
          size="24"
          color={liked ? "#DB1846" : ""}
          className="menu-item__icon"
          onClick={buttonAnimate}
        />
      </div>
      <div className="menu-item__content">
        <span>
          <div className="menu-item__name">{name}</div>
          <div className="menu-item__desc">{desc}</div>
        </span>
        <div className="menu-item__order">
          <span className="menu-item__price">${price}</span>
          <div className="menu-item__ui">
            <button
              className="menu-item__button"
              onClick={itemDecreaseHandler}
              ref={minusRef}
            >
              <UilMinus size="14" color="#ffffff" />
            </button>
            <span className="menu-item__number">
              {existingItem ? existingItem.quantity : 0}
            </span>
            <button
              className="menu-item__button"
              onClick={itemIncreaseHandler}
              ref={plusRef}
            >
              <UilPlus size="14" color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
