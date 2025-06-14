import React from 'react';
import '../styles/SheetMaterials.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

// ✅ 圖片路徑改成相對路徑
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

  return (
    <div className="sheet-container">
      <Navbar />
      <h1 className="sheet-title">常用板材介紹</h1>
      <div className="sheet-grid">
        {materials.map((material, index) => (
          <div
            key={index}
            className="sheet-card"
            onClick={() => navigate(material.path)}
          >
            <img src={material.image} alt={material.name} className="sheet-img" />
            <div className="sheet-name">{material.name}</div>
          </div>
        ))}
      </div>

      {/* 🐝 蜜蜂圖同樣改相對路徑 */}
      <div className="bee-section">
        <div className="bee-dialog">請點擊上方圖案進入介紹</div>
        <img src="./bee.png" alt="蜜蜂圖案" className="bee-image" />
      </div>
    </div>
  );
};

export default SheetMaterials;
