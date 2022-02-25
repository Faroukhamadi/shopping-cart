import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Product from './components/Product';
import React, { useState } from 'react';
import Products from './components/Products';
import airForceO7 from "./images/air-force-'07.png";
import airForceAla from './images/air-force-ala.png';
import airForceGore from './images/air-force-GORE-TEX.png';
import airMax1 from './images/air-max1.png';
import airMax2 from './images/air-max2.png';
import airMax3 from './images/air-max3.png';
import amine from './images/amine.png';
import courtVisionLo from './images/court-vision-lo.png';
import momo from './images/momo.png';
import sport from './images/sport.png';
import Home from './components/Home';
import Checkout from './components/Checkout';

const App = () => {
  const [info, setInfo] = useState([
    {
      name: "Nike Air Force 1 '07 SE",
      price: 40,
      index: 0,
      source: airForceO7,
      count: 0,
    },
    {
      name: 'Nike Air Force Ala',
      price: 69,
      index: 1,
      source: airForceAla,
      count: 0,
    },
    {
      name: 'Nike Air Force GORE',
      price: 54,
      index: 2,
      source: airForceGore,
      count: 0,
    },
    {
      name: 'Nike Air Max Fama200',
      price: 19,
      index: 3,
      source: airMax1,
      count: 0,
    },
    {
      name: 'Nike Air Max 2',
      price: 10,
      index: 4,
      source: airMax2,
      count: 0,
    },
    {
      name: 'Nike Air Max Centre Ville',
      price: 25,
      index: 5,
      source: airMax3,
      count: 0,
    },
    {
      name: 'Nike Air Jordan Amine',
      price: 70,
      index: 6,
      source: amine,
      count: 0,
    },
    {
      name: 'Nike Court Vision',
      price: 55,
      index: 7,
      source: courtVisionLo,
      count: 0,
    },
    {
      name: 'Nike Air Force MOMO',
      price: 43,
      index: 8,
      source: momo,
      count: 0,
    },
    {
      name: 'Nike Air Max 3',
      price: 45,
      index: 9,
      source: sport,
      count: 0,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const RouteLinks = info.map((item, index) => (
    <Route
      path={`${item.index}`}
      element={
        <Product
          item={item}
          setInfo={setInfo}
          info={info}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          itemCount={itemCount}
          setItemCount={setItemCount}
        />
      }
    />
  ));

  return (
    <div className="app">
      <BrowserRouter>
        <Header itemCount={itemCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Main info={info} />} />
          <Route
            path="/checkout"
            element={<Checkout total={total} cart={cart} info={info} />}
          />
          {RouteLinks}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
