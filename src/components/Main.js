import React, { useState } from 'react';
import Products from './Products';

const Main = (props) => {
  return (
    <div className="main">
      <Products info={props.info} />
    </div>
  );
};

export default Main;
