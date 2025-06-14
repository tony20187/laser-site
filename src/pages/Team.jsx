import React, { useState } from "react";
import "../styles/Team.css";
import Navbar from "../components/Navbar";

const members = [
  {
    name: "黃俊源",
    role: "機工課-課長",
    description: [
      "年資:15年以上",
      "執照:固定式起重機，堆高機操作技術士與高壓氣體操作人員證",
      "熟悉光纖雷射與CO2雷射機台",
      "雷射條件參數修改",
      "管件切削機與數值控制沖床操作",
      "熟悉機台維護與保養",
      "熟識機台狀況與問題排除",
      "管件二次加工與骨架切割技術",
      "確保加工物品質與精準度",
      "確保生產順暢無誤",
    ],
    image: "黃俊源.png",
  },
  {
    name: "李書宏",
    role: "機工課雷射組-副組長",
    description: [
      "年資:12年以上",
      "執照:固定式起重機，堆高機操作技術士",
      "熟悉光纖雷射與CO2雷射機台",
      "雷射條件參數修改",
      "熟悉機台維護與保養",
      "熟識機台狀況與問題排除",
      "管件二次加工與骨架切割技術",
      "確保加工物品質與精準度",
      "確保生產順暢無誤",
    ],
    image: "李書宏.png",
  },
  {
    name: "洪銘澤",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "年資:5年以上",
      "執照:固定式起重機",
      "熟悉光纖雷射與CO2雷射機台",
      "雷射條件參數修改",
      "熟悉機台維護與保養",
      "管件二次加工與骨架切割技術",
      "確保加工物品質與精準度",
    ],
    image: "洪銘澤.png",
  },
  {
    name: "陳泓憲",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "年資:5年以上",
      "執照:固定式起重機",
      "熟悉光纖雷射與CO2雷射機台",
      "雷射條件參數修改",
      "熟悉機台維護與保養",
      "管件二次加工與骨架切割技術",
      "確保加工物品質與精準度",
    ],
    image: "陳泓憲.png",
  },
  {
    name: "黃逸村",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "年資:5年以上",
      "熟悉光纖雷射與CO2雷射機台",
      "雷射條件參數修改",
      "熟悉機台維護與保養",
      "管件二次加工與骨架切割技術",
      "確保加工物品質與精準度",
    ],
    image: "黃逸村.png",
  },
  {
    name: "馬朝承",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "年資:15年以上",
      "熟悉現場環境作業規範",
      "熟悉機台維護與保養",
      "多年折床經驗與高端技術",
    ],
    image: "馬朝承.png",
  },
  {
    name: "莊欣怡",
    role: "機工課雷射組-排版人員",
    description: [
      "年資:3年以上",
      "熟悉 CAD 圖面",
      "熟練使用AMADA的LS SMART排版軟體",
      "熟練使用AlmaCAM自動排版軟體",
      "熟悉現場環境作業規範",
      "規劃共邊切割、微接點（Micro Joint）技術",
      "精準安排切割路徑與切割順序，降低熱變形",
      "善用剩料管理系統，持續追求零浪費",
    ],
    image: "莊欣怡.png",
  },
  {
    name: "林岑妍",
    role: "機工課雷射組-排版人員",
    description: [
      "年資:1年以上",
      "熟悉 CAD 圖面",
      "熟練使用AMADA的LS SMART排版軟體",
      "熟悉現場環境作業規範",
      "規劃共邊切割、微接點（Micro Joint）技術",
      "精準安排切割路徑與切割順序，降低熱變形",
      "善用剩料管理系統，持續追求零浪費",
    ],
    image: "林岑妍.png",
  },
];

const Team = () => {
  const [selected, setSelected] = useState(members[0]);

  return (
    <div className="team-container">
      <Navbar />
      <h1 className="team-title">團隊介紹</h1>

      {/* 團隊合照 public 相對路徑 */}
      <div className="team-photo-wrapper">
        <img src="./S__18219011.jpg" alt="團隊合照" className="team-photo" />
      </div>

      {/* 名字選單 */}
      <div className="team-menu">
        {members.map((m) => (
          <button
            key={m.name}
            className={`team-menu-btn ${selected.name === m.name ? "active" : ""}`}
            onClick={() => setSelected(m)}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* 詳細介紹區：左圖右文 */}
      <div className="team-detail-wrapper">
        <div className="team-member-photo">
          {/* 成員照片也用相對路徑 */}
          <img src={`./${selected.image}`} alt={selected.name} />
        </div>
        <div className="team-detail">
          <h2>{selected.name} - {selected.role}</h2>
          {Array.isArray(selected.description) ? (
            selected.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))
          ) : (
            <p>{selected.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
