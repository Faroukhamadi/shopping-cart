import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = (props) => {
  const cart = props.cart.map((item) => (
    <div className="checkout">
      <img src={item.source} alt="pic" className="checkout-pic" />
      <h2 className="checkout-desc">{item.name}</h2>
      <h2 className="checkout-price">
        ${item.price}.00 *{props.info[item.index].count}
      </h2>
    </div>
  ));

  const navigate = useNavigate();

  return (
    <div className="container69">
      <h2 className="checkout-amount">Total Amount: ${props.total}.00</h2>
      <button onClick={() => navigate('/purchase', { replace: true })}>
        Complete Order
      </button>
      {cart}
    </div>
  );
};

export default Checkout;
