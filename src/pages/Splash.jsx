import React from "react";
import { Link } from "react-router-dom";
import "../styles/Splash.css";

export default function Splash() {
  return (
    <div className="splash-background">
      <Link to="/swirl">
        <button className="enter-button">點擊這裡進入雷射世界</button>
      </Link>
    </div>
  );
}
