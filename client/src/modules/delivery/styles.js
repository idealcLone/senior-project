import styled from 'styled-components';

export const CafeContainer = styled.div`
  padding-top: 90px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .cafe__menu {
    margin-bottom: 50px;
    display: flex;
    gap: 50px;
  }
`;

export const CafeHeader = styled.div`
  margin-bottom: 100px;
`;

export const CafeTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 90px;
  text-transform: uppercase;
`;

export const CafeContacts = styled.div`
  display: flex;
  gap: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 37px;
`;

export const CafeFilters = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 53px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  .active {
    background: gray;
  }
`;

export const CafeFilter = styled.div`
  height: 44px;
  border: 1px solid black;
  padding: 7px 14px;
  border-radius: 11px;
  cursor: pointer;
`;

export const MenuItemContainer = styled.div`
  width: 350px;
  background: white;

  .menu-item__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;

    img {
      width: 100%;
      height: 460px;
      border: 1px solid #000000;
      border-top: none;
      object-fit: cover;
    }
  }
`;

export const MenuItemInfo = styled.div`
  border: 1px solid #000000;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .menu-item__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #857f7f;
    width: 90%;
  }

  .menu-item__btn {
    background: #c5bbbb;
    width: 36px;
    height: 36px;
    border-radius: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
`;
export const MenuItemHeader = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 33px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 78vh;

  .total-price {
    width: 150px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    margin-bottom: 40px;
  }

  .cart__body {
    width: 300px;
    background: rgba(43, 103, 119, 0.6);
    flex: 1;
    border-radius: 25px;
    padding: 30px 15px;
    margin-bottom: 20px;
  }

  .cart-item__info {
    display: flex;
    gap: 40px;
    color: #fff;
  }

  .cart-item__controls {
    display: flex;
    gap: 20px;
    margin: 8px 0;
  }

  .cart-item__btn {
    width: 25px;
    height: 25px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .cart__button {
    width: 300px;
    height: 40px;
    background: rgba(43, 103, 119, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    color: #fff;

    a {
      color: #fff;
    }
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  margin: 90px 200px;
  justify-content: space-between;

  .order {
    width: 320px;
    background: rgba(43, 103, 119, 0.6);
    padding: 15px 10px;
    border-radius: 20px;
    align-self: flex-start;
    color: #fff;

    > div:first-child {
      margin-bottom: 20px;
    }
  }

  .order__item {
    display: flex;
    justify-content: space-between;
  }

  hr {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .order__list {
    margin-top: 16px;
    margin-bottom: 10px;
  }

  .address {
    width: 400px;
    background: rgba(43, 103, 119, 0.6);
    padding: 15px 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    color: #fff;
    margin-bottom: 50px;
  }

  .address__heading {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    margin-top: 25px;
  }

  .form-control {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;

    input,
    textarea,
    select {
      margin: 10px 0px;
      width: 100%;
      border-radius: 25px;
      padding: 10px;
      border: none;
    }
    textarea {
      height: 90px;
    }
  }

  .order__btn {
    width: 50%;
    height: 40px;
    background: #fff;
    border-radius: 25px;
    cursor: pointer;
    border: none;
  }
`;
