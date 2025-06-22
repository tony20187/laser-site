import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/MachineIntro.css";

const machines = [
  {
    id: 1,
    name: "AMADA 雷射機台介紹",
    image: "./9000w.png",
  },
  {
    id: 2,
    name: "AMADA ASFH 自動倉儲系統介紹",
    image: "./03_ENSISASFH_transparent.png",
  },
];

function MachineIntro() {
  const navigate = useNavigate();
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // 進入畫面時先說明
  useEffect(() => {
    playSpeech("請點擊上方圖案進入介紹");
    return stopSpeech; // 離開頁面時關閉
  }, []);

  const playSpeech = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    synthRef.current.speak(utterance);
    utteranceRef.current = utterance;
  };

  const stopSpeech = () => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  const handleClick = (id) => {
    stopSpeech();
    navigate(`/machine/${id}`);
  };

  const handleMouseEnter = (machine) => {
    playSpeech(machine.name);
  };

  // ✅ 滑鼠移開 → 停止語音並重播提示
  const handleMouseLeave = () => {
    stopSpeech();
    playSpeech("請點擊上方圖案進入介紹");
  };

  return (
    <div className="machine-intro-container">
      <Navbar />

      {/* 左上角背景 */}
      <img src="./A-05-01-1.png" alt="背景1" className="bg-top-left" />

      {/* 右下角背景 */}
      <img src="./A-05-01-2.png" alt="背景2" className="bg-bottom-right" />

      <h2 className="page-title">機台介紹</h2>

      <div className="machine-card-wrapper">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="machine-card"
            onClick={() => handleClick(machine.id)}
            onMouseEnter={() => handleMouseEnter(machine)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="machine-image-container">
              <img
                src={machine.image}
                alt={machine.name}
                className="machine-image"
              />
            </div>
            <h3 className="machine-name">{machine.name}</h3>
          </div>
        ))}
      </div>

      <div className="bee-section">
        <div className="bee-dialog">請點擊上方圖案進入介紹</div>
        <img src="./bee.png" alt="bee" className="bee-image" />
      </div>
    </div>
  );
}

export default MachineIntro;
