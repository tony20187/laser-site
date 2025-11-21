import React, { useState, useEffect, useRef } from "react";
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
      "🖋️ 雷射打標：標記LOGO、序號、QR碼",
    ],
    image: "./工業應用.png",
  },
  {
    category: "醫療用途",
    icon: "🧑‍⚕️",
    details: [
      "👁️ 近視雷射手術（LASIK）",
      "💊 雷射微創開刀，傷口小復原快",
      "💆 雷射除斑、除毛、嫩膚等醫美應用",
      "🦷 牙科除蛀、齒齦雷射治療",
    ],
    image: "./醫療應用.png",
  },
  {
    category: "通訊與電子",
    icon: "📡",
    details: [
      "🌐 光纖通訊：網路資料傳輸骨幹",
      "📀 光碟雷射讀寫：CD/DVD/藍光碟",
      "📱 雷射微投影顯示技術",
      "🛰️ LiDAR 空間測距：應用於自駕車、地圖測繪",
    ],
    image: "./通訊應用.png",
  },
  {
    category: "科學與軍事",
    icon: "🚀",
    details: [
      "🧪 光譜分析：成分與氣體分析",
      "🧲 實驗室粒子研究與碰撞實驗",
      "🛡️ 軍用雷射：雷射炮、導引、反制武器",
      "🛰️ 太空雷射測距與衛星導航",
    ],
    image: "./軍事應用.png",
  },
];

const Applications = () => {
  const [hoverImage, setHoverImage] = useState("");
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  // 進入畫面時先說明
  useEffect(() => {
    playSpeech("請將滑鼠移到各應用類型，會出現該類型照片");
    return stopSpeech;
  }, []);

  // 移除 emoji 的小工具
  const stripEmoji = (text) => text.replace(/([\u{1F300}-\u{1F9FF}|\u{1F1E6}-\u{1F1FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}])/gu, "").trim();

  // 播放
  const playSpeech = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    synthRef.current.speak(utterance);
    utteranceRef.current = utterance;
  };

  // 停止
  const stopSpeech = () => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  // 滑鼠進入
  const handleMouseEnter = (item) => {
    setHoverImage(item.image);
    // 去除每個細節的 emoji
    const detailsWithoutEmoji = item.details.map(stripEmoji);
    playSpeech(`${item.category}：${detailsWithoutEmoji.join("，")}`);
  };

  // 滑鼠離開
  const handleMouseLeave = () => {
    stopSpeech();
    setHoverImage("");
    playSpeech("請將滑鼠移到各應用類型，會出現該類型照片");
  };

  return (
    <div className="applications-container">
      <Navbar4 />
      <h1 className="applications-title">🌍 雷射應用總覽</h1>
      <p className="applications-subtext">從工業到醫療，從通訊到太空，雷射無所不在。</p>

      <div className="applications-grid">
        {applicationsData.map((item, index) => (
          <div
            key={index}
            className="application-card"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <h2>{item.icon} {item.category}</h2>
            <ul>
              {item.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {hoverImage && (
        <img src={hoverImage} alt="應用照片" className="applications-hover-image" />
      )}

      {!hoverImage && (
        <>
          <div className="applications-dialog">
            請將滑鼠移到各應用類型<br />會出現該類型照片
          </div>
          <img src="./bee.png" alt="bee" className="applications-bee" />
        </>
      )}
    </div>
  );
};

export default Applications;
