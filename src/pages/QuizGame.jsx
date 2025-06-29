import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar";
import "../styles/QuizGame.css";

const allQuestions = [
  {
    question: "華谷電機 目前有幾台雷射機台呢?",
    options: ["A. 2", "B. 3", "C. 4"],
    answer: "C. 4"
  },
  {
    question: "華谷電機 雷射機台屬於何種切割方式?",
    options: ["A. 雷射切割", "B. 水刀切割", "C. 等離子切割"],
    answer: "A. 雷射切割"
  },
  {
    question: "華谷電機 雷射機台是哪家廠牌雷射?",
    options: ["A. TRUMPF", "B. MAZAK", "C. AMADA"],
    answer: "C. AMADA"
  },
  {
    question: "產生雷射光的三個基本要素包括：增益媒質、激發來源，以及哪一項？",
    options: ["A. 聚光鏡", "B. 共振腔", "C. 冷卻水箱"],
    answer: "B. 共振腔"
  },
  {
    question: "下列哪個比喻最能說明雷射的能量集中特性？",
    options: ["A. 電風扇轉速", "B. 放大鏡聚焦太陽光", "C. 燈泡照明"],
    answer: "B. 放大鏡聚焦太陽光"
  },
  {
    question: "SUS430 的磁性特性為？",
    options: ["A. 無磁性", "B. 強磁性", "C. 有磁性"],
    answer: "C. 有磁性"
  },
  {
    question: "華谷電機擁有的 ENSIS AJ 雷射機台功率有哪些？",
    options: ["A. 1500W / 6000W", "B. 3000W / 9000W", "C. 2000W / 5000W"],
    answer: "B. 3000W / 9000W"
  },
  {
    question: "WACS II 技術的功能是什麼？",
    options: ["A. 裁切塑膠", "B. 減少反光", "C. 冷卻厚板加工避免過熱"],
    answer: "C. 冷卻厚板加工避免過熱"
  },
  {
    question: "ASF-EU 自動料塔的每層最大承重是多少？",
    options: ["A. 1 噸", "B. 2 噸", "C. 3 噸"],
    answer: "B. 2 噸"
  },
  {
    question: "哪個系統可以自動排程並支援無縫換料？",
    options: ["A. CNC 控制器", "B. AMNC 控制器", "C. VNC 軟體"],
    answer: "B. AMNC 控制器"
  },
  {
    question: "雷射光與一般光最大的不同是？",
    options: ["A. 能量低", "B. 顏色多", "C. 單一波長"],
    answer: "C. 單一波長"
  },
  {
    question: "雷射可以聚焦產生什麼效果？",
    options: ["A. 冷卻", "B. 高溫熔融", "C. 光線擴散"],
    answer: "B. 高溫熔融"
  },
  {
    question: "雷射可用在哪一項？",
    options: ["A. 洗衣", "B. 金屬切割", "C. 種花"],
    answer: "B. 金屬切割"
  },
  {
    question: "雷射英文縮寫 LASER 的 L 是什麼意思？",
    options: ["A. Light", "B. Large", "C. Level"],
    answer: "A. Light"
  },
  {
    question: "雷射可以產生哪種現象來放大光？",
    options: ["A. 光合作用", "B. 受激輻射", "C. 熱對流"],
    answer: "B. 受激輻射"
  },
  {
    question: "SUS304 不鏽鋼具備哪一項特性？",
    options: ["A. 高導電性", "B. 可磁化", "C. 抗腐蝕"],
    answer: "C. 抗腐蝕"
  },
  {
    question: "SUS430 的主要用途不包括？",
    options: ["A. 建築裝飾", "B. 高溫壓力鍋", "C. 廚房器具"],
    answer: "B. 高溫壓力鍋"
  },
  {
    question: "SPCC 為何容易成型？",
    options: ["A. 軟硬適中", "B. 有塗層", "C. 高含碳"],
    answer: "A. 軟硬適中"
  },
  {
    question: "SUS304 的組成金屬主要是？",
    options: ["A. 鐵與鋅", "B. 鉻與鎳", "C. 銅與鋁"],
    answer: "B. 鉻與鎳"
  },
  {
    question: "ENSIS 系列的 Variable Beam Control 功能可？",
    options: ["A. 自動調光束", "B. 調整機殼", "C. 關閉電源"],
    answer: "A. 自動調光束"
  },
  {
    question: "SILKY CUT 是哪種技術？",
    options: ["A. 降噪", "B. 平滑切割邊緣", "C. 抗氧化層"],
    answer: "B. 平滑切割邊緣"
  },
  {
    question: "Clean Fast Cut 的主要優勢是？",
    options: ["A. 變色效果", "B. 降低成本", "C. 改變形狀"],
    answer: "B. 降低成本"
  },
  {
    question: "ASF-EU 可自動完成哪些任務？",
    options: ["A. 洗料", "B. 換料與回收", "C. 檢驗"],
    answer: "B. 換料與回收"
  },
  {
    question: "ASF-EU 支援無人化作業的關鍵功能是？",
    options: ["A. 自動開關門", "B. Lights-out 加工", "C. 光感應啟動"],
    answer: "B. Lights-out 加工"
  },
  {
    question: "每層承重 2 噸主要用來儲放什麼？",
    options: ["A. 原料板材", "B. 控制器", "C. 模型"],
    answer: "A. 原料板材"
  },
  {
    question: "ASF-EU 的控制系統名稱是？",
    options: ["A. XYZ-CNC", "B. AMNC", "C. LAS-TM"],
    answer: "B. AMNC"
  },
  {
    question: "ASF-EU 有哪個優勢？",
    options: ["A. 提供冷氣", "B. 減少人力與提高效率", "C. 增加電費"],
    answer: "B. 減少人力與提高效率"
  },
  {
    question: "SPCC 最適合哪種加工？",
    options: ["A. 彎折與沖壓", "B. 高溫熔煉", "C. 表面鍍金"],
    answer: "A. 彎折與沖壓"
  },
  {
    question: "雷射切割的主要優點為？",
    options: ["A. 大量耗材", "B. 非接觸加工", "C. 高噪音"],
    answer: "B. 非接觸加工"
  },
  {
    question: "SUS304 的抗腐蝕能力來源於哪種金屬元素？",
    options: ["A. 鋅（Zn）", "B. 鉻（Cr）", "C. 銅（Cu）"],
    answer: "B. 鉻（Cr）"
  }
];




function QuizGame() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [synth] = useState(window.speechSynthesis);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");
  const [resultSpoken, setResultSpoken] = useState(false);
  const [questionDone, setQuestionDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    speak("小試身手一下吧！");
  }, []);

  useEffect(() => {
    if (questions.length > 0 && !showScore && started) {
      speak(questions[currentIndex].question, () => setQuestionDone(true));
    }
  }, [questions, currentIndex, showScore, started]);

  useEffect(() => {
    if (showScore && finalMessage === "") {
      const message = getScoreMessage(score);
      setFinalMessage(message);
      speak(message, () => setResultSpoken(true));
    }
  }, [showScore, finalMessage]);

  const speak = (text, onEnd = null) => {
    stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-TW";
    setIsSpeaking(true);
    utter.onend = () => {
      setIsSpeaking(false);
      if (onEnd) onEnd();
    };
    synth.speak(utter);
  };

  const stop = () => {
    synth.cancel();
    setIsSpeaking(false);
  };

  const getScoreMessage = (finalScore) => {
    switch (finalScore) {
      case 5:
        return "滿分 恭喜你成為雷射達人！";
      case 4:
        return "很棒了 離專家只差一點！";
      case 3:
        return "不錯哦 繼續加油！";
      case 2:
        return "可以更好 再挑戰看看吧！";
      case 1:
        return "加油喔 下次一定行！";
      default:
        return "別氣餒，繼續努力！";
    }
  };

  const initQuiz = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    stop();
    setFinalMessage("");
    setResultSpoken(false);
    setQuestionDone(false);
    setStarted(true);
  };

  const handleAnswer = (option) => {
    stop();
    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setQuestionDone(false);
      } else {
        setShowScore(true);
      }
    }, 50);
  };

  const handleHoverButton = (text) => {
    if ((showScore && resultSpoken) || (!started && !isSpeaking)) {
      speak(text);
    }
  };

  return (
    <div className="quiz-game-full-container">
      <Navbar1 />
      <img
        src="./A-05-01-1.png"
        className="QGimg-top-left"
        alt="top left"
        draggable="false"
      />
      <img
        src="./A-05-01-2.png"
        className="QGimg-bottom-right"
        alt="bottom right"
        draggable="false"
      />

      <div className="quiz-game-container">
        {!started ? (
          <div className="start-screen">
            <h2>🎮 小試身手一下吧！</h2>
            <div className="button-group">
              <button
                className="quiz-btn"
                onClick={initQuiz}
                onMouseEnter={() => handleHoverButton("開始測驗")}
                onMouseLeave={stop}
              >
                🚀 開始測驗
              </button>
              <button
                className="quiz-btn"
                onClick={() => {
                  stop();
                  navigate("/main");
                }}
                onMouseEnter={() => handleHoverButton("返回首頁")}
                onMouseLeave={stop}
              >
                🏠 返回首頁
              </button>
            </div>
          </div>
        ) : showScore ? (
          <div className="score-block">
            <h2>
              你答對了 <span style={{ color: "#16a34a" }}>{score} / {questions.length}</span> 題 🎉
            </h2>
            <p>{finalMessage}</p>
            <div className="button-group">
              <button
                className="quiz-btn"
                onClick={initQuiz}
                onMouseEnter={() => handleHoverButton("重新再玩")}
                onMouseLeave={stop}
              
              >
                🔄 重新再玩
              </button>
              <button
                className="quiz-btn"
                onClick={() => {
                  stop();
                  navigate("/main");
                }}
                onMouseEnter={() => handleHoverButton("返回首頁")}
                onMouseLeave={stop}
                
              >
                🏠 返回首頁
              </button>
            </div>
          </div>
        ) : questions.length > 0 ? (
          <div className="question-block">
            <h3 className="question-title">{questions[currentIndex].question}</h3>
            <div className="options-block">
              {questions[currentIndex].options.map((opt, idx) => (
                <button
                  className="quiz-btn"
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p>載入中...</p>
        )}
      </div>
    </div>
  );
}

export default QuizGame;