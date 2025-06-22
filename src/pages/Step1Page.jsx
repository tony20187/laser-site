import React, { useEffect, useRef } from "react";
import "../styles/Step1Page.css"; 
import Navbar from "../components/Navbar1";

function Step1Page() {
  const utteranceRef = useRef(null);

  useEffect(() => {
    playSpeech();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playSpeech = () => {
    window.speechSynthesis.cancel();
    const text = "使用繪圖軟體，例如 AutoCAD 或 Illustrator，建立零件圖，線條需為單線寬，避免重疊與錯誤圖層，並輸出為 DXF 或 SVG 格式，供後續加工使用。";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  return (
    <div className="step-page">
      <Navbar />
      {/* ✅ 重聽按鈕 */}
      <button className="replay-button" onClick={playSpeech}>🔁 重聽一次</button>

      <h2 className="step-title">🔧 步驟一：建立設計圖</h2>
      <p className="step-description">
        使用繪圖軟體（如 AutoCAD、Illustrator）建立零件圖，線條需為單線寬，避免重疊與錯誤圖層，並輸出為 DXF 或 SVG 等格式供後續加工使用。
      </p>
      <div className="image-gallery">
        <img src="./cad1-1.png" alt="1" />
        <img src="./cad2-1.png" alt="2" />
        <img src="./cad3-1.png" alt="3" />
      </div>
    </div>
  );
}

export default Step1Page;
