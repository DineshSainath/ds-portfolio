// App.js
import React from "react";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import "./App.css";

const App = () => {
  return (
    <div className="box">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default App;
