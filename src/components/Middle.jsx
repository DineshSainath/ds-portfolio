import React, { useRef } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import "./../App.css";
import Landing from "./Landing";

const Middle = () => {
  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className="middle-content">
      <div className="middle-1">
        <div ref={landingRef}>
          <Landing />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Middle;
