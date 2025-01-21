// MiddleContent.js
import React from "react";

const Middle = () => {
  return (
    <div className="middle-content flex-grow-1 overflow-auto ps-[300px] pe-[100px] py-4">
      <div className="middle-1 container-fluid">
        <div className="mb-5">
          <h1 className="heading-1">SOFTWARE</h1>
          <h2 className="heading-2">ENGINEER</h2>
          <p className="sub-heading col-md-6">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
        </div>

        <div className="landing-brief row">
          <div className="col-md-4 text-center">
            <h3 className="display-6 fw-bold">2+</h3>
            <p className="text-gray-600 text-uppercase">
              Years of
              <br />
              Experience
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="display-6 fw-bold">8+</h3>
            <p className="text-gray-600 text-uppercase">
              Projects
              <br />
              Completed
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="display-6 fw-bold">4+</h3>
            <p className="text-gray-600 text-uppercase">
              Certifications
              <br />
              Completed
            </p>
          </div>
        </div>

        <h2 className="section-heading-1 fw-bold mb-2">RECENT</h2>
        <h3 className="section-heading-2 text-gray-600 mb-4">PROJECTS</h3>

        <div className="project-cards">
          {[
            "Wedding Wise",
            "Profile Manager",
            "Keeper",
            "Sample1",
            "Sample2",
            "Sample3",
          ].map((project) => (
            <div
              key={project}
              className="bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
            >
              <div>
                <h4 className="fw-bold mb-1">{project}</h4>
                <p className="text-gray-500 mb-0">Fullstack project</p>
              </div>
              <div className="text-gray-500">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Middle;