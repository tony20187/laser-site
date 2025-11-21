// src/pages/AnalysisIntro.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/AnalysisIntro.css";

// 兩個主題卡片
const modules = [
  {
    id: "machineview",
    name: "AMADA 雷射機台部位解析",
    image: "./9000w-view-new.png"
  },
  {
    id: "StorageView",
    name: "AMADA 自動倉儲系統解析（AS / LST / ASF）",
    image: "./ASF-NEW-123.png"
  }
];

function AnalysisIntro() {
  const navigate = useNavigate();
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // ⭕進頁面就播放 TTS
  useEffect(() => {
    playSpeech("請點擊上方圖案進入介紹");
    return stopSpeech;
  }, []);

  const playSpeech = (text) => {
    stopSpeech();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-TW";
    utter.rate = 1;
    synthRef.current.speak(utter);
    utteranceRef.current = utter;
  };

  const stopSpeech = () => {
    if (synthRef.current.speaking) synthRef.current.cancel();
  };

  const handleClick = (id) => {
    stopSpeech();
    navigate(`/AnalysisIntro/${id}`);
  };

  const handleMouseEnter = (m) => playSpeech(m.name);
  const handleMouseLeave = () =>
    playSpeech("請點擊上方圖案進入介紹");

  return (
    <div className="analysis-intro-container">
      <Navbar />

      {/* 背景裝飾與 MachineIntro 完全一致 */}
      <img src="./A-05-01-1.png" alt="背景1" className="bg-top-left" />
      <img src="./A-05-01-2.png" alt="背景2" className="bg-bottom-right" />

      <h2 className="page-title">雷射機台與倉儲系統解析</h2>

      <div className="module-card-wrapper">
        {modules.map((m) => (
          <div
            key={m.id}
            className="module-card"
            onClick={() => handleClick(m.id)}
            onMouseEnter={() => handleMouseEnter(m)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="module-image-container">
              <img src={m.image} alt={m.name} className="module-image" />
            </div>
            <h3 className="module-name">{m.name}</h3>
          </div>
        ))}
      </div>

      {/* 蜜蜂提示區：同 MachineIntro */}
      <div className="bee-section">
        <div className="bee-dialog">
          請點擊上方圖案進入介紹
        </div>
        <img src="./bee.png" alt="bee" className="bee-image" />
      </div>
    </div>
  );
}

export default AnalysisIntro;
