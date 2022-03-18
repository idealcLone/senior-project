import React, { useContext } from "react";
import { CartContainer } from "./styles";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useHistory } from "react-router";

const Cart = () => {
  const [getCartItems, , , getCartTotalPrice] = useContext(CartContext);
  const cart = getCartItems();
  const totalPrice = getCartTotalPrice();
  const history = useHistory();

  const handleCheckoutClick = () => {
    history.push("/delivery/checkout");
  };

  return (
    <CartContainer>
      <div className="total-price">
        <i className="fa-solid fa-cart-shopping" /> {totalPrice} KZT
      </div>
      <div className="cart__body">
        {cart.map((cartItem) => (
          <div className="cart-item">
            <div className="cart-item__info">
              <div className="cart-item__title">{`${cartItem.name} - ${cartItem.count}`}</div>
              <div className="cart-item__price">{`${cartItem.price} KZT`}</div>
            </div>
            <div className="cart-item__controls">
              <div className="cart-item__btn">+</div>
              <div className="cart-item__btn">-</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__button" onClick={handleCheckoutClick}>
        Checkout
      </div>
    </CartContainer>
  );
};

export default Cart;
