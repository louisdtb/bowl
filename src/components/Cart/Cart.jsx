import React from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import img1 from "../../resources/meal-1.jpeg";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(items);

  return (
    <div className="cart">
      <h2 className="heading-2 cart__heading">My order</h2>
      <div className="cart__items">
        {items.map((product) => (
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
        ))}
        <div>${items.length !== 0 ? totalPrice.toFixed(2) : "0.00"}</div>
      </div>
      <div className="cart__divider">&nbsp;</div>
      <div className="cart__form">
        <form action="" className="form">
          <label htmlFor="" className="form__label">
            Address
          </label>
          <input type="text" className="form__input" />
          <label htmlFor="" className="form__label">
            Zip
          </label>
          <input type="text" className="form__input" />
          <label htmlFor="" className="form__label">
            Delivery time
          </label>
          <input type="text" className="form__input" />
          <button className="form__button btn">Order now</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
