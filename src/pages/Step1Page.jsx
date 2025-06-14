import React from "react";
import "../styles/Step1Page.css"; // 使用與 Step1Page 相同 CSS
import Navbar from "../components/Navbar1";

function Step1Page() {
  return (
    <div className="step-page">
      <Navbar />
      <h2 className="step-title">🔧 步驟一：建立設計圖</h2>
      <p className="step-description">
        使用繪圖軟體（如 AutoCAD、Illustrator）建立零件圖，線條需為單線寬，避免重疊與錯誤圖層，並輸出為 DXF 或 SVG 等格式供後續加工使用。
      </p>
      <div className="image-gallery">
        {/* ✅ 路徑全改相對，public 版，保證找得到 */}
        <img src="./cad1.jpg" alt="1" />
        <img src="./cad2.jpg" alt="2" />
        <img src="./cad3.jpg" alt="3" />
      </div>
    </div>
  );
}

export default Step1Page;
