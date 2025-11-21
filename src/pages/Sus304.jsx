import React, { useEffect, useRef } from 'react';
import '../styles/Sus304.css';
import Navbar3 from '../components/Navbar3';

const Sus304 = () => {
  const utteranceRef = useRef(null);

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  const handleMouseEnter = (e) => {
    const text = e.target.innerText;
    speak(text);
    e.target.classList.add('hovered');
  };

  const handleMouseLeave = (e) => {
    window.speechSynthesis.cancel();
    e.target.classList.remove('hovered');
  };

  // ✅ 頁面進入時只說一次提示語音
  useEffect(() => {
    const intro = new SpeechSynthesisUtterance("點擊段落會播放語音!!");
    intro.lang = 'zh-TW';
    intro.rate = 1;
    window.speechSynthesis.speak(intro);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="sus304-detail-container">
      <Navbar3 />
      <h1 className="sus304-title">SUS304 不鏽鋼介紹</h1>
      <div className="sus304-content">
        <div className="sus304-text">
          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>📌 製程說明</h2>
            <ol>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>SUS304 為 18% 鉻、8% 鎳的奧氏體系不鏽鋼。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>電弧或電渣熔煉後冷軋加工並退火酸洗。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>具優良機械性與成型性。</li>
            </ol>
          </section>

          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>⭐ 材料特性</h2>
            <ul>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>優異耐蝕性與抗氧化性。 </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>高溫下仍具強度。 </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>可焊接、加工性良好。 </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>無磁性。 </li>
            </ul>
          </section>

          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>🏭 適用領域</h2>
            <ul>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>食品設備、廚具。 </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>建築裝飾與化學槽。 </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>醫療器材與製藥設備。 </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>汽車排氣系統。 </li>
            </ul>
          </section>
        </div>

        <div className="sus304-image">
          <img src="./sus304.png" alt="SUS304 不鏽鋼" />
        </div>
      </div>

      {/* ✅ 蜜蜂與固定提示框：AL 樣式 */}
      <div className="sus304-bee-floating">
        <div className="sus304-bee-inner">
          <div className="sus304-bee-speech">點擊段落會播放語音!!</div>
          <img className="sus304-bee-image" src="./bee.png" alt="bee" />
        </div>
      </div>
    </div>
  );
};

export default Sus304;
