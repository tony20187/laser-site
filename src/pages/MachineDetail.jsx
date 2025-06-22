import React, { useEffect, useRef } from "react";
import "../styles/MachineDetail.css";
import Navbar from "../components/Navbar2";

function MachineDetail() {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  const speechText = `
    華谷電機雷射機台介紹。
    目前擁有 FOMII 3015 兩台，
    ENSIS AJ 3000瓦一台，
    ENSIS AJ 9000瓦一台。
    最大加工範圍 3070 乘 1550 毫米。
    切割能力
    軟鋼 25mm
    不鏽鋼 25mm
    鋁材  25mm  
    黃銅  18mm
    紅銅  12mm
    核心技術
    可變光束控制：自動調整雷射光束模式與直徑，無需更換鏡頭，即可加工不同厚度與材質的材料。
    自動準直系統：9000W 提供精確光斑控制，提升切割品質。
    水輔助切割系統：水冷卻厚板切割過程，避免過熱。
    SILKY CUT 技術：提供接近 CO₂ 雷射的高品質切割邊緣。
    Clean Fast Cut 技術：優化氣體使用，提升速度，降低成本。
  `;

  const playSpeech = () => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(speechText);
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

  useEffect(() => {
    playSpeech();
    return stopSpeech;
  }, []);

  return (
    <>
      <Navbar />
      {/* ✅ 右上角重聽按鈕 */}
      <button className="replay-button" onClick={playSpeech}>
        🔊 重聽一次
      </button>

      <div className="machine-detail-container">
        <div className="machine-text">
          <h1>華谷電機雷射機台介紹</h1>
          <p>華谷電機目前擁有下列雷射切割設備：</p>
          <ul>
            <li>FOMII-3015 × 2 台</li>
            <li>ENSIS AJ 3000W × 1 台</li>
            <li>ENSIS AJ 9000W × 1 台</li>
          </ul>

          <h2>📐 加工範圍與能力</h2>
          <ul>
            <li>最大加工範圍：3,070 x 1,550 mm</li>
            <li>軟鋼（Mild Steel）：25 mm</li>
            <li>不鏽鋼（Stainless Steel）：25 mm</li>
            <li>鋁（Aluminum）：25 mm</li>
            <li>黃銅（Brass）：18 mm</li>
            <li>紅銅（Copper）：12 mm</li>
          </ul>

          <h2>🚀 核心技術特色</h2>
          <ul>
            <li>Variable Beam Control（可變光束控制）：自動調整雷射光束模式與直徑，無需更換鏡頭，即可加工不同厚度與材質的材料。</li>
            <li>Auto Collimation System（自動準直系統）：9000W 提供精確光斑控制，提升切割品質。</li>
            <li>WACS II（水輔助切割系統）：水冷卻厚板切割過程，避免過熱。</li>
            <li>SILKY CUT 技術：提供接近 CO₂ 雷射的高品質切割邊緣。</li>
            <li>Clean Fast Cut 技術：優化氣體使用，提升速度，降低成本。</li>
          </ul>
        </div>

        <div className="machine-image">
          <img src="./9000w.png" alt="ENSIS 9000W 雷射機台" />
        </div>
      </div>
    </>
  );
}

export default MachineDetail;
