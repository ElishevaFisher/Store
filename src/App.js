// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx"
import Jewelery from "./components/Jewelery/Jewelery.jsx";
import Electronics from "./components/Electronics/Electronics.jsx";
import Books from "./components/Books/Books.jsx"

// import Wizard from "./components/Wizard/Wizard";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Jewelery">Jewelery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Electronics">Electronics</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Books">Books</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jewelery" element={<Jewelery />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
