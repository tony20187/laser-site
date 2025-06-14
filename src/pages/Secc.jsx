// ✅ SECC.jsx
import React from 'react';
import '../styles/SECC.css';
import Navbar3 from "../components/Navbar3";

const SECC = () => {
  return (
    <div className="secc-detail-container">
      <Navbar3 />
      <h1 className="secc-title">SECC 鍍鋅板介紹</h1>
      <div className="secc-content">
        <div className="secc-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>以冷軋鋼捲（如 SPCC）為基材。</li>
              <li>經過電鍍鋅處理後形成 SECC 鋼板。</li>
              <li>通常含有一層鋅與保護膜，提升防鏽能力。</li>
              <li>表面平滑，可進行烤漆與加工。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>防鏽性佳</li>
              <li>加工性與成型性優良</li>
              <li>外觀平整、適合表面處理</li>
              <li>電氣導通性佳，常用於電子產品</li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>電腦機殼、伺服器外殼</li>
              <li>家電背板、外殼</li>
              <li>電子設備機構件</li>
              <li>辦公家具與配電盤</li>
            </ul>
          </section>
        </div>
        <div className="secc-image">
          {/* ✅ 改相對路徑，public 版 */}
          <img src="./secc.png" alt="SECC 鍍鋅板" />
        </div>
      </div>
    </div>
  );
};

export default SECC;
