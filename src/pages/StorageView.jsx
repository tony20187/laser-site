// src/pages/StorageView.jsx
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import "../styles/StorageView.css";
import Navbar5 from "../components/Navbar5";

const HINT_TEXT = "請點擊倉儲系統標籤進行解析";

// 固定底圖座標基準（只用來算百分比）
const STORAGE_IMG_WIDTH = 836;
const STORAGE_IMG_HEIGHT = 868;

function StorageView() {
  /* ========== 主圖來源 ========== */
  const srcCandidates = useMemo(
    () => [
      "./倉儲-new.png",
      "./倉儲.png",
      `${import.meta.env.BASE_URL || "/"}倉儲-new.png`,
      "/倉儲-new.png",
    ],
    []
  );

  const [imgSrcIdx, setImgSrcIdx] = useState(0);
  const imgSrc = srcCandidates[Math.min(imgSrcIdx, srcCandidates.length - 1)];
  const onImgError = () => {
    setImgSrcIdx((i) => Math.min(i + 1, srcCandidates.length - 1));
  };

  /* ========== 狀態 ========== */
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);
  const [ttsEnabled, setTtsEnabled] = useState(true);

  /* ========== 語音控制 ========== */
  const stopSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  const speakHint = () => {
    if (!ttsEnabled) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    stopSpeech();
    const u = new SpeechSynthesisUtterance(HINT_TEXT);
    u.lang = "zh-TW";
    u.rate = 1;
    window.speechSynthesis.speak(u);
  };

  const speakFromText = (arr) => {
    if (!ttsEnabled || !arr || !arr.length) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    stopSpeech();
    const u = new SpeechSynthesisUtterance(arr.join("。"));
    u.lang = "zh-TW";
    u.rate = 1;
    window.speechSynthesis.speak(u);
  };

  /* ========== 蜜蜂位置 ========== */
  const [beePos, setBeePos] = useState(null);
  useEffect(() => {
    const updateBeePos = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth <= 900) {
        setBeePos(null);
      } else {
        setBeePos({ right: 24, bottom: 24 });
      }
    };
    updateBeePos();
    window.addEventListener("resize", updateBeePos);
    return () => window.removeEventListener("resize", updateBeePos);
  }, []);

  const beeStyle = beePos
    ? {
        position: "fixed",
        right: `${beePos.right}px`,
        bottom: `${beePos.bottom}px`,
        pointerEvents: "none",
        zIndex: 80,
      }
    : {};

  /* ========== 熱區座標（px 基準，渲染時轉百分比） ========== */
  const hotspots = useMemo(
    () => [
      {
        id: "rack",
        name: "多層料架 (Storage Rack)",
        box: { top: 110, left: 340, width: 260, height: 360 },
        label: { top: 300, left: 700, side: "right" },
        pages: [
          {
            img: "./zoom/ASF-all.png",
            text: [
              "多層料架用來存放原料板與加工完畢的板材。",
              "可依材質、板厚或工單分層管理，搭配系統自動排程叫料。",
              "料架系統支援夜間無人加工，對於追求高產能的工廠尤為重要。",
              "料架不只是放板材的架子，它是工廠自動化的重要核心模組。",
            ],
          },
          {
            img: "./zoom/ASF-all.png",
            text: [
              "核心功能與優勢",
              "‧提升空間利用率：垂直堆疊板材，省地面空間。",
              "‧縮短等待時間：可提前備料，加工不中斷。",
              "‧支援多材質：快速切換不同材質與板厚。",
              "‧降低人力負擔：自動取放料，減少搬運風險。",
            ],
          },
        ],
      },
      {
        id: "pallet",
        name: "倉儲系統總類(Storage Categories)",
        box: { top: 360, left: 345, width: 260, height: 160 },
        label: { top:120 , left: 730, side: "right" },
        pages: [
          {
            img: "./zoom/LST.jpg",
            text: [
              "三種常見型式",
              "(1)LST 雙托盤：",
              "一張在機台內加工另一張在外部離線備料>",
              "當加工完成後，托盤會立即交換，",
              "新的板材瞬間送入機台，",
              "大幅縮短換料時間，讓設備幾乎不停機運作。",
              ],
          },
          {
            img: "./zoom/AS.jpg",
            text: [
              "(2)AS 多層托盤：",
              "可儲存多層板材。",
              "支援不同材質、不同板厚的集中管理，",
              "能讓機台在加工時自動調用下一批材料，",
              "非常適合長時間連續運轉、夜間無人化生產。",
              ],
          },
          {
            img: "./zoom/ASF.jpg",
            text: [
              "(3)ASF／ASFH 叉式托盤：",
              "高速換片效率最高，適合大量生產。",
              "透過「叉式機構」伸入托盤下方，將整張板材快速抽出或送入。",
              "ASF／ASFH 能將切完的板材自動堆疊成整齊棧板，",
              "減少人工分類與搬運，提高整體物流效率。",
              ],
          },
        ],
      },
      
      {
        id: "fence",
        name: "安全護欄 (Safety Fence)",
        box: { top: 420, left: 120, width: 120, height: 260 },
        label: { top: 420, left: -30, side: "left" },
        pages: [
          {
            img: "./zoom/柵欄.png",
            text: [
              "紅外線柵欄會在機台危險區域形成一道不可見的光幕。",
              "只要有人體或異物進入：",
              "‧光束被遮斷。",
              "‧系統立即判定入侵。",
              "‧機台立刻停止運轉。",
            ],
          },
          {
            img: "./zoom/柵欄-2.png",
            text: [
              "安全防護重點：",
              "‧ 避免托盤升降時夾傷人員。",
              "‧ 避免移動機構撞擊推車或堆高機。",
              "‧ 避免板材滑落造成人員受傷。",
              "操作人員需遵守管制區標示，不可跨越黃線或拆除護欄。",
            ],
          },
        ],
      },
      {
        id: "console",
        name: "操作面板 (Operation Console)",
        box: { top: 510, left: 170, width: 90, height: 180 },
        label: { top: 570, left: -110, side: "left" },
        pages: [
          {
            img: "./zoom/Express-collage.png",
            text: [
              "操作面板可進行上料、下料、叫料、急停等基本操作。",
              "螢幕顯示托盤位置、庫存狀態與警報訊息。",
              "與雷射機台或排程系統串接後，可依生產順序自動叫料。",
            ],
          },
          {
            img: "./zoom/c6a854e1-4753-43e3-a9a5-c3a8c255335b.png",
            text: [
              "建議操作方式：",
              "‧ 依標準作業流程 (SOP) 進行進出料。",
              "‧ 不熟悉倉儲流程者，不得單獨操作。",
              "‧ 當現場發生異常時，優先使用急停並通知主管。",
            ],
          },
        ],
      },
    ],
  );

  /* ========== 開熱區 ========== */
  const openHotspot = (h) => {
    stopSpeech();
    setActive(h);
    setPage(0);
    setShow(true);
  };

  const handleSpot = (h) => () => {
    openHotspot(h);
  };

  /* ========== 關閉 ========== */
  const closeModal = () => {
    stopSpeech();
    setShow(false);
    setTimeout(() => {
      setActive(null);
      setPage(0);
    }, 150);
  };

  /* ========== 目前頁內容 ========== */
  let detailSrc = imgSrc;
  let currentText = [];
  if (active) {
    const safePage = Math.max(
      0,
      Math.min(page, active.pages.length - 1)
    );
    const p = active.pages[safePage];
    currentText = p.text || [];
    detailSrc = p.img || imgSrc;
  }

  /* ========== 切換分頁 ========== */
  const goPrev = () => {
    if (!active) return;
    const n = active.pages.length;
    setPage((p) => (p - 1 + n) % n);
  };

  const goNext = () => {
    if (!active) return;
    const n = active.pages.length;
    setPage((p) => (p + 1) % n);
  };

  /* ========== 根據 show/page 自動播語音 or 提示 ========== */
  useEffect(() => {
    if (!ttsEnabled) {
      stopSpeech();
      return;
    }

    if (show && active) {
      speakFromText(currentText);
    } else if (!show) {
      speakHint();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, page, ttsEnabled, active]);

  /* ========== JSX ========== */
  return (
    <div className="sv-root">
      <Navbar5 />

      <div className="sv-header">
        <h2 className="sv-title">雷射倉儲系統部位解析</h2>

        <div className="sv-bee" style={beeStyle}>
          <div className="sv-bee-bubble">{HINT_TEXT}</div>
          <img className="sv-bee-img" src="./bee.png" alt="華谷電機蜜蜂" />
        </div>
      </div>

      {/* ★★★ 主圖：RWD、不溢出、不變形、熱區等比縮放 ★★★ */}
      <div className="sv-wrap">
        <img
          className="sv-img"
          src={imgSrc}
          onError={onImgError}
          alt="雷射倉儲系統"
        />

        {hotspots.map((h) => {
          const box = h.box;
          const label = h.label;

          const boxStyle = {
            top: `${(box.top / STORAGE_IMG_HEIGHT) * 100}%`,
            left: `${(box.left / STORAGE_IMG_WIDTH) * 100}%`,
            width: `${(box.width / STORAGE_IMG_WIDTH) * 100}%`,
            height: `${(box.height / STORAGE_IMG_HEIGHT) * 100}%`,
          };

          const labelStyle = {
            top: `${(label.top / STORAGE_IMG_HEIGHT) * 100}%`,
            left: `${(label.left / STORAGE_IMG_WIDTH) * 100}%`,
          };

          return (
            <React.Fragment key={h.id}>
              {/* 隱形熱區 */}
              <button
                className="sv-spot"
                style={boxStyle}
                onClick={handleSpot(h)}
                type="button"
                aria-label={h.name}
                title={h.name}
              />

              {/* 外側標籤 */}
              <button
                className={`sv-callout sv-callout-${label.side}`}
                style={labelStyle}
                onClick={() => openHotspot(h)}
                type="button"
              >
                <span className="sv-callout-dot" />
                <span className="sv-callout-text">{h.name}</span>
              </button>
            </React.Fragment>
          );
        })}
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

export default StorageView;
