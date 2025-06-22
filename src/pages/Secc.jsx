import React, { useEffect, useRef } from 'react';
import '../styles/SECC.css';
import Navbar3 from "../components/Navbar3";

const SECC = () => {
  const utteranceRef = useRef(null);

  // ✅ 播放語音函式
  const playSpeech = () => {
    window.speechSynthesis.cancel();
    const text = "SECC 鍍鋅板介紹。 製程說明。1.以冷軋鋼捲（如 SPCC）為基材。2.經過電鍍鋅處理後形成 SECC 鋼板。3.通常含有一層鋅與保護膜，提升防鏽能力。4.表面平滑，可進行烤漆與加工。 材料特性。1.防鏽性佳。2.加工性與成型性優良。3.外觀平整、適合表面處理。4.電氣導通性佳，常用於電子產品。適用領域。1.電腦機殼、伺服器外殼。2.家電背板、外殼。3.電子設備機構件。4.辦公家具與配電盤";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  // ✅ 畫面一載入就播
  useEffect(() => {
    playSpeech();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="secc-detail-container">
      <Navbar3 />

      {/* ✅ 重聽一次按鈕 */}
      <button className="replay-button" onClick={playSpeech}>
        🔊 重聽一次
      </button>

      <h1 className="secc-title">SECC 鍍鋅板介紹</h1>
      <div className="secc-content">
        <div className="secc-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>以冷軋鋼捲（如 SPCC）為基材。</li>
              <li>經過電鍍鋅處理後形成 SECC 鋼板。</li>
              <li>通常含有一層鋅與保護膜，提升防鏽能力。</li>
              <li>表面平滑，可進行烤漆與加工。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>防鏽性佳。 </li>
              <li>加工性與成型性優良。 </li>
              <li>外觀平整、適合表面處理。 </li>
              <li>電氣導通性佳，常用於電子產品。 </li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>電腦機殼、伺服器外殼。 </li>
              <li>家電背板、外殼。 </li>
              <li>電子設備機構件。 </li>
              <li>辦公家具與配電盤。 </li>
            </ul>
          </section>
        </div>
        <div className="secc-image">
          <img src="./secc.png" alt="SECC 鍍鋅板" />
        </div>
      </div>
    </div>
  );
};

export default SECC;
