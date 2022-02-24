import React, { useState } from 'react';
import Products from './Products';
import { BrowserRouter } from 'react-router-dom';
import airForceO7 from "../images/air-force-'07.png";
import airForceAla from '../images/air-force-ala.png';
import airForceGore from '../images/air-force-GORE-TEX.png';
import airMax1 from '../images/air-max1.png';
import airMax2 from '../images/air-max2.png';
import airMax3 from '../images/air-max3.png';
import amine from '../images/amine.png';
import courtVisionLo from '../images/court-vision-lo.png';
import momo from '../images/momo.png';
import sport from '../images/sport.png';

const Main = (props) => {
  return (
    <div className="main">
      <Products info={props.info} />
    </div>
  );
};

export default Main;
