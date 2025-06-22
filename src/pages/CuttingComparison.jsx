import React, { useState, useEffect, useRef } from 'react';
import '../styles/CuttingComparison.css';
import Navbar4 from '../components/Navbar4';

const CuttingComparison = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const synthRef = useRef(window.speechSynthesis);
  const utterRef = useRef(null);

  const images = {
    '雷射切割': '雷射切割.png',
    '水刀切割': '水刀切割.png',
    '等離子切割': '等離子切割.png',
    '機械切割': '機械切割.png',
  };

  // ✅ 進入畫面時先播放說明
  useEffect(() => {
    playSpeech("請將滑鼠移到各切割類型，會出現該類型切割照片");
    return stopSpeech;
  }, []);

  // ✅ 播放語音函式
  const playSpeech = (text) => {
    stopSpeech();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-TW';
    utter.rate = 1;
    utter.pitch = 1;
    utterRef.current = utter;
    synthRef.current.speak(utter);
  };

  // ✅ 停止語音
  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  const handleMouseEnter = (method) => {
    setSelectedMethod(method);
    playSpeech(method);
  };

  // ✅ 滑鼠移開 → 再播提示
  const handleMouseLeave = () => {
    setSelectedMethod('');
    stopSpeech();
    playSpeech("請將滑鼠移到各切割類型，會出現該類型切割照片");
  };

  return (
    <div className="cc-container">
      <Navbar4 />
      <h1 className="cc-title">各類切割方式比較</h1>
      <table className="cc-table">
        <thead>
          <tr>
            <th>切割方式</th>
            <th>切割精度</th>
            <th>熱影響區</th>
            <th>適用材料</th>
            <th>速度</th>
            <th>加工成本</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(images).map((method) => (
            <tr
              key={method}
              onMouseEnter={() => handleMouseEnter(method)}
              onMouseLeave={handleMouseLeave}
            >
              <td>{method}</td>
              <td>{method === '雷射切割' ? '高' : method === '水刀切割' ? '高' : '中'}</td>
              <td>{method === '水刀切割' || method === '機械切割' ? '無' : method === '雷射切割' ? '中等' : '大'}</td>
              <td>
                {method === '等離子切割'
                  ? '導電材料'
                  : method === '機械切割'
                  ? '金屬、塑膠'
                  : '金屬、非金屬'}
              </td>
              <td>{method === '機械切割' ? '慢' : method === '水刀切割' ? '中' : '快'}</td>
              <td>{method === '水刀切割' ? '高' : method === '雷射切割' ? '中' : '低'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cc-display">
        {selectedMethod ? (
          <div className="cc-image-block">
            <h2>{selectedMethod}示意圖</h2>
            <img
              src={`./${images[selectedMethod]}`}
              alt={selectedMethod}
              className="cc-method-image"
            />
          </div>
        ) : (
          <div className="cc-bee-dialog-block">
            <img src="./bee.png" alt="Bee" className="cc-bee-image" />
            <div className="cc-dialog">
              <p>請將滑鼠移到各切割類型</p>
              <p>會出現該類型切割照片</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuttingComparison;
