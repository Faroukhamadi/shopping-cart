import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // onClick={() => navigate(`/${product.index}`, { replace: true })}

  return (
    <div className="home">
      <h1>Welcome To SHOZILLA</h1>
      <button onClick={() => navigate('/shop', { replace: true })}>
        GO SHOPPING
      </button>
    </div>
  );
};

export default Home;
