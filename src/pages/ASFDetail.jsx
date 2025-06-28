import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar2";
import "../styles/ASFDetail.css";

function ASFDetail() {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);
  const hasSpokenRef = useRef(false);

  const speak = (text) => {
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = 1;
    synthRef.current.speak(utterance);
    utteranceRef.current = utterance;
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  // ✅ 頁面一進入自動播放對話框提示語音
  useEffect(() => {
    const init = new SpeechSynthesisUtterance(" ");
    init.lang = "zh-TW";
    window.speechSynthesis.speak(init); // 解決首次無聲問題

    setTimeout(() => {
      if (!hasSpokenRef.current) {
        const text = document.querySelector(".bee-speech-bubble")?.innerText;
        if (text) {
          speak(text);
          hasSpokenRef.current = true;
        }
      }
    }, 500);

    return () => stopSpeech();
  }, []);

  return (
    <div className="asf-detail-page">
      <Navbar />

      <div className="asf-content">
        <div className="text-block">
          <h2 onMouseEnter={() => speak("ASF-EU 自動上下料料塔")} onMouseLeave={stopSpeech}>
            ASF-EU 自動上/下料料塔
          </h2>

          <h4 onMouseEnter={() => speak("Automatic Storage Feeder")} onMouseLeave={stopSpeech}>
            Automatic Storage Feeder
          </h4>

          <p
            onMouseEnter={() =>
              speak("本設備搭配 AMNC 控制器，支援自動排程與無縫切換材料，實現高效率自動化流程。")
            }
            onMouseLeave={stopSpeech}
          >
            本設備搭配 AMNC 控制器，支援自動排程與無縫切換材料，實現高效率自動化流程。
          </p>

          <h3 onMouseEnter={() => speak("功能介紹")} onMouseLeave={stopSpeech}>
            功能介紹
          </h3>

          <ul>
            <li
              onMouseEnter={() =>
                speak("自動上料與下料：將原料板材吸取並傳送至雷射加工台，加工完成後自動回收成品。")
              }
              onMouseLeave={stopSpeech}
            >
              🔹 自動上／下料：將原料板材吸取並傳送至雷射加工台，加工完成後自動回收成品。
            </li>
            <li
              onMouseEnter={() =>
                speak("多層板材儲存：依材質厚度分類，每層可承重兩噸。")
              }
              onMouseLeave={stopSpeech}
            >
              🔹 多層板材儲存：依材質厚度分類，每層可承重 2 噸。
            </li>
            <li
              onMouseEnter={() =>
                speak("自動換料：根據任務順序自動更換板材與加工批次，減少人工操作。")
              }
              onMouseLeave={stopSpeech}
            >
              🔹 自動換料：根據任務順序自動更換板材與加工批次，減少人工操作。
            </li>
          </ul>

          <h3 onMouseEnter={() => speak("系統優勢")} onMouseLeave={stopSpeech}>
            系統優勢
          </h3>

          <ul>
            <li
              onMouseEnter={() =>
                speak("夜間無人運轉：支援 Lights-out 加工，降低人力成本。")
              }
              onMouseLeave={stopSpeech}
            >
              ✅ 夜間無人運轉：支援 Lights-out 加工，降低人力成本。
            </li>
            <li
              onMouseEnter={() =>
                speak("效率與省力：大幅減少人力，適合應對人力短缺。")
              }
              onMouseLeave={stopSpeech}
            >
              ✅ 效率與省力：大幅減少人力，適合應對人力短缺。
            </li>
          </ul>
        </div>

        <div className="image-block">
          <img src="./03_ENSISASFH_transparent.png" alt="ASF自動料塔" />
        </div>
      </div>

      {/* ✅ 蜜蜂與對話框提示固定區塊 */}
      <div className="ASFbee-floating-hint">
        <div className="ASFbee-floating-hint-inner">
          <div className="bee-speech-bubble">點擊段落會播放語音!!</div>
          <img src="./bee.png" alt="提示蜜蜂" className="bee-image" />
        </div>
      </div>
    </div>
  );
}

export default ASFDetail;
