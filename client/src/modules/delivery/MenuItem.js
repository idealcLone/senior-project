import React from "react";
import burger from "../../media/img/burger.png";
import { MenuItemContainer, MenuItemHeader, MenuItemInfo } from "./styles";
import { CartContext } from "./CartContext";

const MenuItem = () => {
  const [getCartItems, addToCart] = React.useContext(CartContext);
  const cart = getCartItems();

  console.log(cart);

  const handleAddClick = () => {
    addToCart({
      name: "Hamburger",
      price: 1800,
      count: 1,
    });
  };

  return (
    <MenuItemContainer>
      <MenuItemInfo>
        <MenuItemHeader>
          <div className="menu-item__title">Hamburger</div>
          <div className="menu-item__price">1800 KZT</div>
        </MenuItemHeader>
        <div className="menu-item__desc">
          Medium beef burger with 100% charcoal beef, fresh vegetables with new
          teriyaki sauce.
        </div>
        <div className="menu-item__btn" onClick={handleAddClick}>
          +
        </div>
      </MenuItemInfo>
      <div className="menu-item__img">
        <img src={burger} alt="burger" />
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;
