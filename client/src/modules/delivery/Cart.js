import React from "react";
import { CartContainer } from "./styles";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <CartContainer>
      <div className="total-price">
        <i className="fa-solid fa-cart-shopping"></i> 3200 KZT
      </div>
      <div className="cart__body">
        <div className="cart-item">
          <div className="cart-item__info">
            <div className="cart-item__title">Pizza Margarita - 1</div>
            <div className="cart-item__price">2000 KZT</div>
          </div>
          <div className="cart-item__controls">
            <div className="cart-item__btn">+</div>
            <div className="cart-item__btn">-</div>
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item__info">
            <div className="cart-item__title">Pizza Margarita - 1</div>
            <div className="cart-item__price">2000 KZT</div>
          </div>
          <div className="cart-item__controls">
            <div className="cart-item__btn">+</div>
            <div className="cart-item__btn">-</div>
          </div>
        </div>
      </div>
      <div className="cart__button">
        <Link to="/delivery/checkout">Checkout</Link>
      </div>
    </CartContainer>
  );
};

export default Cart;
