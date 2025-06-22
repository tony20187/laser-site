import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LaserIntro.css";

const laserTopics = [
  { id: 1, icon: "🌈", title: "何謂雷射", route: "/howlaser" },
  { id: 2, icon: "🔬", title: "切割比較", route: "/CuttingComparison" },
  { id: 3, icon: "💡", title: "雷射原理", route: "/HowItWorks" },
  { id: 4, icon: "📖", title: "雷射應用", route: "/Applications" },
];

function LaserIntro() {
  const navigate = useNavigate();
  const synthRef = useRef(window.speechSynthesis);

  const speakText = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    synthRef.current.speak(utterance);
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      speakText("請點擊上方圖案進入介紹");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ 移開卡片 → 播提示
  const handleMouseLeave = () => {
    stopSpeech();
    speakText("請點擊上方圖案進入介紹");
  };

  return (
    <div className="laser-intro-container">
      <Navbar />

      {/* 左上背景圖 */}
      <img src="./A-05-01-1.png" alt="Left Top Decoration" className="bg-left-top" />

      {/* 右下背景圖 */}
      <img src="./A-05-01-2.png" alt="Right Bottom Decoration" className="bg-right-bottom" />

      <h2 className="page-title">認識雷射</h2>

      <div className="card-wrapper">
        {laserTopics.map((topic) => (
          <div
            key={topic.id}
            className="intro-card"
            onClick={() => navigate(topic.route)}
            onMouseEnter={() => speakText(topic.title)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="icon">{topic.icon}</div>
            <div className="title">{topic.title}</div>
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

export default LaserIntro;
