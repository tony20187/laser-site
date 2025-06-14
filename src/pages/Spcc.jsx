// ✅ Spcc.jsx
import React from 'react';
import '../styles/Spcc.css';
import Navbar3 from '../components/Navbar3';

const Spcc = () => {
  return (
    <div className="spcc-detail-container">
      <Navbar3 />
      <h1 className="spcc-title">PO酸洗板介紹</h1>
      <div className="spcc-content">
        <div className="spcc-text">
          <section>
            <h2>📌 製程說明</h2>
            <ol>
              <li>熱軋鋼捲通過酸洗除去氧化皮。</li>
              <li>酸洗後鋼板表面較乾淨，適合內部加工用途。</li>
              <li>經初步整平處理提升板面品質。</li>
              <li>最終以油膜保護防止再次氧化。</li>
            </ol>
          </section>

          <section>
            <h2>⭐ 材料特性</h2>
            <ul>
              <li>表面清潔光滑</li>
              <li>尺寸穩定性佳</li>
              <li>適合冷加工與塗裝</li>
              <li>成本效益高</li>
            </ul>
          </section>

          <section>
            <h2>🏭 適用領域</h2>
            <ul>
              <li>家電內部構件</li>
              <li>汽機車零件</li>
              <li>工業用框架</li>
              <li>一般冷成型製品</li>
            </ul>
          </section>
        </div>
        <div className="spcc-image">
          {/* ✅ 改相對路徑，public 版 */}
          <img src="./PO.png" alt="SPCC 酸洗板" />
        </div>
      </div>
    </div>
  );
};

export default Spcc;
