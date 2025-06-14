import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LaserProcess.css";
import Navbar from "../components/Navbar";

const processSteps = [
  { id: 1, icon: "🔧", title: "步驟一：建立設計圖", route: "/step1" },
  { id: 2, icon: "🖥️", title: "步驟二：轉換程式碼", route: "/step2" },
  { id: 3, icon: "💡", title: "步驟三：執行雷射切割", route: "/step3" },
  { id: 4, icon: "✅", title: "步驟四：取出成品", route: "/step4" },
];

function LaserProcess() {
  const navigate = useNavigate();

  return (
    <div className="laser-process-container">
      <Navbar />
      <h2 className="page-title">雷射切割流程圖</h2>

      <div className="card-wrapper">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="process-card"
            onClick={() => navigate(step.route)}
          >
            <div className="icon">{step.icon}</div>
            <div className="title">{step.title}</div>
          </div>
        ))}
      </div>

      {/* ✅ 蜜蜂圖片路徑，正確 public 寫法 */}
      <div className="bee-section">
        <div className="bee-dialog">點擊上方圖案進入介紹</div>
        <img src="./bee.png" alt="bee" className="bee-image" />
      </div>
    </div>
  );
}

export default LaserProcess;
