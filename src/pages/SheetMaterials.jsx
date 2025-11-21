import React, { useEffect, useRef } from 'react';
import '../styles/SheetMaterials.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

// ✅ 圖片路徑使用相對路徑
const materials = [
  { name: 'PO酸洗板', image: './PO.png', path: '/spcc' },
  { name: 'AL鋁板', image: './AL.png', path: '/al' },
  { name: 'SUS304', image: './sus304.png', path: '/sus304' },
  { name: 'SUS430', image: './sus430.png', path: '/sus430' },
  { name: 'SECC鍍鋅板', image: './secc.png', path: '/secc' },
  { name: 'SGCC鍍錏板', image: './sgcc.png', path: '/sgcc' },
];

const SheetMaterials = () => {
  const navigate = useNavigate();
  const utteranceRef = useRef(null);

  // ✅ 進入頁面時播報一次
  useEffect(() => {
    playIntro();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playIntro = () => {
    window.speechSynthesis.cancel();
    const intro = new SpeechSynthesisUtterance("請點擊上方圖案進入介紹");
    intro.lang = "zh-TW";
    intro.rate = 1;
    window.speechSynthesis.speak(intro);
    utteranceRef.current = intro;
  };

  // ✅ Hover 播報單一板材名稱
  const handleHover = (text) => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-TW";
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
    utteranceRef.current = utter;
  };

  // ✅ 移開時 → 停止並重新播提示
  const handleLeave = () => {
    window.speechSynthesis.cancel();
    playIntro();
  };

  return (
    <div className="sheet-container">
      {/* 左上裝飾圖 */}
      <div className="decor-left">
        <img src="./A-05-01-1.png" alt="裝飾圖左上" />
      </div>
      {/* 右下裝飾圖 */}
      <div className="decor-right">
        <img src="./A-05-01-2.png" alt="裝飾圖右下" />
      </div>

      <Navbar />
      <h1 className="sheet-title">常用板材介紹</h1>

      <div className="sheet-grid">
        {materials.map((material, index) => (
          <div
            key={index}
            className="sheet-card"
            onClick={() => navigate(material.path)}
            onMouseEnter={() => handleHover(material.name)}
            onMouseLeave={handleLeave}
          >
            <img src={material.image} alt={material.name} className="sheet-img" />
            <div className="sheet-name">{material.name}</div>
          </div>
        ))}
      </div>

      {/* 🐝 蜜蜂區塊 */}
      <div className="bee-section">
        <div className="bee-dialog">請點擊上方圖案進入介紹</div>
        <img src="./bee.png" alt="蜜蜂圖案" className="bee-image" />
      </div>
    </div>
  );
};

export default SheetMaterials;
