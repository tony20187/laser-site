import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LaserProcess.css"; // 別忘了連結

const processSteps = [
  { id: 1, icon: "🔧", title: "步驟一：建立設計圖", route: "/step1" },
  { id: 2, icon: "🖥️", title: "步驟二：轉換程式碼", route: "/step2" },
  { id: 3, icon: "💡", title: "步驟三：執行雷射切割", route: "/step3" },
  { id: 4, icon: "✅", title: "步驟四：取出成品", route: "/step4" },
];

function LaserProcess() {
  const navigate = useNavigate();
  const utteranceRef = useRef(null);

  useEffect(() => {
    speakText("請點擊上方圖案進入介紹");
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakText = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  // ✅ 滑鼠移開 → 自動播提示
  const handleMouseLeave = () => {
    stopSpeaking();
    speakText("請點擊上方圖案進入介紹");
  };

  return (
    <div className="laser-process-container">
      <Navbar />

      {/* 左上背景圖 */}
      <img src="./A-05-01-1.png" alt="bg1" className="bg-left-top" />

      {/* 右下背景圖 */}
      <img src="./A-05-01-2.png" alt="bg2" className="bg-right-bottom" />

      <h2 className="page-title">雷射切割流程圖</h2>

      <div className="card-wrapper">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="process-card"
            onClick={() => navigate(step.route)}
            onMouseEnter={() => speakText(step.title)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="icon">{step.icon}</div>
            <div className="title">{step.title}</div>
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

export default LaserProcess;
