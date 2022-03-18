import React from "react";
import { CheckoutContainer } from "./styles";

const initialState = {
  block: "",
  room: "",
  comment: "",
  error: "",
};

const blocks = [11, 19, 20, 21, 22, 23, 24, 25, 26, 27];

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const items = cart?.items || [];
  const totalPrice = cart?.totalPrice || 0;

  const [info, setInfo] = React.useState(initialState);

  const handleCheckoutClick = (e) => {
    e.preventDefault();

    if (
      info.room < 200 ||
      (info.block >= 22 && info.room % 100 > 28) ||
      ([11, 19, 20, 21].includes(info.block) && info.room % 100 > 10) ||
      info.room / 100 > 12
    ) {
      setInfo({
        ...info,
        error: "Invalid room number",
      });
    } else {
      setInfo(initialState);
      localStorage.removeItem("cart");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (
      (name === "block" && +value > 100) ||
      (name === "room" && +value > 10000)
    ) {
      return;
    }

    setInfo({
      ...info,
      error: "",
      [name]: value,
    });
  };

  return (
    <div className="container">
      <CheckoutContainer>
        <div className="order">
          <div>Order Information:</div>
          {items.map((cartItem) => (
            <div className="order__item">
              <div>{`${cartItem.name} - ${cartItem.count}`}</div>
              <div>{`${cartItem.count * cartItem.price} KZT`}</div>
            </div>
          ))}
          <hr />
          <div className="order__item">
            <div>Total</div>
            <div>{`${totalPrice} KZT`}</div>
          </div>
        </div>
        <form className="address">
          <div className="address__heading">Delivery address</div>
          <div className="form-control">
            <label htmlFor="block">Block number </label>
            <select
              name="block"
              id="block"
              value={info.block}
              onChange={handleInputChange}
            >
              {blocks.map((block) => (
                <option key={block} value={block}>
                  {block}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="room">Room number </label>
            <input
              type="number"
              name="room"
              id="room"
              value={info.room}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="comment">Comment </label>
            <textarea
              id="comment"
              name="comment"
              value={info.comment}
              onChange={handleInputChange}
            />
          </div>
          {info.error && <div id="error">{info.error}</div>}
          <button
            type="submit"
            className="order__btn"
            onClick={handleCheckoutClick}
          >
            Checkout the order
          </button>
        </form>
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;
