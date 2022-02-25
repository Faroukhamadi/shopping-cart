import React from 'react';
import shoe from "../images/air-force-'07.png";
import cart from '../images/cart.png';
import arrow from '../images/arrow.png';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const navigate = useNavigate();
  return (
    <div className="prod">
      <img className="prod-pic" src={props.item.source} alt="shoe" />
      <div className="prod-info">
        <div className="container1">
          <h2 className="prod-desc">{props.item.name}</h2>
          <h2 className="prod-price">${props.item.price}.00</h2>
          <button className="prod-buy">
            <img src={cart} alt="cart" /> ADD TO CART
          </button>
          <div className="prod-count">
            <button
              onClick={() => {
                let info = [...props.info];
                let item = { ...info[props.item.index] };
                if (item.count > 0) {
                  item.count = item.count - 1;
                  info[props.item.index] = item;
                  props.setInfo(info);
                  props.setItemCount(props.itemCount - 1);
                  props.setTotal(props.total - props.item.price);
                } else {
                  item.count = item.count;
                }
              }}
            >
              -
            </button>
            <p>{props.item.count}</p>
            <button
              onClick={() => {
                let info = [...props.info];
                let item = { ...info[props.item.index] };
                item.count = item.count + 1;
                info[props.item.index] = item;
                props.setInfo(info);
                props.setItemCount(props.itemCount + 1);
                props.setTotal(props.total + props.item.price);
                if (
                  props.cart.find(
                    (element) => element.name === props.item.name
                  ) === undefined
                ) {
                  props.setCart([...props.cart, props.item]);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="container2">
          <h2
            className="prod-back"
            onClick={() => navigate('/shop', { replace: true })}
          >
            <img src={arrow} alt="arrow" />
            BACK
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
