// LeftCard.js
import React from "react";
import "./../App.css";

const LeftCard = () => {
  return (
    <div className="left-card p-4">
      <div className="layer-1 rounded-4 ">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/564x/d4/50/dc/d450dc5b1dcd30086b0a4199195cdb89.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
        <h2 className="profile-name">Dinesh Sainath</h2>
        <div className="position-relative mb-4"></div>
        <p className="profile-text">
          A Software Engineer with a passion for building products that make
          life easier.
        </p>
      </div>
    </div>
  );
};

export default LeftCard;
