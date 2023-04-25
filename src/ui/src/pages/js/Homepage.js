import React from 'react';
import '../css/Homepage.css'
import Login from '../../components/Login';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 class="animated-heading">Welcome to My Website</h1>
      <Login/>
    </div>
  );
};

export default Homepage;
