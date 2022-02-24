import React from 'react';
import shoe from "../images/air-force-'07.png";
import cart from '../images/cart.png';
import arrow from '../images/arrow.png';

const Product = (props) => {
  return (
    <div className="prod">
      <img className="prod-pic" src={shoe} alt="shoe" />
      <div className="prod-info">
        <div className="container1">
          <h2 className="prod-desc">Nike Air Force 1 '07 SE</h2>
          <h2 className="prod-price">$32.00</h2>
          <button className="prod-buy">
            <img src={cart} alt="cart" /> ADD TO CART
          </button>
        </div>
        <div className="container2">
          <h2 className="prod-back">
            <img src={arrow} alt="arrow" />
            BACK
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
