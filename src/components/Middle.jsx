import React, { useRef } from "react";
import "./Middle.css";
import Landing from "./Landing";

const Middle = () => {
  const landingRef = useRef(null);

  return (
    <div className="middle-content">
      <div className="middle-1">
        <div ref={landingRef}>
          <Landing />
        </div>
      </div>
    </div>
  );
};

export default Middle;
