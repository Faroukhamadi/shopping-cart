import React from 'react';
import cart from './cart.png';

const Header = () => {
  console.log(cart);

  return (
    <div className="header">
      <h1>SHOZILLA STORE</h1>
      <h1>HOME</h1>
      <h1>SHOP</h1>
      <a>
        <img src={cart} alt="really?" />
      </a>
    </div>
  );
};

export default Header;
