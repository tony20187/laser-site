import React, { useRef, useEffect } from "react";
import "../styles/HowLaser.css";
import Navbar from "../components/Navbar4";

function HowLaser() {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);
  const hasSpokenRef = useRef(false);

  const speak = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  // ✅ 首次自動播放提示語
  useEffect(() => {
    // 初始化語音系統
    const init = new SpeechSynthesisUtterance(' ');
    init.lang = 'zh-TW';
    window.speechSynthesis.speak(init);

    // 延遲播放提示文字
    setTimeout(() => {
      if (!hasSpokenRef.current) {
        const speechText = document.querySelector(".HLbee-speech-bubble")?.innerText;
        if (speechText) {
          speak(speechText);
          hasSpokenRef.current = true;
        }
      }
    }, 500);

    return () => stopSpeech();
  }, []);

  return (
    <>
      <Navbar />
      <div className="howlaser-container">
        <div className="howlaser-text">
          <h1 onMouseEnter={() => speak("何謂雷射？")} onMouseLeave={stopSpeech}>
            何謂雷射？
          </h1>

          <p onMouseEnter={() => speak("雷射的基本原理類似於國中自然課做過的實驗。拿一個放大鏡，在太陽底下聚焦光線，點燃一張紙張。")} onMouseLeave={stopSpeech}>
            雷射的基本原理類似於國中自然課做過的實驗──拿一個放大鏡，在太陽底下聚焦光線，點燃一張紙張。
          </p>

          <h2 onMouseEnter={() => speak("雷射原理說明")} onMouseLeave={stopSpeech}>
            🔍 雷射原理說明
          </h2>

          <ul>
            <li onMouseEnter={() => speak("雷射是光放大產生受激輻射的縮寫。")} onMouseLeave={stopSpeech}>
              雷射（LASER）是「光放大產生受激輻射」的縮寫。
            </li>
            <li onMouseEnter={() => speak("雷射光是單一波長、高能量密度且方向一致的光。")} onMouseLeave={stopSpeech}>
              雷射光是單一波長、高能量密度且方向一致的光。
            </li>
            <li onMouseEnter={() => speak("透過聚焦鏡組，將能量集中於一點，產生足以熔化或氣化材料的高溫。")} onMouseLeave={stopSpeech}>
              透過聚焦鏡組，將能量集中於一點，產生足以熔化或氣化材料的高溫。
            </li>
          </ul>

          <h2 onMouseEnter={() => speak("應用場景")} onMouseLeave={stopSpeech}>
            📌 應用場景
          </h2>

          <ul>
            <li onMouseEnter={() => speak("精密金屬切割")} onMouseLeave={stopSpeech}>精密金屬切割</li>
            <li onMouseEnter={() => speak("醫療手術與美容")} onMouseLeave={stopSpeech}>醫療手術與美容</li>
            <li onMouseEnter={() => speak("光纖通訊與測量")} onMouseLeave={stopSpeech}>光纖通訊與測量</li>
            <li onMouseEnter={() => speak("雕刻與標記用途")} onMouseLeave={stopSpeech}>雕刻與標記用途</li>
          </ul>
        </div>

        <div className="howlaser-image">
          <img src="./fire.png" alt="聚焦雷射原理圖示" />
        </div>

        {/* 🐝 蜜蜂與對話框 */}
        <div className="HLbee-floating-hint">
          <div className="HLbee-floating-hint-inner">
            <div className="HLbee-speech-bubble">點擊段落會播放語音!!</div>
            <img src="./bee.png" alt="bee" className="HLbee-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowLaser;
