import React from "react";
import "../styles/Applications.css";
import Navbar4 from "../components/Navbar4";

const applicationsData = [
  {
    category: "工業應用",
    icon: "🛠️",
    details: [
      "🔧 雷射切割：精密切割金屬、壓克力、木板等",
      "🔩 雷射焊接：高速焊接電池與模組",
      "🧼 雷射清洗：去除鏽蝕與油漆，環保無損傷",
      "🖋️ 雷射打標：標記LOGO、序號、QR碼"
    ],
  },
  {
    category: "醫療用途",
    icon: "🧑‍⚕️",
    details: [
      "👁️ 近視雷射手術（LASIK）",
      "💊 雷射微創開刀，傷口小復原快",
      "💆 雷射除斑、除毛、嫩膚等醫美應用",
      "🦷 牙科除蛀、齒齦雷射治療"
    ],
  },
  {
    category: "通訊與電子",
    icon: "📡",
    details: [
      "🌐 光纖通訊：網路資料傳輸骨幹",
      "📀 光碟雷射讀寫：CD/DVD/藍光碟",
      "📱 雷射微投影顯示技術",
      "🛰️ LiDAR 空間測距：應用於自駕車、地圖測繪"
    ],
  },
  {
    category: "科學與軍事",
    icon: "🚀",
    details: [
      "🧪 光譜分析：成分與氣體分析",
      "🧲 實驗室粒子研究與碰撞實驗",
      "🛡️ 軍用雷射：雷射炮、導引、反制武器",
      "🛰️ 太空雷射測距與衛星導航"
    ],
  },
];

const Applications = () => {
  return (
    <div className="applications-container">
      <Navbar4 />
      <h1 className="applications-title">🌍 雷射應用總覽</h1>
      <p className="applications-subtext">從工業到醫療，從通訊到太空，雷射無所不在。</p>

      <div className="applications-grid">
        {applicationsData.map((item, index) => (
          <div key={index} className="application-card">
            <h2>{item.icon} {item.category}</h2>
            <ul>
              {item.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
