// ✅ SUS430.jsx
import React from 'react';
import '../styles/SUS430.css';
import Navbar3 from "../components/Navbar3";

const SUS430 = () => {
  return (
    <div className="sus430-detail-container">
      <Navbar3 />
      <h1 className="sus430-title">SUS430 不鏽鋼介紹</h1>
      <div className="sus430-content">
        <div className="sus430-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>SUS430 為 17% 鉻的鐵素體不鏽鋼，無鎳成分。</li>
              <li>製程多為熱軋或冷軋後再退火處理。</li>
              <li>加工成板材後可進行拉絲、鏡面等表面處理。</li>
              <li>成本較 SUS304 低但仍具一定耐蝕性。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>具中等耐蝕性，適用室內環境</li>
              <li>磁性強，硬度較高</li>
              <li>價格實惠，經濟性佳</li>
              <li>抗熱氧化性良好</li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>家電外殼（如冰箱、洗衣機）</li>
              <li>汽車內裝飾件</li>
              <li>廚具、爐具外殼</li>
              <li>建築裝潢材料</li>
            </ul>
          </section>
        </div>
        <div className="sus430-image">
          {/* ✅ 改成相對路徑，public 版 */}
          <img src="./sus430.png" alt="SUS430 不鏽鋼" />
        </div>
      </div>
    </div>
  );
};

export default SUS430;
