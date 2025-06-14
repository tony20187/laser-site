import React from "react";
import "../styles/Step3Page.css";
import Navbar from "../components/Navbar1";

function Step3Page() {
  return (
    <div className="step3-page">
      <Navbar />
      <h2 className="step3-title">💡 步驟三：執行雷射切割</h2>
      <p className="step3-description">
        雷射機台依照轉換後的程式碼進行切割。<br />
        雷射束聚焦於材料表面，產生高溫熔化或氣化材料，並透過氣體（如氧氣或氮氣）將熔渣吹離。<br />
        此步驟需確認材料固定良好，並監控切割品質。
      </p>
      <div className="step3-gallery">
        {/* ✅ 改相對路徑，保證 Electron 找到 */}
        <video src="./cut.mp4" autoPlay loop muted playsInline />
        <video src="./V_20250531_222553_ES0.mp4" autoPlay loop muted controls />
      </div>
    </div>
  );
}

export default Step3Page;
