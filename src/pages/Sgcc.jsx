import React, { useEffect, useRef } from 'react';
import '../styles/SGCC.css';
import Navbar3 from "../components/Navbar3";

const SGCC = () => {
  const utteranceRef = useRef(null);
const synthRef = useRef(window.speechSynthesis);
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
    <div className="sgcc-detail-container">
      <Navbar3 />

      <h1 className="sgcc-title">SGCC 鍍鋅鋼板介紹</h1>
      <div className="sgcc-content">
        <div className="sgcc-text">
          <section>
             <h2
              onMouseEnter={() => speak('製程說明')}
              onMouseLeave={stopSpeech}
            >📌 製程說明</h2>
            
            <ol>
              <li onMouseEnter={() => speak('以熱軋或冷軋鋼捲為基材')} onMouseLeave={stopSpeech}>以熱軋或冷軋鋼捲為基材</li>
              <li onMouseEnter={() => speak('經過熱浸鍍鋅（鋅鍍層較厚）處理製成 SGCC 鋼板')} onMouseLeave={stopSpeech}>經過熱浸鍍鋅（鋅鍍層較厚）處理製成 SGCC 鋼板。</li>
             <li onMouseEnter={() => speak('常見於建築、電氣與汽車零件')} onMouseLeave={stopSpeech}>常見於建築、電氣與汽車零件</li>
              <li onMouseEnter={() => speak('具有良好的附著性與防鏽性')} onMouseLeave={stopSpeech}>具有良好的附著性與防鏽性</li>
            </ol>
          </section>

          <section>
              
            <h2
              onMouseEnter={() => speak('材料特性')}
              onMouseLeave={stopSpeech}
            >⭐ 材料特性</h2>
            <ul>
               <li onMouseEnter={() => speak('耐候性與防鏽性能優異')} onMouseLeave={stopSpeech}>耐候性與防鏽性能優異</li>
               <li onMouseEnter={() => speak('鋅層厚、保護力強')} onMouseLeave={stopSpeech}>鋅層厚、保護力強</li>
               <li onMouseEnter={() => speak('可焊接、成型性佳')} onMouseLeave={stopSpeech}>可焊接、成型性佳</li>
               <li onMouseEnter={() => speak('價格較具經濟性')} onMouseLeave={stopSpeech}>價格較具經濟</li>
            </ul>
          </section>

          <section>
            <h2
              onMouseEnter={() => speak('適用領域')}
              onMouseLeave={stopSpeech}
            >🏭 適用領域</h2>
            <ul>
              <li onMouseEnter={() => speak('建築外牆與屋頂材料')} onMouseLeave={stopSpeech}>建築外牆與屋頂材料</li>
              <li onMouseEnter={() => speak('空調殼體、電視背板')} onMouseLeave={stopSpeech}>空調殼體、電視背板</li>
              <li onMouseEnter={() => speak('車用鈑金、電氣箱體')} onMouseLeave={stopSpeech}>車用鈑金、電氣箱體</li>
              <li onMouseEnter={() => speak('農用設備與鋼構件')} onMouseLeave={stopSpeech}>農用設備與鋼構件</li>
            </ul>
          </section>
        </div>

        <div className="sgcc-image">
          <img src="./sgcc.png" alt="SGCC 鍍鋅鋼板" />
        </div>
      </div>

      <div className="sgcc-bee-floating">
        <div className="sgcc-bee-inner">
          <div className="sgcc-bee-speech">點擊段落會播放語音!!</div>
          <img className="sgcc-bee-image" src="./bee.png" alt="bee" />
        </div>
      </div>
    </div>
  );
};

export default SGCC;
