import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Splash.css';

const Splash = () => {
  return (
    <div className="splash-background">
      <div className="logo-container">
        <img src="./HWAGUO-LS.png" alt="HWAGUO Logo" className="logo-image" />
      </div>
      <Link to="/swirl">
        <button className="enter-button">點擊這裡進入雷射世界</button>
      </Link>
    </div>
  );
}

export default Splash;
