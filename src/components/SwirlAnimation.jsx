import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SwirlAnimation.css';

const SwirlAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const steps = [
      '歡迎來到\n華谷電機',
      '接下來\n由我帶領大家',
      '進入\n雷射的奇妙世界',
    ];

    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // 等待動畫完成後導向下一頁
      const timeout = setTimeout(() => {
        navigate('/main');
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, navigate]);

  const messages = [
    '歡迎來到\n華谷電機',
    '接下來\n由我帶領大家',
    '進入\n雷射的奇妙世界',
  ];

  return (
    <div className="swirl-container">
      <div className={`bee ${currentStep >= messages.length ? 'shrink-and-rotate' : ''}`} />
      {currentStep < messages.length && (
        <div className="dialog-box">
          {messages[currentStep].split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwirlAnimation;
