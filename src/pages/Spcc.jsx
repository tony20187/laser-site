// ✅ Spcc.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/Spcc.css';
import Navbar3 from '../components/Navbar3';

const Spcc = () => {
  const utteranceRef = useRef(null);

  // ✅ 一進入就播放介紹
  useEffect(() => {
    playSpeech();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // ✅ 播放語音
  const playSpeech = () => {
    window.speechSynthesis.cancel();
    const text = "PO酸洗板介紹。製程說明:。1.熱軋鋼捲通過酸洗除去氧化皮。2.酸洗後鋼板表面較乾淨，適合內部加工用途。3.經初步整平處理提升板面品質。4.最終以油膜保護防止再次氧化。材料特性:。1.表面清潔光滑。2.尺寸穩定性佳。3.適合冷加工與塗裝。4.成本效益高。 適用領域。1.家電內部構件。2.汽機車零件。3.工業用框架。4.一般冷成型製品";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  return (
    <div className="spcc-detail-container">
      <Navbar3 />

      {/* ✅ 右上角重聽一次按鈕 */}
      <button className="replay-button" onClick={playSpeech}>🔊 重聽一次</button>

      <h1 className="spcc-title">PO酸洗板介紹</h1>

      <div className="spcc-content">
        <div className="spcc-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>熱軋鋼捲通過酸洗除去氧化皮。</li>
              <li>酸洗後鋼板表面較乾淨，適合內部加工用途。</li>
              <li>經初步整平處理提升板面品質。</li>
              <li>最終以油膜保護防止再次氧化。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>表面清潔光滑。 </li>
              <li>尺寸穩定性佳。 </li>
              <li>適合冷加工與塗裝。 </li>
              <li>成本效益高。 </li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>家電內部構件。 </li>
              <li>汽機車零件。 </li>
              <li>工業用框架。 </li>
              <li>一般冷成型製品。 </li>
            </ul>
          </section>
        </div>
        <div className="spcc-image">
          <img src="./PO.png" alt="SPCC 酸洗板" />
        </div>
      </div>
    </div>
  );
};

export default Spcc;
