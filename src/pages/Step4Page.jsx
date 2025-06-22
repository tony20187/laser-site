import React, { useEffect, useRef } from "react";
import "../styles/Step1Page.css"; // 沿用 Step1 樣式
import Navbar from "../components/Navbar1";

function Step4Page() {
  const utteranceRef = useRef(null);

  useEffect(() => {
    playSpeech();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playSpeech = () => {
    window.speechSynthesis.cancel();
    const text = "切割完成後，操作人員應小心取出成品，確認切割精度與完整性。必要時可進行除毛邊、折彎、植釘等後處理，確保符合產品規格。";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance;
  };

  return (
    <div className="step-page">
      <Navbar />

      {/* ✅ 右上角重聽一次按鈕 */}
      <button className="replay-button" onClick={playSpeech}>
        🔁 重聽一次
      </button>

      <h2 className="step-title">✅ 步驟四：取出成品</h2>
      <p className="step-description">
        切割完成後，操作人員應小心取出成品，確認切割精度與完整性。<br />
        必要時可進行除毛邊、折彎、植釘等後處理，確保符合產品規格。
      </p>
      <div className="image-gallery">
        <img src="./P_20250531_224800.jpg" alt="雷射切割完畢成品1" />
        <img src="./P_20250531_224808.jpg" alt="雷射切割完畢成品2" />
        <img src="./P_20250531_224958.jpg" alt="雷射切割完畢成品3" />
      </div>
    </div>
  );
}

export default Step4Page;
