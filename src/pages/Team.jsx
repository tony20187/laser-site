import React, { useState, useEffect, useRef } from "react";
import "../styles/Team.css";
import Navbar from "../components/Navbar";

const members = [
  {
    name: "黃俊源",
    role: "機工課-課長",
    description: [
      "1.年資:15年以上",
      "2.執照:固定式起重機，堆高機操作技術士與高壓氣體操作人員證",
      "3.熟悉光纖雷射與CO2雷射機台",
      "4.雷射條件參數修改",
      "5.管件切削機與數值控制沖床操作",
      "6.熟悉機台維護與保養",
      "7.熟識機台狀況與問題排除",
      "8.管件二次加工與骨架切割技術",
      "9.確保加工物品質與精準度",
      "10.確保生產順暢無誤",
    ],
    image: "黃俊源.png",
  },
  {
    name: "李書宏",
    role: "機工課雷射組-副組長",
    description: [
      "1.年資:12年以上",
      "2.執照:固定式起重機，堆高機操作技術士",
      "3.熟悉光纖雷射與CO2雷射機台",
      "4.雷射條件參數修改",
      "5.熟悉機台維護與保養",
      "6.熟識機台狀況與問題排除",
      "7.管件二次加工與骨架切割技術",
      "8.確保加工物品質與精準度",
      "9.確保生產順暢無誤",
    ],
    image: "李書宏.png",
  },
  {
    name: "洪銘澤",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "1.年資:5年以上",
      "2.執照:固定式起重機",
      "3.熟悉光纖雷射與CO2雷射機台",
      "4.雷射條件參數修改",
      "5.熟悉機台維護與保養",
      "6.管件二次加工與骨架切割技術",
      "7.確保加工物品質與精準度",
    ],
    image: "洪銘澤.png",
  },
  {
    name: "陳泓憲",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "1.年資:5年以上",
      "2.執照:固定式起重機",
      "3.熟悉光纖雷射與CO2雷射機台",
      "4.雷射條件參數修改",
      "5.熟悉機台維護與保養",
      "6.管件二次加工與骨架切割技術",
      "7.確保加工物品質與精準度",
    ],
    image: "陳泓憲.png",
  },
  {
    name: "黃逸村",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "1.年資:5年以上",
      "2.熟悉光纖雷射與CO2雷射機台",
      "3.雷射條件參數修改",
      "4.熟悉機台維護與保養",
      "5.管件二次加工與骨架切割技術",
      "6.確保加工物品質與精準度",
    ],
    image: "黃逸村.png",
  },
  {
    name: "馬朝承",
    role: "機工課雷射組-雷射機台操作人員",
    description: [
      "1.年資:15年以上",
      "2.熟悉現場環境作業規範",
      "3.熟悉機台維護與保養",
      "4.多年折床經驗與高端技術",
    ],
    image: "馬朝承.png",
  },
  {
    name: "莊欣怡",
    role: "機工課雷射組-排版人員",
    description: [
      "1.年資:3年以上",
      "2.熟悉 CAD 圖面",
      "3.熟練使用AMADA的LS SMART排版軟體",
      "4.熟練使用AlmaCAM自動排版軟體",
      "5.熟悉現場環境作業規範",
      "6.規劃共邊切割、微接點（Micro Joint）技術",
      "7.精準安排切割路徑與切割順序，降低熱變形",
      "8.用剩料管理系統，持續追求零浪費",
    ],
    image: "no.png",
  },
  {
    name: "林岑妍",
    role: "機工課雷射組-排版人員",
    description: [
      "1.年資:1年以上",
      "2.熟悉 CAD 圖面",
      "3.熟練使用AMADA的LS SMART排版軟體",
      "4.熟悉現場環境作業規範",
      "5.規劃共邊切割、微接點（Micro Joint）技術",
      "6.精準安排切割路徑與切割順序，降低熱變形",
      "7.善用剩料管理系統，持續追求零浪費",
    ],
    image: "林岑妍.png",
  },
];

const Team = () => {
  const [selected, setSelected] = useState(members[0]);
  const utteranceRef = useRef(null);

  useEffect(() => {
    playIntro();
    return () => stopSpeaking();
  }, []);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
  };

  const playIntro = () => {
    stopSpeaking();
    const text =
      "華谷電機雷射團隊，用光，雕塑未來。從微米到毫米，我們以光束穿梭鋼鐵之間，精準切割，智慧控制，讓工藝與科技無縫銜接。我們是一群雷射工藝工程師，更是製造智慧化的推手，用專業與創新，打造效率與品質兼備的先進解決方案。華谷電機，精密雷射，無限可能。";
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-TW";
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
    utteranceRef.current = utter;
  };

  const playMember = (member) => {
    stopSpeaking();
    const text = `${member.name}，${member.role}，${member.description.join("，")}`;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-TW";
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
    utteranceRef.current = utter;
  };

  const handleSelect = (m) => {
    setSelected(m);
    playMember(m);
  };

  return (
    <div className="team-container">
      <Navbar />

      {/* ✅ 右上角「重聽一次」按鈕 */}
      <button className="replay-button" onClick={playIntro}>
        🔊 重聽一次
      </button>

      <h1 className="team-title">團隊介紹</h1>

      <div className="team-top">
        <div className="team-photo-wrapper">
          <img src="./S__18219011-1.png" alt="團隊合照" className="team-photo" />
        </div>
        <div className="team-brand">
          <h3>華谷電機雷射團隊｜用光，雕塑未來</h3>
          <p>
            從微米到毫米，我們以光束穿梭鋼鐵之間，<br />
            精準切割、智慧控制，讓工藝與科技無縫銜接。<br />
            我們是一群雷射工藝工程師，更是製造智慧化的推手，<br />
            用專業與創新，打造效率與品質兼備的先進解決方案。
          </p>
          <strong>華谷電機 — 精密雷射，無限可能</strong>
        </div>
      </div>

      <div className="team-menu">
        {members.map((m) => (
          <button
            key={m.name}
            className={`team-menu-btn ${selected.name === m.name ? "active" : ""}`}
            onClick={() => handleSelect(m)}
          >
            {m.name}
          </button>
        ))}
      </div>

      <div className="team-detail-wrapper">
        <div className="team-member-photo">
          <img src={`./${selected.image}`} alt={selected.name} />
        </div>
        <div className="team-detail">
          <h2>{selected.name} - {selected.role}</h2>
          {selected.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
