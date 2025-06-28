import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SwirlAnimation.css';

const SwirlAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  // 三句
  const messages = [
    '歡迎來到 華谷電機',
    '接下來 由我帶領大家',
    '進入 雷射的奇妙世界',
  ];

  // 三句對應的語速（例如：正常=1，較慢=0.8，較快=1.2）
  const rates = [1.0, 0.8, 0.7];

  useEffect(() => {
    if (currentStep < messages.length) {
      const utter = new SpeechSynthesisUtterance(messages[currentStep]);
      utter.lang = 'zh-TW';
      utter.rate = rates[currentStep];
      window.speechSynthesis.speak(utter);

      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2500);

      return () => {
        clearTimeout(timer);
        window.speechSynthesis.cancel();
      };
    } else {
      const timeout = setTimeout(() => {
        navigate('/main');
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, navigate, messages]);

  return (
    <div className="swirl-container">
      {/* ✅ 新增圖案：左上角與右下角 */}
      <img src="./A-05-01-1.png" className="hexagon-decoration-left" alt="左上裝飾" />
      <img src="./A-05-01-2.png" className="hexagon-decoration-right" alt="右下裝飾" />

      <div className={`bee ${currentStep >= messages.length ? 'shrink-and-rotate' : ''}`} />
      {currentStep < messages.length && (
        <div className="dialog-box">
          {messages[currentStep].split(' ').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwirlAnimation;
