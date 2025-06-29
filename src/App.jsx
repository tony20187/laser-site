import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// ✅ 你的所有頁面元件，全部保留
import Splash from "./pages/Splash";
import SwirlAnimation from "./components/SwirlAnimation";
import MainUI from "./pages/MainUI";
import LaserIntro from "./pages/LaserIntro";
import MachineIntro from "./pages/MachineIntro";
import MachineDetail from "./pages/MachineDetail";
import ASFDetail from "./pages/ASFDetail";
import LaserProcess from "./pages/LaserProcess";
import Step1Page from "./pages/Step1Page";
import Step2Page from "./pages/Step2Page";
import Step3Page from "./pages/Step3Page";
import Step4Page from "./pages/Step4Page";
import SheetMaterials from "./pages/SheetMaterials";
import Spcc from "./pages/Spcc";
import Al from "./pages/Al";
import Sus304 from "./pages/Sus304";
import Sus430 from "./pages/Sus430";
import Secc from "./pages/Secc";
import Sgcc from "./pages/Sgcc";
import CuttingComparison from "./pages/CuttingComparison";
import Applications from "./pages/Applications";
import HowItWorks from "./pages/HowItWorks";
import HowLaser from "./pages/HowLaser";
import Team from "./pages/Team";
import QuizGame from "./pages/QuizGame";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/swirl" element={<SwirlAnimation />} />
        <Route path="/main" element={<MainUI />} />
        <Route path="/laser" element={<LaserIntro />} />
        <Route path="/machine" element={<MachineIntro />} />
        <Route path="/machine/1" element={<MachineDetail />} />
        <Route path="/machine/2" element={<ASFDetail />} />
        <Route path="/process" element={<LaserProcess />} />
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/step3" element={<Step3Page />} />
        <Route path="/step4" element={<Step4Page />} />
        <Route path="/sheetmaterials" element={<SheetMaterials />} />
        <Route path="/spcc" element={<Spcc />} />
        <Route path="/al" element={<Al />} />
        <Route path="/sus304" element={<Sus304 />} />
        <Route path="/sus430" element={<Sus430 />} />
        <Route path="/secc" element={<Secc />} />
        <Route path="/sgcc" element={<Sgcc />} />
        <Route path="/cuttingcomparison" element={<CuttingComparison />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/HowLaser" element={<HowLaser />} />
        <Route path="/team" element={<Team />} />
        <Route path="/quiz" element={<QuizGame />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
