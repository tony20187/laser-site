import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/MachineIntro.css";

const machines = [
  {
    id: 1,
    name: "AMADA 雷射機台介紹",
    image: "./9000w.png", // ✅ 改成相對路徑
  },
  {
    id: 2,
    name: "AMADA ASFH 自動倉儲系統介紹",
    image: "./03_ENSISASFH_transparent.png", // ✅ 改成相對路徑
  },
];

function MachineIntro() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/machine/${id}`);
  };

  return (
    <div className="machine-intro-container">
      <Navbar />

      <h2 className="page-title">機台介紹</h2>

      <div className="machine-card-wrapper">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="machine-card"
            onClick={() => handleClick(machine.id)}
          >
            <div className="machine-image-container">
              <img
                src={machine.image}
                alt={machine.name}
                className="machine-image"
              />
            </div>
            <h3 className="machine-name">{machine.name}</h3>
          </div>
        ))}
      </div>

      {/* 🐝 蜜蜂圖也改相對路徑 */}
      <div className="bee-section">
        <div className="bee-dialog">請點擊上方圖案進入介紹</div>
        <img src="./bee.png" alt="bee" className="bee-image" />
      </div>
    </div>
  );
}

export default MachineIntro;
