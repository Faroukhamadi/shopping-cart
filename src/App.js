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

const App = () => {
  const [info, setInfo] = useState([
    {
      name: "Nike Air Force 1 '07 SE",
      price: 40,
      index: 0,
      source: airForceO7,
    },
    {
      name: 'Nike Air Force Ala',
      price: 69,
      index: 1,
      source: airForceAla,
    },
    {
      name: 'Nike Air Force GORE',
      price: 54,
      index: 2,
      source: airForceGore,
    },
    {
      name: 'Nike Air Max Fama200',
      price: 19,
      index: 3,
      source: airMax1,
    },
    {
      name: 'Nike Air Max 2',
      price: 10,
      index: 4,
      source: airMax2,
    },
    {
      name: 'Nike Air Max Centre Ville',
      price: 25,
      index: 5,
      source: airMax3,
    },
    {
      name: 'Nike Air Jordan Amine',
      price: 70,
      index: 6,
      source: amine,
    },
    {
      name: 'Nike Court Vision',
      price: 55,
      index: 7,
      source: courtVisionLo,
    },
    {
      name: 'Nike Air Force MOMO',
      price: 43,
      index: 8,
      source: momo,
    },
    {
      name: 'Nike Air Max 3',
      price: 45,
      index: 9,
      source: sport,
    },
  ]);

  const RouteLinks = info.map((item, index) => (
    <Route path={`${item.index}`} element={<Product item={item} />} />
  ));

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Main info={info} />} />
          {RouteLinks}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
{
  /* 
//   return (
//     <div className="main">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/shop" element={<Products info={info} />} />
//           {RouteLinks}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Main; */
}
