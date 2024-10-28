import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Jewelery from "./components/Jewelery/Jewelery.jsx";
import Electronics from "./components/Electronics/Electronics.jsx";

// import Wizard from "./components/Wizard/Wizard";

function App() {
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Jewelery</Link>
        </li>
        <li>
          <Link to="/about">Electronics</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Jewelery />} />
      <Route path="/about" element={<Electronics />} />
    </Routes>
  </div>;
}

export default App;

//   const [step, setStep] = useState(1);
//   const [showWizard, setShowWizard] = useState(true);
//   const [showBtn, setShowBtn] = useState(true);
//   const nextStep = () => {
//     if (step < 3) {
//       setStep(step + 1);
//     }
//   };
//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };
//   const hideWizard = () => {
//     setShowWizard(false);
//     setShowBtn(false);
//   };

//   return (
//     <div className="App">
//       {showBtn && (
//         <div class="buttonContainer">
//           <button onClick={prevStep}>prev</button>
//           <button onClick={nextStep}>next</button>
//           <button onClick={hideWizard}>×</button>
//         </div>
//       )}

//       {showWizard && <Wizard step={step} />}
