import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1
        style={{
          cursor: 'default',
        }}
      >
        WELCOME TO SHOZILLA
      </h1>
      <button onClick={() => navigate('/shop', { replace: true })}>
        GO SHOPPING
      </button>
    </div>
  );
};

export default Home;
