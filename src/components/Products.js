import React from 'react';
import shoe from "../images/air-force-'07.png";
import { BrowserRouter, Route } from 'react-router-dom';

const Products = (props) => {
  const articles = props.info.map((product) => (
    <div className="product">
      <img className="product-pic" src={product.source} alt="item" />
      <div className="product-info">
        <h2 className="product-desc">{product.name}</h2>
        <h2 className="product-price">${product.price}.00</h2>
      </div>
    </div>
  ));

  return <>{articles}</>;
};

export default Products;
