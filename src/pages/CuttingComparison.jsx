// ✅ CuttingComparison.jsx
import React from 'react';
import '../styles/CuttingComparison.css';
import Navbar4 from '../components/Navbar4';

const CuttingComparison = () => {
  return (
    <div className="cuttingcomparison-container">
      <Navbar4 />
      <h1 className="cuttingcomparison-title">各類切割方式比較</h1>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>切割方式</th>
            <th>切割精度</th>
            <th>熱影響區</th>
            <th>適用材料</th>
            <th>速度</th>
            <th>加工成本</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>雷射切割</td>
            <td>高</td>
            <td>中等</td>
            <td>金屬、非金屬</td>
            <td>快</td>
            <td>中</td>
          </tr>
          <tr>
            <td>水刀切割</td>
            <td>高</td>
            <td>無</td>
            <td>幾乎所有材料</td>
            <td>中</td>
            <td>高</td>
          </tr>
          <tr>
            <td>等離子切割</td>
            <td>中</td>
            <td>大</td>
            <td>導電材料</td>
            <td>快</td>
            <td>低</td>
          </tr>
          <tr>
            <td>機械切割</td>
            <td>中</td>
            <td>無</td>
            <td>金屬、塑膠</td>
            <td>慢</td>
            <td>低</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CuttingComparison;
