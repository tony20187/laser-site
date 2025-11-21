import React, { useEffect, useRef } from 'react';
import '../styles/HowItWorks.css';
import Navbar4 from '../components/Navbar4';

const HowItWorks = () => {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);
  const hasSpokenRef = useRef(false);

  const speak = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  // ✅ 等待畫面渲染完再觸發語音
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasSpokenRef.current) {
        const speechText = document.querySelector('.HIWbee-speech-bubble')?.innerText;
        if (speechText) {
          speak(speechText);
          hasSpokenRef.current = true;
        }
      }
    }, 300); // 延遲執行，確保文字載入完成

    return () => {
      clearTimeout(timer);
      stopSpeech();
    };
  }, []);

  return (
    <div className="howitworks-container">
      <Navbar4 />

      <div className="howitworks-left">
        <h1 onMouseEnter={() => speak('雷射是什麼？')} onMouseLeave={stopSpeech}>雷射是什麼？</h1>
        <p onMouseEnter={() => speak('雷射是一種經由受激輻射放大產生的高度集中、單一波長的光，具有極高的方向性與能量密度。')} onMouseLeave={stopSpeech}>
          雷射是一種經由「受激輻射放大」產生的高度集中、單一波長的光，具有極高的方向性與能量密度。
        </p>

        <h3 onMouseEnter={() => speak('比喻理解')} onMouseLeave={stopSpeech}>比喻理解</h3>
        <p onMouseEnter={() => speak('雷射的概念就像用放大鏡聚焦陽光點燃紙張，將能量集中於一點，即可產生強大效果。')} onMouseLeave={stopSpeech}>
          雷射的概念就像用放大鏡聚焦陽光點燃紙張，將能量集中於一點，即可產生強大效果。
        </p>

        <h3 onMouseEnter={() => speak('三步驟產生雷射')} onMouseLeave={stopSpeech}>三步驟產生雷射</h3>
        <ol>
          <li onMouseEnter={() => speak('第一步：提供能量激發原子。')} onMouseLeave={stopSpeech}>提供能量激發原子（激發）。</li>
          <li onMouseEnter={() => speak('第二步：產生受激輻射。')} onMouseLeave={stopSpeech}>產生受激輻射（釋放相同波長光）。</li>
          <li onMouseEnter={() => speak('第三步：共振腔反射並放大光線形成雷射。')} onMouseLeave={stopSpeech}>共振腔反射並放大光線形成雷射。</li>
        </ol>
      </div>

      <div className="howitworks-right">
        <h3 onMouseEnter={() => speak('組成雷射的三要素')} onMouseLeave={stopSpeech}>組成雷射的三要素</h3>
        <ul>
          <li onMouseEnter={() => speak('第一要素：增益媒質（如氣體、固體或半導體）。')} onMouseLeave={stopSpeech}>增益媒質（如氣體、固體或半導體）</li>
          <li onMouseEnter={() => speak('第二要素：激發來源（提供能量，如電力或燈光）。')} onMouseLeave={stopSpeech}>激發來源（提供能量，如電力或燈光）</li>
          <li onMouseEnter={() => speak('第三要素：共振腔（兩面鏡子反射增強光線）。')} onMouseLeave={stopSpeech}>共振腔（兩面鏡子反射增強光線）</li>
        </ul>

        <div className="laser-image">
          <img src="./雷射原理.png" alt="雷射原理" />
        </div>
      </div>

      {/* 🐝 蜜蜂圖 + 對話框 */}
      <div className="HIWbee-floating-hint">
        <div className="HIWbee-floating-hint-inner">
          <div className="HIWbee-speech-bubble">點擊段落會播放語音!!</div>
          <img className="HIWbee-image" src="./bee.png" alt="bee" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
