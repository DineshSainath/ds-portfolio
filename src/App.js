// App.js
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Save theme preference to local storage
    localStorage.setItem("theme", JSON.stringify(isDarkMode));

    // Apply theme to body
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="app-wrapper">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="theme-toggle"
      >
        {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
      </button>

      {/* Top Navigation */}
      <Right />

      <div className="main-container">
        {/* Add padding to account for the fixed navbar */}
        <div className="navbar-spacer"></div>

        <div className="box top-section">
          <div className="cols one">
            <Left />
          </div>
          <div className="cols two">
            <Middle />
          </div>
        </div>

        <div className="full-width-section">
          <Projects />
        </div>
        <div className="full-width-section">
          <Experience />
        </div>
        <div className="full-width-section">
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
