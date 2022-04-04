import React from 'react';
import { IFood } from '../types';

export const CartContext = React.createContext(undefined);

type PropsType = {
  children: React.ReactElement;
};

export const CartProvider: React.FC<PropsType> = ({ children }) => {
  const cartItems = localStorage.getItem('cart');
  const [cart, setCart] = React.useState<IFood[]>(cartItems ? JSON.parse(cartItems).items : []);

  const getCartTotalPrice = (): number => {
    return cart.reduce((prev, cur) => prev + cur.count! * cur.price, 0);
  };

  React.useEffect(() => {
    localStorage.setItem(
      'cart',
      JSON.stringify({
        items: cart,
        totalPrice: getCartTotalPrice(),
      })
    );
  }, [cart]);

  const getCartItems = () => {
    return cart;
  };

  const removeFromCart = (item: IFood) => {
    const position = cart.findIndex(cartItem => cartItem.name === item.name);

    if (position >= 0) {
      if (item.count === 1) {
        setCart([...cart.slice(0, position), ...cart.slice(position + 1)]);
      } else {
        setCart([
          ...cart.slice(0, position),
          { ...item, count: item.count! - 1 },
          ...cart.slice(position + 1),
        ]);
      }
    }
  };

  const addToCart = (toAddItem: IFood) => {
    const item = cart.find(cartItem => cartItem.name === 'Hamburger');

    if (item) {
      removeFromCart(item);
      setCart([
        {
          ...item,
          count: item.count ? item.count + 1 : 1,
        },
      ]);
    } else {
      setCart([...cart, toAddItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={[getCartItems, addToCart, removeFromCart, getCartTotalPrice, clearCart]}
    >
      {children}
    </CartContext.Provider>
  );
};
