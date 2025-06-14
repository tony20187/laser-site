import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainUI.css";


function MainUI() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // 稍微延遲讓 transition 有作用
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-ui-container">
      <div className="bee-logo" />

      <div className="menu-buttons">
        <button
          className={`menu-button ${animate ? "animate-laser" : ""}`}
          onClick={() => navigate("/laser")}
        >
          認識雷射
        </button>

        <button
          className={`menu-button ${animate ? "animate-machine" : ""}`}
          onClick={() => navigate("/machine")}
        >
          機台介紹
        </button>

        <button
          className={`menu-button ${animate ? "animate-process" : ""}`}
          onClick={() => navigate("/process")}
        >
          工作流程
        </button>



        <button
          className={`menu-button ${animate ? "animate-materials" : ""}`}
          onClick={() => navigate("/sheetmaterials")}
        >
          板材介紹
        </button>

        
        <button
          className={`menu-button ${animate ? "animate-team" : ""}`}
          onClick={() => navigate("/team")}
        >
          團隊介紹
        </button>

        
      </div>
    </div>
  );
}

export default MainUI;
