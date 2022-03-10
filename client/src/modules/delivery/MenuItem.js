import React from "react";
import burger from "../../media/img/burger.png";
import { MenuItemContainer, MenuItemHeader, MenuItemInfo } from "./styles";

const MenuItem = () => {
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
        <div className="menu-item__btn">+</div>
      </MenuItemInfo>
      <div className="menu-item__img">
        <img src={burger} alt="burger" />
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;
