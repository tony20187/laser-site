import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
       <img src="./HWAGUO-LS.png" alt="Logo" className="logo-img" />
        <span>華谷電機</span>
      </div>
      
        <div className="nav-links">
              <Link to="/Main">首頁</Link>
              <Link to="/laser">雷射介紹</Link>
              <Link to="/machine">機台介紹</Link>
              <Link to="/process">工作流程</Link>
              <Link to="/SheetMaterials">板材介紹</Link>
              <Link to="/team">團隊介紹</Link>
            
      </div>

 
          
    </nav>
  );
}

export default Navbar;
