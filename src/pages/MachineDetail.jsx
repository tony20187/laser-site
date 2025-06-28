import React, { useRef, useEffect } from "react";
import "../styles/MachineDetail.css";
import Navbar from "../components/Navbar2";

function MachineDetail() {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);
  const hasSpokenRef = useRef(false);

  const speak = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    synthRef.current.speak(utterance);
    utteranceRef.current = utterance;
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  // ✅ 初始播放提示語音
  useEffect(() => {
    const init = new SpeechSynthesisUtterance(' ');
    init.lang = 'zh-TW';
    window.speechSynthesis.speak(init);

    setTimeout(() => {
      if (!hasSpokenRef.current) {
        const text = document.querySelector(".bee-speech-bubble")?.innerText;
        if (text) {
          speak(text);
          hasSpokenRef.current = true;
        }
      }
    }, 500);

    return () => stopSpeech();
  }, []);

  return (
    <>
      <Navbar />

      <div className="machine-detail-container">
        <div className="machine-text">
          <h1 onMouseEnter={() => speak("華谷電機雷射機台介紹")} onMouseLeave={stopSpeech}>
            華谷電機雷射機台介紹
          </h1>

          <p onMouseEnter={() => speak("華谷電機目前擁有下列雷射切割設備")} onMouseLeave={stopSpeech}>
            華谷電機目前擁有下列雷射切割設備：
          </p>

          <ul>
            <li onMouseEnter={() => speak("FOMII 三零一五，兩台")} onMouseLeave={stopSpeech}>
              FOMII-3015 × 2 台
            </li>
            <li onMouseEnter={() => speak("ENSIS AJ 三千瓦，一台")} onMouseLeave={stopSpeech}>
              ENSIS AJ 3000W × 1 台
            </li>
            <li onMouseEnter={() => speak("ENSIS AJ 九千瓦，一台")} onMouseLeave={stopSpeech}>
              ENSIS AJ 9000W × 1 台
            </li>
          </ul>

          <h2 onMouseEnter={() => speak("加工範圍與能力")} onMouseLeave={stopSpeech}>
            📐 加工範圍與能力
          </h2>

          <ul>
            <li onMouseEnter={() => speak("最大加工範圍為三千零七十乘以一千五百五十毫米")} onMouseLeave={stopSpeech}>
              最大加工範圍：3,070 x 1,550 mm
            </li>
            <li onMouseEnter={() => speak("軟鋼二十五毫米")} onMouseLeave={stopSpeech}>
              軟鋼（Mild Steel）：25 mm
            </li>
            <li onMouseEnter={() => speak("不鏽鋼二十五毫米")} onMouseLeave={stopSpeech}>
              不鏽鋼（Stainless Steel）：25 mm
            </li>
            <li onMouseEnter={() => speak("鋁材二十五毫米")} onMouseLeave={stopSpeech}>
              鋁（Aluminum）：25 mm
            </li>
            <li onMouseEnter={() => speak("黃銅十八毫米")} onMouseLeave={stopSpeech}>
              黃銅（Brass）：18 mm
            </li>
            <li onMouseEnter={() => speak("紅銅十二毫米")} onMouseLeave={stopSpeech}>
              紅銅（Copper）：12 mm
            </li>
          </ul>

          <h2 onMouseEnter={() => speak("核心技術特色")} onMouseLeave={stopSpeech}>
            🚀 核心技術特色
          </h2>

          <ul>
            <li onMouseEnter={() => speak("Variable Beam Control，可變光束控制，自動調整雷射光束模式與直徑，無需更換鏡頭。")} onMouseLeave={stopSpeech}>
              Variable Beam Control（可變光束控制）：自動調整雷射光束模式與直徑，無需更換鏡頭，即可加工不同厚度與材質的材料。
            </li>
            <li onMouseEnter={() => speak("Auto Collimation System，自動準直系統，九千瓦機種提供精確光斑控制。")} onMouseLeave={stopSpeech}>
              Auto Collimation System（自動準直系統）：9000W 提供精確光斑控制，提升切割品質。
            </li>
            <li onMouseEnter={() => speak("WACS II，水輔助切割系統，冷卻厚板，避免過熱。")} onMouseLeave={stopSpeech}>
              WACS II（水輔助切割系統）：水冷卻厚板切割過程，避免過熱。
            </li>
            <li onMouseEnter={() => speak("SILKY CUT 技術，切割邊緣品質接近二氧化碳雷射。")} onMouseLeave={stopSpeech}>
              SILKY CUT 技術：提供接近 CO₂ 雷射的高品質切割邊緣。
            </li>
            <li onMouseEnter={() => speak("Clean Fast Cut 技術，優化氣體使用，提升速度，降低成本。")} onMouseLeave={stopSpeech}>
              Clean Fast Cut 技術：優化氣體使用，提升速度，降低成本。
            </li>
          </ul>
        </div>

        <div className="bee-floating-hint">
          <div className="bee-floating-hint-inner">
            <div className="bee-speech-bubble">點擊段落會播放語音!!</div>
            <img src="./bee.png" alt="提示蜜蜂" className="bee-image" />
          </div>
        </div>

        <div className="machine-image">
          <img src="./9000w.png" alt="ENSIS 9000W 雷射機台" />
        </div>
      </div>
    </>
  );
}

export default MachineDetail;
