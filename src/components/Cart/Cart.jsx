import React, { useRef, useState, useEffect } from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { ReactComponent as Bowl } from "../../resources/bowl.svg";
import Lottie from "react-lottie";
import animationData from "../../resources/success-lottie.json";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const [success, setSuccess] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const address = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (address.current.value && items.length !== 0) {
      setSuccess(true);
      setTimeout(() => {
        address.current.value = "";
        dispatch(cartActions.fulfillOrder());
        setSuccess(false);
      }, 1500);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <input type="checkbox" className="cart__checkbox" id="cart-toggle" />

      <label for="cart-toggle" className="cart__button">
        {quantity !== 0 && (
          <span className="cart__button-number">{quantity}</span>
        )}
        <span className="cart__hamburger">&nbsp;</span>
      </label>
      <div className="cart">
        {success && (
          <div className="cart__success">
            <Lottie options={defaultOptions} width={200} height={200} />
          </div>
        )}
        <div className="cart__content">
          <h2 className="heading-2 cart__heading">My order</h2>
          <div className="cart__items">
            {items.length !== 0 ? (
              items.map((product) => (
                <>
                  <CartItem
                    item={{
                      key: product.itemId,
                      id: product.itemId,
                      name: product.name,
                      quantity: product.quantity,
                      total: product.totalPrice,
                      price: product.price,
                    }}
                  />
                  <div></div>
                </>
              ))
            ) : (
              <div className="cart__placeholder">
                <Bowl />
                Looks like your bowl is empty.
              </div>
            )}
          </div>
          <div className="cart__divider">&nbsp;</div>
          <div className="cart__form">
            <form action="" className="form" onSubmit={submitHandler}>
              <label htmlFor="" className="form__label">
                Address
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="e.g. 123 Sesame Street, New York NY 11215"
                ref={address}
              />
              <button className="form__button btn" type="submit">
                <span>Order now</span>{" "}
                <span>
                  ${items.length !== 0 ? totalPrice.toFixed(2) : "0.00"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
