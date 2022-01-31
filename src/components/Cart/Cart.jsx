import React from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { ReactComponent as Bowl } from "../../resources/bowl.svg";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(items);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <input type="checkbox" className="cart__checkbox" id="cart-toggle" />

      <label for="cart-toggle" className="cart__button">
        <span className="cart__hamburger">&nbsp;</span>
      </label>
      <div className="cart">
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
    </>
  );
};

export default Cart;
