import React, { useEffect, useRef } from "react";
import "../styles/Step1Page.css";
import Navbar from "../components/Navbar1";

function Step2Page() {
  const utteranceRef = useRef(null);

  useEffect(() => {
    playSpeech();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playSpeech = () => {
    window.speechSynthesis.cancel();
    const text = "使用 CAM 軟體，例如 LightBurn 或 RDWorks，將設計圖轉換為機器可讀的程式碼，例如 G-code。設定切割順序、功率、速度與重疊度等參數，以確保切割品質與效率。";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  return (
    <div className="step-page">
      <Navbar />
      {/* ✅ 右上角重聽按鈕 */}
      <button className="replay-button" onClick={playSpeech}>🔁 重聽一次</button>

      <h2 className="step-title">🖥️ 步驟二：轉換程式碼</h2>
      <p className="step-description">
        使用 CAM 軟體（如 LightBurn、RDWorks）將設計圖轉換為機器可讀的程式碼（如 G-code）。<br />
        設定切割順序、功率、速度與重疊度等參數，以確保切割品質與效率。
      </p>
      <div className="image-gallery">
        <img src="./4-1-1.png" alt="轉CAM圖示" />
        <img src="./5-1-1.png" alt="切割路徑設定" />
        <img src="./6-1-1.png" alt="G-Code程式" />
      </div>
    </div>
  );
}

export default Step2Page;