import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar3 = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./HWAGUO-LS.png" alt="Logo" className="logo-img" />
        華谷電機
      </div>
      <div className="nav-links">
        <Link to="/main">首頁</Link>
        <Link to="/SheetMaterials">板材介紹</Link>
        <Link to="/spcc">PO酸洗版</Link>
        <Link to="/al">AL鋁板</Link>
        <Link to="/sus304">SUS304</Link>
        <Link to="/sus430">SUS430</Link>
        <Link to="/secc">SECC鍍鋅板</Link>
        <Link to="/sgcc">SGCC鍍錏板</Link>
      </div>
    </nav>
  );
};

export default Navbar3;
