import React from 'react';

import { MenuItemContainer, MenuItemHeader, MenuItemInfo } from './styles';
import { CartContext } from './CartContext';

const MenuItem = ({ food }) => {
  const [, addToCart] = React.useContext(CartContext);

  const handleAddClick = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      count: 1,
    });
  };

  return (
    <MenuItemContainer>
      <MenuItemInfo>
        <MenuItemHeader>
          <div className="menu-item__title">{food.name}</div>
          <div className="menu-item__price">{food.price} KZT</div>
        </MenuItemHeader>
        <div className="menu-item__desc">{food.description}</div>
        <div className="menu-item__btn" onClick={handleAddClick}>
          +
        </div>
      </MenuItemInfo>
      <div className="menu-item__img">
        <img src={food.image} alt="" />
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;
