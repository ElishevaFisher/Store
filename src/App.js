// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Jewelery from "./components/Jewelery/Jewelery.jsx";
import Electronics from "./components/Electronics/Electronics.jsx";

// import Wizard from "./components/Wizard/Wizard";

function App() {
  return(
    <div className="App">
      <Router>
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
        </div>
        <Routes>
          <Route path="/" element={<Jewelery />} />
          <Route path="/about" element={<Electronics />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
