import React, { useRef, useState, useLayoutEffect } from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { ReactComponent as Bowl } from "../../resources/bowl.svg";
import Lottie from "react-lottie";
import animationData from "../../resources/success-lottie.json";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { gsap } from "gsap";

const Cart = () => {
  // STATE MANAGEMENT
  const [success, setSuccess] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  // REFS
  const address = useRef();
  const placeholderRef = useRef();
  const badgeRef = useRef();

  // FUNCTIONS
  useLayoutEffect(() => {
    const animation1 = gsap.from(placeholderRef.current, {
      scale: 0.9,
      opacity: 0,
      ease: "back.out",
    });
    const animation2 = gsap.from(badgeRef.current, {
      scale: 0.5,
      opacity: 0,
      ease: "back.out",
    });

    return () => {
      animation1.kill();
      animation2.kill();
    };
  }, [quantity]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (address.current.value && items.length !== 0) {
      setSuccess(true);
      setTimeout(() => {
        address.current.value = "";
        dispatch(cartActions.fulfillOrder());
        setSuccess(false);
      }, 1500);
    } else if (!address.current.value && items.length !== 0) {
      alert("Please enter an address.");
    } else if (address.current.value && items.length === 0) {
      alert("Please add an item to cart.");
    } else if (!address.current.value && items.length === 0) {
      alert("Please add an item to cart and a valid address.");
    }
  };

  // ANIMATIONS
  const buttonAnimate = ({ currentTarget }) => {
    gsap.from(currentTarget, { scale: 0.8, ease: "back.out" });
  };

  // LOTTIE SETTINGS
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
          <span className="cart__button-number" ref={badgeRef}>
            {quantity}
          </span>
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
                      id: product.itemId,
                      name: product.name,
                      quantity: product.quantity,
                      total: product.totalPrice,
                      price: product.price,
                    }}
                    key={product.itemId}
                  />
                  <div></div>
                </>
              ))
            ) : (
              <div className="cart__placeholder" ref={placeholderRef}>
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
              <button
                className="form__button btn"
                type="submit"
                onClick={buttonAnimate}
              >
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
