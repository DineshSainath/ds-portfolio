// LeftCard.js
import React from "react";

const LeftCard = () => {
  return (
    <div className="left-card p-4">
      <div className="bg-dark/20 rounded-3 p-4">
        <div className="image-container mb-4">
          <div className="position-relative">
            <div className="bg-orange-600 rounded-3 overflow-hidden">
              <img
                src="/api/placeholder/300/300"
                alt="Profile"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
        <h2 className="text-center mb-4">Dinesh Sainath</h2>
        <div className="position-relative mb-4">
          <div
            className="rounded-circle bg-orange-500"
            style={{ width: "24px", height: "24px", margin: "0 auto" }}
          />
          <div
            className="border-start border-2 border-dashed border-orange-500"
            style={{ height: "48px", width: "1px", margin: "4px auto" }}
          />
        </div>
        <p className="text-center text-gray-400 small">
          A Software Engineer with a passion for building products that make
          life easier.
        </p>
      </div>
    </div>
  );
};

export default LeftCard;
