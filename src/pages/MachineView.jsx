// src/pages/MachineView.jsx
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import "../styles/MachineView.css";
import Navbar5 from "../components/Navbar5";

const HINT_TEXT = "請點擊部位藍框進行解析";

function MachineView() {
  /* ========== 背景主圖 ========== */
  const srcCandidates = useMemo(
    () => [
      "./9000w-view-new.png",
      "./9000w-view.png",
      `${import.meta.env.BASE_URL || "/"}9000w-view-new.png`,
      "/9000w-view-new.png",
    ],
    []
  );

  const [imgSrcIdx, setImgSrcIdx] = useState(0);
  const imgSrc = srcCandidates[Math.min(imgSrcIdx, srcCandidates.length - 1)];
  const onImgError = () => {
    setImgSrcIdx((i) => Math.min(i + 1, srcCandidates.length - 1));
  };

  const wrapRef = useRef(null);

  /* ========== 狀態 ========== */
  const [active, setActive] = useState(null);  // 目前哪一個熱點
  const [show, setShow] = useState(false);     // modal 是否顯示
  const [page, setPage] = useState(0);         // 熱點內第幾頁
  const [ttsEnabled, setTtsEnabled] = useState(true); // 文字導覽開關

  const stopSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  /* ========== 熱點設定 ========== */
  const hotspots = useMemo(
    () => [
      {
        id: "panel",
        name: "控制面板 (Control Panel)",
        box: { top: 45, left: 0, width: 15, height: 13 },
        pages: [
          {
            img: "./zoom/3i-view-new.png",
            text: [
              "AMNC 3i 觸控介面，三大特點：",
              "1) Intelligent（智慧化）：",
              "‧數據化 / 參數化，可支援決策。",
              "2) Interactive（互動化）：",
              "‧介面友善、操作直覺、連通性佳。",
              "3) Integrated（整合化）：",
              "設計 / 程式 / 機台 / 維護一體化。",
            ],
          },
          {
            img: "./zoom/噴嘴影像檢測&自動噴嘴中心校正裝置.jpg",
            text: [
              "光纖雷射的 3i 智慧功能包含：",
              "‧i-Nozzle Checker（噴嘴檢查）",
              "‧i-Optics Clean（鏡片檢查）",
              "‧自動邊緣找板（Auto teach）",
              "控制面板具備：",
              "‧ 加工排程、即時監控、作業引導。",
              "‧ 生產履歷與警報記錄查詢，方便追溯。",
            ],
          },
          {
            img: "./zoom/保護鏡.jpg",
            text: [
              "i-Optics Clean（鏡片自動偵測）",
              "‧鏡片汙點",
              "‧鏡片燒痕",
              "‧鏡片壽命",
              "這能避免切到一半燒穿 Nozzle。",
            ],
          },
        ],
      },
      {
        id: "window",
        name: "觀察視窗 (Protective Window)",
        box: { top: 43, left: 20, width: 31, height: 21 },
        pages: [
          {
            img: "./zoom/觀察視窗.jpg",
            text: [
              "觀察視窗是雷射加工區的「防護視窗」",
              "讓操作員能在不暴露於雷射的情況下檢查：",
              "‧ 火花狀況",
              "‧ 穿孔是否正常",
              "‧ 噴嘴是否卡料",
              "‧ 板材是否因熱能變形",
              "‧ 是否有異常反射",
              "同時防止雷射穿透，保護操作人眼睛。",
            ],
          },
          {
            img: "./zoom/波長.png",
            text: [
              "光纖雷射波長為 1064 nm（近紅外線）",
              "這種雷射肉眼看不到，",
              "傷害是「不可逆的角膜與視網膜吸收」。",
            ],
          },
          {
            text: [
              "強化雷射防護玻璃。",
              "抑制飛濺與外洩，同時維持可視性與安全性。",
              "玻璃具耐熱塗層，長時監看不易霧化。",
              "維護週期可由系統提示提醒更換。",
            ],
          },
        ],
      },
      {
        id: "beam",
        name: "ENSIS 光束控制 (ENSIS Beam Control)",
        box: { top: 42, left: 73, width: 5, height: 18 },
        pages: [
          {
            img: "./zoom/LS.png",
            text: [
              "Laser Oscillator Unit（雷射震盪器模組）",
              "又可稱：",
              "‧Fiber Laser Source（光纖雷射源）",
              "‧Laser Generator（雷射發生器）",
              "‧Beam Source Unit（光束源模組）",
              "‧Resonator（震盪腔，光纖版）",
              "這個地方負責把電能轉換成雷射能量。",
            ],
          },
          {
            img: "./zoom/LD.png",
            text: [
              "震盪器內部結構。",
              "(1) LD 模組（Laser Diode Modules）",
              "‧光纖雷射的能量來源。",
              "‧幾十組 laser diodes 集合輸出。",
              "‧決定你是 3kW、6kW、9kW 或 12kW。",
              "等級越高，LD 數量越多，震盪器更大、更熱。",
            ],
          },
          {
            img: "./zoom/發振.png",
            text: [
              "(2) 光纖耦合器（Fiber Coupler）",
              "負責把所有 diode 的光集中到一條主光纖（Delivery Fiber）裡。",
              "這一步非常困難，會影響：",
              "‧光束品質（Beam Quality）",
              "‧光斑大小",
              "‧穩定度",
              "‧切割品質",
              "耦合器壞掉，光就會不穩，容易切破邊、燒焦、崩光。",
            ],
          },
          {
            img: "./zoom/view.png",
            text: [
              "(3) 雷射能量監測（Power Monitor Module）",
              "震盪器內建：",
              "‧穿透功率監測",
              "‧反射光監測",
              "‧輸出波形偵測",
              "‧防止鏡片燒毀機制",
              "若反射光過強（例如切鋁或 SUS 亮面），",
              "系統會自動降能量，必要時直接關閉輸出避免燒光纖。",
            ],
          },
          {
            img: "./zoom/模態.jpg",
            text: [
              "自動調整光束模式。",
              "厚板與薄板都能兼顧切割速度與品質。",
              "材質切換時，自動帶入對應工藝參數表。",
              "降低調機時間，提高加工一致性。",
            ],
          },
        ],
      },
      {
        id: "shuttle",
        name: "交換台 (Shuttle Table)",
        box: { top: 50, left: 86, width: 10, height: 20 },
        pages: [
          {
            img: "./zoom/crest_3.jpg",
            text: [
              "機台配備自動換盤系統。",
              "前一張板材加工完成後，",
              "可以立即切換下一張待加工板材。",
              "整個換盤過程僅需數十秒，",
              "大幅縮短待機時間與人工介入，",
              "確保機台可以連續運轉，提升生產節拍。",
            ],
          },
          {
            img: "./zoom/1.png",
            text: [
              "可與 ASF／ASFH 倉儲整合。",
              "實現板材自動上下料與存取。",
              "能同時運行多批次材料，自動排程上料順序，",
              "明顯提升整體稼動率 (Utilization Rate)。",
            ],
          },
          {
            img: "./zoom/LED.png",
            text: [
              "換盤區域採用全封閉式安全護欄結構。",
              "搭配紅外線或光柵偵測系統。",
              "在換盤或上下料過程中，",
              "若偵測到異物或人員進入，",
              "系統會自動暫停運作，",
              "以提升操作安全等級 (Safety Class)。",
            ],
          },
          {
            img: "./zoom/33.jpg",
            text: [
              "交換台模組支援擴充上、下料機械手臂。",
              "可依生產需求實現全自動無人化生產線。",
              "設計不僅減少人工干預，還能夜間長時間運轉，",
              "大幅提升智慧製造 (Smart Manufacturing) 效率。",
            ],
          },
        ],
      },
    ],
    []
  );

  /* ========== 點擊熱點 ========== */
  const handleSpot = (h) => (e) => {
    // 進入 BOX 時把提示語音關掉
    stopSpeech();

    const btn = e.currentTarget;
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 140);

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());

    setActive(h);
    setPage(0);
    setShow(true);
  };

  /* ========== 關閉視窗 ========== */
  const closeModal = () => {
    stopSpeech();
    setShow(false);
    setTimeout(() => {
      setActive(null);
      setPage(0);
    }, 150);
  };

  /* ========== 當前頁資料 ========== */
  let detailSrc = imgSrc;
  let currentText = [];

  if (active) {
    const pages = active.pages || [];
    const safeIndex = Math.max(
      0,
      Math.min(page, (active.pages?.length || 1) - 1)
    );
    const p = pages[safeIndex] || {};
    currentText = p.text || [];
    if (p.img) detailSrc = p.img;
  }

  /* ========== 上一頁 / 下一頁（環狀） ========== */
  const goPrev = () => {
    if (!active) return;
    const n = active.pages?.length || 1;
    setPage((p) => (p - 1 + n) % n);
  };

  const goNext = () => {
    if (!active) return;
    const n = active.pages?.length || 1;
    setPage((p) => (p + 1) % n);   // 最後一頁再按會回到第 1 頁
  };

  /* ========== 提示語音：請點擊部位藍框進行解析 ========== */
  const speakHint = () => {
    if (
      !ttsEnabled ||
      typeof window === "undefined" ||
      !window.speechSynthesis
    ) {
      return;
    }
    stopSpeech();
    const utter = new SpeechSynthesisUtterance(HINT_TEXT);
    utter.lang = "zh-TW";
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
  };

  /* ========== 內容語音播放 ========== */
  const speakCurrent = () => {
    if (
      !ttsEnabled ||
      !currentText.length ||
      typeof window === "undefined" ||
      !window.speechSynthesis
    ) {
      return;
    }

    stopSpeech();
    const utter = new SpeechSynthesisUtterance(currentText.join("。"));
    utter.lang = "zh-TW";
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
  };

  // BOX 顯示時讀取內容；BOX 關掉時先停掉
  useEffect(() => {
    if (show) {
      speakCurrent();
    } else {
      stopSpeech();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, page, ttsEnabled]);

  // 只要在「雷射解析」畫面、且沒有開 BOX，就播提示
  useEffect(() => {
    if (!show) {
      speakHint();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, ttsEnabled]);

  const toggleTts = () => {
    const next = !ttsEnabled;
    setTtsEnabled(next);
    if (!next) {
      stopSpeech();
    } else {
      if (show) speakCurrent();
      else speakHint();
    }
  };

  /* ========== JSX ========== */
  return (
    <div className="mh-root">
      <Navbar5 />

      {/* 標題 + 蜜蜂說明（導覽列下方，置中 + 右上角） */}
      <div className="mh-header">
        <h2 className="mh-title">雷射機台部位解析</h2>

        <div className="mh-bee">
          <div className="mh-bee-bubble">請點擊部位藍框進行解析</div>
          <img
            className="mh-bee-img"
            src="./bee.png"
            alt="華谷電機蜜蜂"
          />
        </div>
      </div>

      {/* 主圖＋熱點 */}
      <div className="mh-wrap" ref={wrapRef}>
        <img
          className="mh-img"
          src={imgSrc}
          alt="AMADA ENSIS 9000W 機台"
          onError={onImgError}
        />

        {hotspots.map((h) => (
          <button
            key={h.id}
            className={`mh-spot ${show ? "dim" : ""}`}
            style={{
              top: `${h.box.top}%`,
              left: `${h.box.left}%`,
              width: `${h.box.width}%`,
              height: `${h.box.height}%`,
            }}
            onClick={handleSpot(h)}
            aria-label={h.name}
            title={h.name}
          >
            <span className="mh-spot-ring" />
          </button>
        ))}
      </div>

{/* ===== MODAL ===== */}
      {active && (
        <div className={`sv-modal ${show ? "sv-show" : ""}`} onClick={closeModal}>
          <div className="sv-detail" onClick={(e) => e.stopPropagation()}>
            <img className="sv-detail-img" src={detailSrc} alt={active.name} />

            <div className="sv-info">
              <h3>{active.name}</h3>

              {currentText.map((t, i) => (
                <p key={i}>{t}</p>
              ))}

              {/* 分頁 + 關閉按鈕同一行 */}
              <div className="sv-pager">
                {active.pages.length > 1 && (
                  <>
                    <button className="sv-btn" onClick={goPrev} type="button">
                      ← 上一頁
                    </button>

                    <span className="sv-page-no">
                      {page + 1} / {active.pages.length}
                    </span>

                    <button className="sv-btn" onClick={goNext} type="button">
                      下一頁 →
                    </button>
                  </>
                )}

                <button className="sv-btn" onClick={closeModal} type="button">
                  ✕ 關閉視窗
                </button>
              </div>

              {/* 語音控制 */}
              <div className="sv-pager">
                <button
                  className="sv-btn"
                  type="button"
                  onClick={() => {
                    const next = !ttsEnabled;
                    setTtsEnabled(next);
                    if (!next) {
                      stopSpeech();
                    } else {
                      if (show) speakFromText(currentText);
                      else speakHint();
                    }
                  }}
                >
                  {ttsEnabled ? "🔊 語音已開啟" : "🔈 語音已關閉"}
                </button>

                {ttsEnabled && (
                  <button
                    className="sv-btn"
                    type="button"
                    onClick={() => speakFromText(currentText)}
                  >
                    ▶ 重新播放語音
                  </button>
                )}
              </div>

              <div className="sv-hint">點擊外側關閉</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MachineView;
