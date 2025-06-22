import React from "react";
import "../styles/Crane.css";

export default function Crane() {
  return (
    <div className="crane-wrapper">
      <h1 className="crane-title">天車介紹與危險性</h1>
      <div className="crane-cards">
        <div className="crane-card">
          <h2>天車介紹</h2>
          <p>
            天車是工廠常見的吊運設備，主要用於吊掛重物並移動，可提升作業效率並降低人力負擔。
          </p>
        </div>

        <div className="crane-card">
          <h2>危險性</h2>
          <ul>
            <li>吊掛不當易造成人員傷亡。</li>
            <li>操作視野死角可能引發碰撞。</li>
            <li>作業區人員未避開，易被擠壓或勾掛。</li>
            <li>維護不良會導致天車故障或脫鉤。</li>
          </ul>
        </div>

        <div className="crane-card">
          <h2>安全提醒</h2>
          <p>✅ 請確實接受操作訓練並遵守安全規範，確保作業安全！</p>
        </div>
      </div>
    </div>
  );
}
