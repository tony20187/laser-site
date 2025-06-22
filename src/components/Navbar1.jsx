import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar1() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./HWAGUO-LS.png" alt="Logo" className="logo-img" />
        華谷電機
      </div>
      <div className="nav-links">
        <Link to="/Main">首頁</Link>
        <Link to="/process">工作流程</Link>
        <Link to="/step1">步驟一</Link>
        <Link to="/step2">步驟二</Link>
        <Link to="/step3">步驟三</Link>
        <Link to="/step4">步驟四</Link>
      </div>
    </nav>
  );
}

export default Navbar1;
