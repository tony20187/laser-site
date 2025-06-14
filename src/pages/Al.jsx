// ✅ Al.jsx
import React from 'react';
import '../styles/Al.css';
import Navbar3 from "../components/Navbar3";

const Al = () => {
  return (
    <div className="spcc-detail-container">
      <Navbar3 />
      <h1 className="spcc-title">AL 鋁板介紹</h1>
      <div className="spcc-content">
        <div className="spcc-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>將鋁錠透過擠壓或軋延方式形成鋁板。</li>
              <li>可進一步進行陽極處理以提升耐蝕性與美觀。</li>
              <li>根據用途可進行合金調整如 5052、6061 等系列。</li>
              <li>表面可做鏡面、霧面、花紋板等多種處理。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>重量輕、強度佳</li>
              <li>抗腐蝕性優異</li>
              <li>良好導電導熱性</li>
              <li>可塑性高，適合多樣加工</li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>航空與汽車工業</li>
              <li>電子產品外殼</li>
              <li>建築裝潢與隔熱板</li>
              <li>餐廚器具、家電面板</li>
            </ul>
          </section>
        </div>
        <div className="spcc-image">
          {/* ✅ 改相對路徑，public 版 */}
          <img src="./AL.png" alt="AL 鋁板" />
        </div>
      </div>
    </div>
  );
};

export default Al;
