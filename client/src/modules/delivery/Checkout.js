import React from "react";
import { CheckoutContainer } from "./styles";

const Checkout = () => {
  return (
    <div className="container">
      <CheckoutContainer>
        <div className="order">
          <div>Order Information:</div>
          <div className="order__list">
            <div className="order__item">
              <div>Pizza Margarita - 1</div>
              <div>2000 KZT</div>
            </div>
            <div className="order__item">
              <div>Pepsi 2L - 1 </div>
              <div>1200 KZT</div>
            </div>
            <div className="order__item">
              <div>Delivery</div>
              <div>300 KZT</div>
            </div>
          </div>
          <div className="order__item">
            <div>Total</div>
            <div>3500 KZT</div>
          </div>
        </div>
        <form className="address">
          <div className="address__heading">Delivery address</div>
          <div className="form-control">
            <label htmlFor="block">Your block number </label>
            <input type="text" name="block" id="block" />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room number </label>
            <input type="text" name="room" id="room" />
          </div>
          <div className="form-control">
            <label htmlFor="comment">Comment </label>
            <textarea id="comment" />
          </div>
          <button type="submit" className="order__btn">
            Checkout the order
          </button>
        </form>
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;
