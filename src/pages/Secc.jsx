import React, { useRef, useEffect } from 'react';
import '../styles/Secc.css';
import Navbar3 from '../components/Navbar3';

const Secc = () => {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);
  const hasSpokenRef = useRef(false);
  
  const speak = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    utterance.rate = 1;
    utterance.pitch = 1;
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
    <div className="secc-detail-container">
      <Navbar3 />

      <h1 className="secc-title">SECC 鍍鋅板介紹</h1>
      <div className="secc-content">
        <div className="secc-text">
          <section>
            <h2
              onMouseEnter={() => speak('製程說明')}
              onMouseLeave={stopSpeech}
            >📌 製程說明</h2>
            <ol>
              <li onMouseEnter={() => speak('以冷軋鋼板為基材')} onMouseLeave={stopSpeech}>以冷軋鋼板為基材</li>
              <li onMouseEnter={() => speak('表面經過電解鍍鋅處理')} onMouseLeave={stopSpeech}>表面經過電解鍍鋅處理</li>
              <li onMouseEnter={() => speak('可再塗裝或磷酸處理')} onMouseLeave={stopSpeech}>可再塗裝或磷酸處理</li>
            </ol>
          </section>

          <section>
            <h2
              onMouseEnter={() => speak('材料特性')}
              onMouseLeave={stopSpeech}
            >⭐ 材料特性</h2>
            <ul>
              <li onMouseEnter={() => speak('防鏽性良好')} onMouseLeave={stopSpeech}>防鏽性良好</li>
              <li onMouseEnter={() => speak('成型性佳')} onMouseLeave={stopSpeech}>成型性佳</li>
              <li onMouseEnter={() => speak('表面美觀且易塗裝')} onMouseLeave={stopSpeech}>表面美觀且易塗裝</li>
            </ul>
          </section>

          <section>
            <h2
              onMouseEnter={() => speak('適用領域')}
              onMouseLeave={stopSpeech}
            >🏭 適用領域</h2>
            <ul>
              <li onMouseEnter={() => speak('電器外殼')} onMouseLeave={stopSpeech}>電器外殼</li>
              <li onMouseEnter={() => speak('辦公室設備')} onMouseLeave={stopSpeech}>辦公室設備</li>
              <li onMouseEnter={() => speak('資訊產品零組件')} onMouseLeave={stopSpeech}>資訊產品零組件</li>
            </ul>
          </section>
        </div>

        <div className="secc-image">
          <img src="./secc.png" alt="SECC 圖片" />
        </div>
      </div>

      <div className="secc-bee-floating">
        <div className="secc-bee-inner">
          <img src="./bee.png" className="secc-bee-image" alt="bee" />
          <div className="secc-bee-speech">點擊段落會播放語音!!</div>
        </div>
      </div>
    </div>
  );
};

export default Secc;