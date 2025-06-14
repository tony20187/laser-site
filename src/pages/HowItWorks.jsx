// HowItWorks.jsx
import React from 'react';
import '../styles/HowItWorks.css';
import Navbar4 from '../components/Navbar4';

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <Navbar4 />
      <div className="howitworks-left">
        <h1>雷射是什麼？</h1>
        <p>
          雷射是一種經由「受激輻射放大」產生的高度集中、單一波長的光，具有極高的方向性與能量密度。
        </p>

        <h3>三步驟產生雷射</h3>
        <ol>
          <li>提供能量激發原子（激發）。</li>
          <li>產生受激輻射（釋放相同波長光）。</li>
          <li>共振腔反射並放大光線形成雷射。</li>
        </ol>
      </div>

      <div className="howitworks-right">
        <div>
          <h3>比喻理解</h3>
          <p>
            雷射的概念就像用放大鏡聚焦陽光點燃紙張，將能量集中於一點，即可產生強大效果。
          </p>
        </div>

        <div>
          <h3>組成雷射的三要素</h3>
          <ul>
            <li>增益媒質（如氣體、固體或半導體）</li>
            <li>激發來源（提供能量，如電力或燈光）</li>
            <li>共振腔（兩面鏡子反射增強光線）</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
