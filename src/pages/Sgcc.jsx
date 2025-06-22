import React, { useEffect, useRef } from 'react';
import '../styles/SGCC.css';
import Navbar3 from "../components/Navbar3";

const SGCC = () => {
  const utteranceRef = useRef(null);

  // ✅ 語音播放函式
  const playSpeech = () => {
    window.speechSynthesis.cancel();
    const text = "SGCC 鍍錏板介紹製程說明。1.以熱軋或冷軋鋼捲為基材。2.經過熱浸鍍鋅（鋅鍍層較厚）處理製成 SGCC 鋼板。3.常見於建築、電氣與汽車零件。4.具有良好的附著性與防鏽性。材料特性。1.耐候性與防鏽性能優異。2.鋅層厚、保護力強。3.可焊接、成型性佳。4.價格較具經濟性。適用領域。1.建築外牆與屋頂材料。2.空調殼體、電視背板。3.車用鈑金、電氣箱體。4.農用設備與鋼構件。";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  // ✅ 一載入就播
  useEffect(() => {
    playSpeech();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="sgcc-detail-container">
      <Navbar3 />

      {/* ✅ 右上角重聽一次按鈕 */}
      <button className="replay-button" onClick={playSpeech}>
        🔊 重聽一次
      </button>

      <h1 className="sgcc-title">SGCC 鍍錏板介紹</h1>
      <div className="sgcc-content">
        <div className="sgcc-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>以熱軋或冷軋鋼捲為基材。</li>
              <li>經過熱浸鍍鋅（鋅鍍層較厚）處理製成 SGCC 鋼板。</li>
              <li>常見於建築、電氣與汽車零件。</li>
              <li>具有良好的附著性與防鏽性。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>耐候性與防鏽性能優異。 </li>
              <li>鋅層厚、保護力強。 </li>
              <li>可焊接、成型性佳。 </li>
              <li>價格較具經濟性。 </li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>建築外牆與屋頂材料。 </li>
              <li>空調殼體、電視背板。 </li>
              <li>車用鈑金、電氣箱體。 </li>
              <li>農用設備與鋼構件。 </li>
            </ul>
          </section>
        </div>
        <div className="sgcc-image">
          <img src="./sgcc.png" alt="SGCC 鍍錏板" />
        </div>
      </div>
    </div>
  );
};

export default SGCC;
