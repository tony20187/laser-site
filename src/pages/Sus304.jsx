// ✅ Sus304.jsx（public 相對路徑版）
import React from 'react';
import '../styles/Sus304.css';
import Navbar3 from '../components/Navbar3';

const Sus304 = () => {
  return (
    <div className="sus304-detail-container">
      <Navbar3 />
      <h1 className="sus304-title">SUS304 不鏽鋼介紹</h1>
      <div className="sus304-content">
        <div className="sus304-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>SUS304 為 18% 鉻、8% 鎳的奧氏體系不鏽鋼。</li>
              <li>電弧或電渣熔煉後冷軋加工並退火酸洗。</li>
              <li>具優良機械性與成型性。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>優異耐蝕性與抗氧化性</li>
              <li>高溫下仍具強度</li>
              <li>可焊接、加工性良好</li>
              <li>無磁性</li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>食品設備、廚具</li>
              <li>建築裝飾與化學槽</li>
              <li>醫療器材與製藥設備</li>
              <li>汽車排氣系統</li>
            </ul>
          </section>
        </div>
        <div className="sus304-image">
          {/* ✅ 改相對路徑，public 版 */}
          <img src="./sus304.png" alt="SUS304 不鏽鋼" />
        </div>
      </div>
    </div>
  );
};

export default Sus304;
