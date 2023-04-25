import React from 'react';

const LoggedIn = () => {
  const handleClick = () => {
    window.location.href = '/loggedin';
  };

  return (
    <div id="loggedIn">
      <h1>YOU ARE AUTHORIZED !!!</h1>
      <button onClick={handleClick} className="btn btn-primary">
        Log in with Spotify
      </button>
    </div>
  );
};

export default LoggedIn;