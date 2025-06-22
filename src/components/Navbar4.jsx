// Navbar4.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar4() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./HWAGUO-LS.png" alt="Logo" className="logo-img" />
        華谷電機
      </div>
      <div className="nav-links">
        <Link to="/Main">首頁</Link>
        <Link to="/laser">認識雷射</Link>
        <Link to="/howlaser">何謂雷射</Link>
        <Link to="/cuttingcomparison">切割比較</Link>
        <Link to="/HowItWorks">雷射原理</Link>
        <Link to="/Applications">雷射應用</Link>
      </div>
    </nav>
  );
}

export default Navbar4;
