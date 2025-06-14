import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LaserIntro.css";
import Navbar from "../components/Navbar";

const laserTopics = [
  { id: 1, icon: "🌈", title: "何謂雷射", route: "/howlaser" },
  { id: 2, icon: "🔬", title: "切割比較", route: "/CuttingComparison" },
  { id: 3, icon: "💡", title: "雷射原理", route: "/HowItWorks" },
  { id: 4, icon: "📖", title: "雷射應用", route: "/Applications" },
];

function LaserIntro() {
  const navigate = useNavigate();

  return (
    <div className="laser-intro-container">
      <Navbar />
      <h2 className="page-title">認識雷射</h2>

      <div className="card-wrapper">
        {laserTopics.map((topic) => (
          <div
            key={topic.id}
            className="intro-card"
            onClick={() => navigate(topic.route)}
          >
            <div className="icon">{topic.icon}</div>
            <div className="title">{topic.title}</div>
          </div>
        ))}
      </div>

      {/* ✅ 蜜蜂從 public 載入，用相對路徑，保證 Electron 找得到 */}
      <div className="bee-section">
        <div className="bee-dialog">點擊上方圖案進入介紹</div>
        <img src="./bee.png" alt="bee" className="bee-image" />
      </div>
    </div>
  );
}

export default LaserIntro;
