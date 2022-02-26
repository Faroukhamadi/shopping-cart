import React from 'react';
import { useNavigate } from 'react-router-dom';
import cart from '../images/cart.png';

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="logo">SHOZILLA STORE</h1>
      <h1
        className="links link1"
        onClick={() => navigate('/', { replace: true })}
      >
        HOME
      </h1>
      <h1
        className="links link2"
        onClick={() => navigate('/shop', { replace: true })}
      >
        SHOP
      </h1>
      <a
        style={{
          cursor: 'pointer',
        }}
        onClick={() => navigate('/checkout', { replace: true })}
      >
        <img src={cart} alt="cart" />
        <h1>{props.itemCount}</h1>
      </a>
    </div>
  );
};

export default Header;
