import React, { useRef, useLayoutEffect } from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { DUMMY_DATA } from "../../../DUMMY_DATA";
import { UilPlus } from "@iconscout/react-unicons";
import { UilMinus } from "@iconscout/react-unicons";
import { gsap } from "gsap";

const CartItem = (props) => {
  const { id, name, quantity, total, price } = props.item;
  const existingItem = DUMMY_DATA.find((item) => item.id === id);
  const dispatch = useDispatch();

  const cartRef = useRef();
  const plusRef = useRef();
  const minusRef = useRef();

  useLayoutEffect(() => {
    const animation1 = gsap.from(cartRef.current, {
      scale: 0.9,
      opacity: 0,
      ease: "back.out",
    });

    return () => {
      animation1.kill();
    };
  }, []);

  const itemDecreaseHandler = () => {
    gsap.from(minusRef.current, { scale: 0.9, ease: "back.out" });
    if (quantity === 1) {
      gsap.to(cartRef.current, {
        duration: 0.2,
        scale: 0.9,
        opacity: 0,
        ease: "back.in",
        onComplete: () =>
          dispatch(
            cartActions.removeItemFromCart({
              id,
            })
          ),
      });
    } else {
      dispatch(
        cartActions.removeItemFromCart({
          id,
        })
      );
    }
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

  return (
    <div className="cart-item" ref={cartRef}>
      <img src={existingItem.image} alt="" className="cart-item__img" />
      <div className="cart-item__body">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">${total.toFixed(2)}</div>
      </div>
      <div className="cart-item__ui">
        <button
          className="cart-item__button"
          onClick={itemDecreaseHandler}
          ref={minusRef}
        >
          <UilMinus size="14" color="#000" />
        </button>
        <span className="menu-item__number">{quantity}</span>
        <button
          className="cart-item__button"
          onClick={itemIncreaseHandler}
          ref={plusRef}
        >
          <UilPlus size="14" color="#000" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
