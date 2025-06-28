import React, { useEffect, useRef } from 'react';
import '../styles/Spcc.css';
import Navbar3 from "../components/Navbar3";

const SPCC = () => {
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
    e.target.classList.add('spcc-hovered');
  };

  const handleMouseLeave = (e) => {
    window.speechSynthesis.cancel();
    e.target.classList.remove('spcc-hovered');
  };

  // ✅ 一進入就說提示語音（只一次）
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
    <div className="spcc-detail-container">
      <Navbar3 />

      <h1 className="spcc-title">PO 酸洗板介紹</h1>
      <div className="spcc-content">
        <div className="spcc-text">
          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>📌 製程說明</h2>
            <ol>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>熱軋鋼捲通過酸洗除去氧化皮。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>酸洗後鋼板表面較乾淨，適合內部加工用途。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>經初步整平處理提升板面品質。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>最終以油膜保護防止再次氧化。</li>
            </ol>
          </section>

          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>⭐ 材料特性</h2>
            <ul>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>表面清潔光滑。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>尺寸穩定性佳。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>適合冷加工與塗裝。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>成本效益高。</li>
            </ul>
          </section>

          <section>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>🏭 適用領域</h2>
            <ul>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>家電內部構件。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>汽機車零件。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>工業用框架。</li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>一般冷成型製品。</li>
            </ul>
          </section>
        </div>

        <div className="spcc-image">
          <img src="./PO.png" alt="SPCC 冷軋鋼板" />
        </div>
      </div>

      <div className="spcc-bee-floating">
        <div className="spcc-bee-inner">
          <div className="spcc-bee-speech">點擊段落會播放語音!!</div>
          <img className="spcc-bee-image" src="./bee.png" alt="bee" />
        </div>
      </div>
    </div>
  );
};

export default SPCC;
