import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LaserIntro.css";

const laserTopics = [
  { id: 1, img: "/何謂雷射.png", title: "何謂雷射", route: "/howlaser" },
  { id: 2, img: "/切割比較.png", title: "切割比較", route: "/CuttingComparison" },
  { id: 3, img: "/雷射原理.png", title: "雷射原理", route: "/HowItWorks" },
  { id: 4, img: "/雷射應用.png", title: "雷射應用", route: "/Applications" },
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

    return () => {
      clearTimeout(timer);
      stopSpeech(); // ✅ 離開頁面時停止語音
    };
  }, []);

  const handleMouseLeave = () => {
    stopSpeech();
    speakText("請點擊上方圖案進入介紹");
  };

  return (
    <div className="laser-intro-container">
      <Navbar />

      <img src="./A-05-01-1.png" alt="Left Top Decoration" className="bg-left-top" />
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
            <img src={topic.img} alt={topic.title} className="card-img" />
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
