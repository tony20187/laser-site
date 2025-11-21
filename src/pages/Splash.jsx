import React from "react";
import { Link } from "react-router-dom";
import "../styles/Splash.css";

const Splash = () => {
  return (
    <div className="splash-background">
      {/* 右上角 雷射組藍色Logo */}
      <div className="logo-topright">
        <img src="./HWAGUO-LS.ico" alt="華谷雷射組" />
      </div>

      {/* 中央 華谷Logo */}
      <div className="logo-center">
        <img src="./華谷LOGO.png" alt="華谷電機 HWAGUO" />
      </div>

      {/* 進入按鈕 */}
      <Link to="/swirl" className="enter-button">
        點擊這裡進入雷射世界
      </Link>

      {/* 底部標語 */}
      <div className="slogan-wrap">
        <div className="slogan-zh">精密板金零件　加工板金　機械板金</div>
        <div className="slogan-en">You Name it, We’ll Produce it</div>
      </div>
    </div>
  );
};

export default Splash;
