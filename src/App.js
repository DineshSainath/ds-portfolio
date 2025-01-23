// App.js
import React from "react";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
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
