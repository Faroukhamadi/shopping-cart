import React from 'react';
import cart from '../images/cart.png';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">SHOZILLA STORE</h1>
      <h1 className="links link1">HOME</h1>
      <h1 className="links link2">SHOP</h1>
      <a href="#">
        <img src={cart} alt="cart" />
        <h1>1</h1>
      </a>
    </div>
  );
};

export default Header;
