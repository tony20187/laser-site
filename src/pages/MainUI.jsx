import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainUI.css";

function MainUI() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [synth] = useState(window.speechSynthesis);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const speak = (text) => {
    stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-TW";
    synth.speak(utter);
  };

  const stop = () => {
    synth.cancel();
  };

  return (
    <div className="main-ui-container">
      <div className="bg-image-1"></div>
      <div className="bg-image-2"></div>
      <div className="bee-logo" />

      <div className="menu-buttons">
        <button
          className={`menu-button ${animate ? "animate-laser" : ""}`}
          onMouseEnter={() => speak("認識雷射")}
          onMouseLeave={stop}
          onClick={() => navigate("/laser")}
        >
          認識雷射
        </button>

        <button
          className={`menu-button ${animate ? "animate-machine" : ""}`}
          onMouseEnter={() => speak("機台介紹")}
          onMouseLeave={stop}
          onClick={() => navigate("/machine")}
        >
          機台介紹
        </button>

        <button
          className={`menu-button ${animate ? "animate-process" : ""}`}
          onMouseEnter={() => speak("工作流程")}
          onMouseLeave={stop}
          onClick={() => navigate("/process")}
        >
          工作流程
        </button>

        <button
          className={`menu-button ${animate ? "animate-materials" : ""}`}
          onMouseEnter={() => speak("板材介紹")}
          onMouseLeave={stop}
          onClick={() => navigate("/sheetmaterials")}
        >
          板材介紹
        </button>

        <button
          className={`menu-button ${animate ? "animate-team" : ""}`}
          onMouseEnter={() => speak("團隊介紹")}
          onMouseLeave={stop}
          onClick={() => navigate("/team")}
        >
          團隊介紹
        </button>

        <button
          className={`menu-button ${animate ? "animate-quiz" : ""}`}
          onMouseEnter={() => speak("問答遊戲")}
          onMouseLeave={stop}
          onClick={() => navigate("/quiz")}
        >
          問答遊戲
        </button>
      </div>
    </div>
  );
}

export default MainUI;
