import React, { useEffect, useRef } from 'react';
import '../styles/Al.css';
import Navbar3 from '../components/Navbar3';

const Al = () => {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);
  const hasSpokenRef = useRef(false); // ✅ 防止重複播放

  const speak = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    utterance.rate = 1;
    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  useEffect(() => {
    // ✅ 頁面載入時自動播放一次總結語音
    if (!hasSpokenRef.current) {
      const summaryText = `點擊段落會播放語音!!`;
      speak(summaryText);
      hasSpokenRef.current = true;
    }
  }, []);

  return (
    <div className="al-detail-container">
      <Navbar3 />

      <h1 className="al-title">AL 鋁板介紹</h1>

      <div className="al-content">
        <div className="al-text">
          <section>
            <h2 onMouseEnter={() => speak('製程說明')} onMouseLeave={stopSpeech}>📌 製程說明</h2>
            <ol>
              <li onMouseEnter={() => speak('將鋁錠透過擠壓或軋延方式形成鋁板。')} onMouseLeave={stopSpeech}>將鋁錠透過擠壓或軋延方式形成鋁板。</li>
              <li onMouseEnter={() => speak('可進一步進行陽極處理以提升耐蝕性與美觀。')} onMouseLeave={stopSpeech}>可進一步進行陽極處理以提升耐蝕性與美觀。</li>
              <li onMouseEnter={() => speak('根據用途可進行合金調整如 5052、6061 等系列。')} onMouseLeave={stopSpeech}>根據用途可進行合金調整如 5052、6061 等系列。</li>
              <li onMouseEnter={() => speak('表面可做鏡面、霧面、花紋板等多種處理。')} onMouseLeave={stopSpeech}>表面可做鏡面、霧面、花紋板等多種處理。</li>
            </ol>
          </section>

          <section>
            <h2 onMouseEnter={() => speak('材料特性')} onMouseLeave={stopSpeech}>⭐ 材料特性</h2>
            <ul>
              <li onMouseEnter={() => speak('重量輕、強度佳。')} onMouseLeave={stopSpeech}>重量輕、強度佳。</li>
              <li onMouseEnter={() => speak('抗腐蝕性優異。')} onMouseLeave={stopSpeech}>抗腐蝕性優異。</li>
              <li onMouseEnter={() => speak('良好導電導熱性。')} onMouseLeave={stopSpeech}>良好導電導熱性。</li>
              <li onMouseEnter={() => speak('可塑性高，適合多樣加工。')} onMouseLeave={stopSpeech}>可塑性高，適合多樣加工。</li>
            </ul>
          </section>

          <section>
            <h2 onMouseEnter={() => speak('適用領域')} onMouseLeave={stopSpeech}>🏭 適用領域</h2>
            <ul>
              <li onMouseEnter={() => speak('航空與汽車工業。')} onMouseLeave={stopSpeech}>航空與汽車工業。</li>
              <li onMouseEnter={() => speak('電子產品外殼。')} onMouseLeave={stopSpeech}>電子產品外殼。</li>
              <li onMouseEnter={() => speak('建築裝潢與隔熱板。')} onMouseLeave={stopSpeech}>建築裝潢與隔熱板。</li>
              <li onMouseEnter={() => speak('餐廚器具、家電面板。')} onMouseLeave={stopSpeech}>餐廚器具、家電面板。</li>
            </ul>
          </section>
        </div>

        <div className="al-image">
          <img src="./AL.png" alt="AL 鋁板" />
        </div>
      </div>

      <div className="al-bee-floating">
        <div className="al-bee-inner">
          <div className="al-bee-speech">點擊段落會播放語音!!</div>
          <img src="./bee.png" alt="Bee" className="al-bee-image" />
        </div>
      </div>
    </div>
  );
};

export default Al;
