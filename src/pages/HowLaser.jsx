import React, { useEffect, useRef } from "react";
import "../styles/HowLaser.css";
import Navbar from "../components/Navbar4";

function HowLaser() {
  const synthRef = useRef(window.speechSynthesis);

  const fullText = `
    何謂雷射？
    簡單來說，雷射就像用放大鏡聚焦陽光點燃紙張，將能量集中於一點產生高溫。
    雷射的基本原理類似國中自然課做過的實驗，拿一個放大鏡聚焦光線點燃紙張。
    雷射原理說明：
    雷射是光放大產生受激輻射的縮寫。
    雷射光是單一波長、高能量密度且方向一致的光。
    透過聚焦鏡組將能量集中於一點，產生足以熔化或氣化材料的高溫。
    應用場景：
    精密金屬切割。
    醫療手術與美容。
    光纖通訊與測量。
    雕刻與標記用途。
  `;

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
      speakText(fullText);
    }, 500);
    return () => {
      clearTimeout(timer);
      stopSpeech();
    };
  }, []);

  return (
    <>
      <Navbar />
      <button className="listen-again-btn" onClick={() => speakText(fullText)}>
        🔁 重聽一次
      </button>

      <div className="howlaser-container">
        <div className="howlaser-text">
          <h1>何謂雷射？</h1>
          <p>
            雷射的基本原理類似於國中自然課做過的實驗──
            拿一個放大鏡，在太陽底下聚焦光線，點燃一張紙張。
          </p>

          <h2>🔍 雷射原理說明</h2>
          <ul>
            <li>雷射（LASER）是「光放大產生受激輻射」的縮寫。</li>
            <li>雷射光是單一波長、高能量密度且方向一致的光。</li>
            <li>透過聚焦鏡組，將能量集中於一點，產生足以熔化或氣化材料的高溫。</li>
          </ul>

          <h2>📌 應用場景</h2>
          <ul>
            <li>精密金屬切割</li>
            <li>醫療手術與美容</li>
            <li>光纖通訊與測量</li>
            <li>雕刻與標記用途</li>
          </ul>
        </div>

        <div className="howlaser-image">
          <img src="./fire.png" alt="聚焦雷射原理圖示" />
        </div>
      </div>
    </>
  );
}

export default HowLaser;
