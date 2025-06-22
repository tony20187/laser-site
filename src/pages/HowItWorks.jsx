// HowItWorks.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/HowItWorks.css';
import Navbar4 from '../components/Navbar4';

const HowItWorks = () => {
  const utteranceRef = useRef(null);

  const textToSpeak = `
    雷射是什麼？
    雷射是一種經由受激輻射放大產生的高度集中、單一波長的光。
    具有極高的方向性與能量密度。

    比喻理解：
    雷射就像用放大鏡聚焦陽光點燃紙張，將能量集中於一點，即可產生強大效果。
   
    三步驟產生雷射：
    提供能量激發原子
    產生受激輻射
    共振腔反射並放大形成雷射。
    
    組成雷射的三要素：增益媒質、激發來源、共振腔。
  `;

  // ✅ 一進入自動播放
  useEffect(() => {
    playSpeech();
    return () => stopSpeech();
  }, []);

  const playSpeech = () => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'zh-TW';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  const stopSpeech = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  return (
    <div className="howitworks-container">
      <Navbar4 />

      <div className="howitworks-left">
        <h1>雷射是什麼？</h1>
        <p>
          雷射是一種經由「受激輻射放大」產生的高度集中、單一波長的光，具有極高的方向性與能量密度。
        </p>

        <h3>比喻理解</h3>
        <p>
          雷射的概念就像用放大鏡聚焦陽光點燃紙張，將能量集中於一點，即可產生強大效果。
        </p>

        <h3>三步驟產生雷射</h3>
        <ol>
          <li>提供能量激發原子（激發）。</li>
          <li>產生受激輻射（釋放相同波長光）。</li>
          <li>共振腔反射並放大光線形成雷射。</li>
        </ol>

        {/* ✅ 這裡是「重聽一次」按鈕 */}
        <button className="listen-again-btn" onClick={playSpeech}>
          🔊 重聽一次
        </button>
      </div>

      <div className="howitworks-right">
        <h3>組成雷射的三要素</h3>
        <ul>
          <li>增益媒質（如氣體、固體或半導體）</li>
          <li>激發來源（提供能量，如電力或燈光）</li>
          <li>共振腔（兩面鏡子反射增強光線）</li>
        </ul>

        <div className="laser-image">
          <img src="./雷射原理.png" alt="雷射原理" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
