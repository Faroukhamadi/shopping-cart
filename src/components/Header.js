import React from 'react';
import { useNavigate } from 'react-router-dom';
import cart from '../images/cart.png';

// onClick={() => navigate(`/${product.index}`, { replace: true })}

const Header = () => {
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
      <a href="#">
        <img src={cart} alt="cart" />
        <h1>1</h1>
      </a>
    </div>
  );
};

export default Header;
