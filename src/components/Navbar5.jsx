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
        <Link to="/AnalysisIntro">機台解析</Link>
        <Link to="/AnalysisIntro/machineview">雷射機台解析</Link>
        <Link to="/AnalysisIntro/StorageView">倉儲機台解析</Link>
      </div>
    </nav>
  );
}

export default Navbar4;
