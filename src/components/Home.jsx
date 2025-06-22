import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const beelogo = "/cis-bee.png";
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  const [angle, setAngle] = useState(0);

  const buttons = [
    { label: '認識雷射', path: '/step1' },
    { label: '機台介紹', path: '/machine' },
    { label: '雷射工作流程', path: '/step2' },
    { label: '雷射人員', path: '/step3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.02);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <img src={beeLogo} alt="蜜蜂 Logo" className="bee-logo" />
      <div className="orbit-buttons">
        {buttons.map((btn, index) => {
          const radius = 120;
          const x = radius * Math.cos(angle + (index * (Math.PI / 2)));
          const y = radius * Math.sin(angle + (index * (Math.PI / 2)));
          return (
            <button
              key={index}
              className="orbit-button"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => navigate(btn.path)}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
