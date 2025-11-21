import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainUI.css";

function MainUI() {
  const navigate = useNavigate();
  const [animateButtons, setAnimateButtons] = useState(false);
  const [beeIntro, setBeeIntro] = useState(true);

  const synth = useMemo(() => window.speechSynthesis, []);
  const clickSound = useMemo(() => {
    const a = new Audio("/sfx/bee-click.mp3");
    a.volume = 0.45;
    return a;
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimateButtons(true), 450);
    const t2 = setTimeout(() => setBeeIntro(false), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-TW";
    synth.cancel();
    synth.speak(u);
  };
  const stop = () => synth.cancel();

  const handleGo = (path) => (e) => {
    const btn = e.currentTarget;
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 160);

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());

    try { clickSound.currentTime = 0; clickSound.play(); } catch {}

    setTimeout(() => navigate(path), 120);
  };

  return (
    <div className="main-ui-container">
      <div className={`bee-logo ${beeIntro ? "bee-intro" : ""}`} />

      <div className="menu-buttons">
        <button
          className={`menu-button ${animateButtons ? "show" : ""}`}
          style={{ "--angle": "235deg", "--radius": "40vmin" }}
          onMouseEnter={() => speak("認識雷射")}
          onMouseLeave={stop}
          onClick={handleGo("/laser")}
        >
          認識雷射
        </button>

        <button
          className={`menu-button ${animateButtons ? "show" : ""}`}
          style={{ "--angle": "200deg", "--radius": "40vmin" }}
          onMouseEnter={() => speak("機台介紹")}
          onMouseLeave={stop}
          onClick={handleGo("/machine")}
        >
          機台介紹
        </button>

        <button
          className={`menu-button ${animateButtons ? "show" : ""}`}
          style={{ "--angle": "175deg", "--radius": "50vmin" }}
          onMouseEnter={() => speak("工作流程")}
          onMouseLeave={stop}
          onClick={handleGo("/process")}
        >
          工作流程
        </button>

        <button
          className={`menu-button ${animateButtons ? "show" : ""}`}
          style={{ "--angle": "-45deg", "--radius": "35vmin" }}
          onMouseEnter={() => speak("板材介紹")}
          onMouseLeave={stop}
          onClick={handleGo("/sheetmaterials")}
        >
          板材介紹
        </button>

        <button
          className={`menu-button ${animateButtons ? "show" : ""}`}
          style={{ "--angle": "5deg", "--radius": "40vmin" }}
          onMouseEnter={() => speak("團隊介紹")}
          onMouseLeave={stop}
          onClick={handleGo("/team")}
        >
          團隊介紹
        </button>

        <button
          className={`menu-button ${animateButtons ? "show" : ""}`}
          style={{ "--angle": "55deg", "--radius": "40vmin" }}
          onMouseEnter={() => speak("問答遊戲")}
          onMouseLeave={stop}
          onClick={handleGo("/quiz")}
        >
          問答遊戲
        </button>
        <button
  className={`menu-button ${animateButtons ? "show" : ""}`}
  style={{ "--angle": "135deg", "--radius": "40vmin" }}
  onMouseEnter={() => speak("機台解析")}
  onMouseLeave={stop}
  onClick={handleGo("/AnalysisIntro")}
>
  機台解析
</button>
      </div>
    </div>
  );
}

export default MainUI;
