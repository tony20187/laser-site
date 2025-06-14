import React from "react";
import "../styles/Step1Page.css";
import Navbar from "../components/Navbar1";

function Step2Page() {
  return (
    <div className="step-page">
      <Navbar />
      <h2 className="step-title">🖥️ 步驟二：轉換程式碼</h2>
      <p className="step-description">
        使用 CAM 軟體（如 LightBurn、RDWorks）將設計圖轉換為機器可讀的程式碼（如 G-code）。<br />
        設定切割順序、功率、速度與重疊度等參數，以確保切割品質與效率。
      </p>
      <div className="image-gallery">
        {/* ✅ 圖片路徑改相對，public 版，保證找得到 */}
        <img src="./4-1.png" alt="轉CAM圖示" />
        <img src="./5-1.png" alt="切割路徑設定" />
        <img src="./6-1.png" alt="G-Code程式" />
      </div>
    </div>
  );
}

export default Step2Page;
