import React from 'react';

export const CartContext = React.createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart'))?.items || []);

  const getCartTotalPrice = () => {
    return cart.reduce((prev, cur) => prev + cur.count * cur.price, 0);
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

  const removeFromCart = item => {
    const position = cart.findIndex(cartItem => cartItem.name === item.name);

    if (position >= 0) {
      if (item.count === 1) {
        setCart([...cart.slice(0, position), ...cart.slice(position + 1)]);
      } else {
        setCart([
          ...cart.slice(0, position),
          { ...item, count: item.count - 1 },
          ...cart.slice(position + 1),
        ]);
      }
    }
  };

  const addToCart = toAddItem => {
    const item = cart.find(cartItem => cartItem.name === 'Hamburger');

    if (item) {
      removeFromCart(item);
      setCart([
        {
          ...item,
          count: item.count + 1,
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
