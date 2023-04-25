import './css/Login.css'
import React from 'react';

const Login = () => {
    const handleClick = () => {
        window.location.href = 'http://localhost:8888/login';
    };  

  return (
    <div id="login">
      <h1>Take the first step of putting your friends on to new music by linking your Spotify account.</h1>
      <button onClick={handleClick} className="btn spotify-login-btn">
        Log in with Spotify
      </button>
    </div>
  );
};

export default Login;