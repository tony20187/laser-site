import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // 共用樣式

function Navbar2() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./HWAGUO-LS.png" alt="Logo" className="logo-img" />
        華谷電機
      </div>
      <div className="nav-links">
        <Link to="/Main">首頁</Link>
        <Link to="/machine">機台介紹</Link>
        <Link to="/machine/1">雷射機台</Link>
        <Link to="/machine/2">倉儲機台</Link>
      </div>
    </nav>
  );
}

export default Navbar2;
