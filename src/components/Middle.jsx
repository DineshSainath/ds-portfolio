import React from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import "./../App.css";
import Landing from "./Landing";

const Middle = () => {
  return (
    <div className="middle-content flex-grow-1 overflow-auto ps-[300px] pe-[100px] py-4">
      <div className="middle-1 container-fluid">
        <Landing />
        <Projects />
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default Middle;
