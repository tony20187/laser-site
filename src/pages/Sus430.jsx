
import React, { useEffect, useRef } from 'react';
import '../styles/Sus430.css';
import Navbar3 from "../components/Navbar3";

const SUS430 = () => {
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
    e.target.classList.add('sus430-hovered');
  };

  const handleMouseLeave = (e) => {
    window.speechSynthesis.cancel();
    e.target.classList.remove('sus430-hovered');
  };

  useEffect(() => {
    // ✅ 一進入時朗讀對話框內容
    const initialText = '點擊段落會播放語音';
    const initialUtter = new SpeechSynthesisUtterance(initialText);
    initialUtter.lang = 'zh-TW';
    initialUtter.rate = 1;
    window.speechSynthesis.speak(initialUtter);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="sus430-detail-container">
      <Navbar3 />

      <h1 className="sus430-title">SUS430 不鏽鋼介紹</h1>

      <div className="sus430-content">
        <div className="sus430-text">
          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>📌 製程說明</h2>
            <ol>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>SUS430 為 17% 鉻的鐵素體不鏽鋼，無鎳成分。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>製程多為熱軋或冷軋後再退火處理。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>加工成板材後可進行拉絲、鏡面等表面處理。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>成本較 SUS304 低但仍具一定耐蝕性。</li>
            </ol>
          </section>

          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>⭐ 材料特性</h2>
            <ul>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>具中等耐蝕性，適用室內環境。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>磁性強，硬度較高。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>價格實惠，經濟性佳。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>抗熱氧化性良好。</li>
            </ul>
          </section>

          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>🏭 適用領域</h2>
            <ul>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>家電外殼（如冰箱、洗衣機）。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>汽車內裝飾件。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>廚具、爐具外殼。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>建築裝潢材料。</li>
            </ul>
          </section>
        </div>

        <div className="sus430-image">
          <img src="./sus430.png" alt="SUS430 不鏽鋼" />
        </div>
      </div>

      <div className="sus430-bee-floating">
        <div className="sus430-bee-inner">
          <div className="sus430-bee-speech">點擊段落會播放語音!!</div>
          <img className="sus430-bee-image" src="./bee.png" alt="bee" />
        </div>
      </div>
    </div>
  );
};

export default SUS430;
