import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar2";
import "../styles/ASFDetail.css";

function ASFDetail() {
  const utteranceRef = useRef(null);

  const speakText = () => {
    // 停止先前語音
    window.speechSynthesis.cancel();

    // 建立新的語音
    const utterance = new SpeechSynthesisUtterance(
      "ASF-EU 自動上料下料料塔。此設備可搭配 AMNC 控制器，自動排程、無縫切換材料，實現高效率自動化。功能包含自動上料、下料：將原料板材吸取並傳送至雷射加工台，加工完成後自動回收成品。多層板材儲存：依材質厚度分類，每層可承重 2 噸。自動換料：根據任務順序自動更換板材與加工批次，減少人工操作。系統優勢。夜間無人運轉：支援 Lights-out 加工，降低人力成本。效率與省力：大幅減少人力，適合應對人力短缺。"
    );
    utterance.lang = "zh-TW";
    utterance.rate = 1;

    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  useEffect(() => {
    speakText();
    return () => window.speechSynthesis.cancel();
  }, []);

  const handleReplay = () => {
    speakText();
  };

  return (
    <div className="asf-detail-page">
      <Navbar />
      {/* ✅ 右上角按鈕 */}
      <button className="replay-button" onClick={handleReplay}>
        🔊 重聽一次
      </button>

      <div className="asf-content">
        <div className="text-block">
          <h2>ASF-EU 自動上/下料料塔</h2>
          <h4>Automatic Storage Feeder</h4>
          <p>本設備搭配 AMNC 控制器，支援自動排程與無縫切換材料，實現高效率自動化流程。</p>

          <h3>功能介紹</h3>
          <ul>
            <li>🔹 自動上／下料：將原料板材吸取並傳送至雷射加工台，加工完成後自動回收成品。</li>
            <li>🔹 多層板材儲存：依材質厚度分類，每層可承重 2 噸。</li>
            <li>🔹 自動換料：根據任務順序自動更換板材與加工批次，減少人工操作。</li>
          </ul>

          <h3>系統優勢</h3>
          <ul>
            <li>✅ 夜間無人運轉：支援 Lights-out 加工，降低人力成本。</li>
            <li>✅ 效率與省力：大幅減少人力，適合應對人力短缺。</li>
          </ul>
        </div>
        <div className="image-block">
          <img src="./03_ENSISASFH_transparent.png" alt="ASF自動料塔" />
        </div>
      </div>
    </div>
  );
}

export default ASFDetail;
