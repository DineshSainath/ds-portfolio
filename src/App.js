// App.js
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
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
    <>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="theme-toggle"
      >
        {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
      </button>
      <div className="box">
        <Left />
        <Middle />
        <Right />
      </div>
      <Footer />
    </>
  );
};

export default App;
