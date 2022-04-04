import React, { useContext } from 'react';
import { CartContainer } from './styles';
import { CartContext } from './CartContext';
import { useHistory } from 'react-router';

const Cart = () => {
  const [getCartItems, addToCart, removeFromCart, getCartTotalPrice] = useContext(CartContext);
  const cart = getCartItems();
  const totalPrice = getCartTotalPrice();
  const history = useHistory();

  const handleCheckoutClick = () => {
    history.push('/delivery/checkout');
  };

  const handleAddClick = item => {
    addToCart(item);
  };

  const handleRemoveClick = item => {
    removeFromCart(item);
  };

  return (
    <CartContainer>
      <div className="total-price">
        <i className="fa-solid fa-cart-shopping" /> {totalPrice} KZT
      </div>
      <div className="cart__body">
        {cart.map(cartItem => (
          <div key={cartItem.name} className="cart-item">
            <div className="cart-item__info">
              <div className="cart-item__title">{`${cartItem.name} - ${cartItem.count}`}</div>
              <div className="cart-item__price">{`${cartItem.price} KZT`}</div>
            </div>
            <div className="cart-item__controls">
              <div className="cart-item__btn" onClick={() => handleAddClick(cartItem)}>
                +
              </div>
              <div className="cart-item__btn" onClick={() => handleRemoveClick(cartItem)}>
                -
              </div>
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
