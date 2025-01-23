// MiddleContent.js
import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import "./../App.css";
import { MoveUpRight } from "lucide-react";

const Middle = () => {
  return (
    <div className="middle-content flex-grow-1 overflow-auto ps-[300px] pe-[100px] py-4">
      <div className="middle-1 container-fluid">
        <div className="mb-5">
          <h1 className="heading-1">SOFTWARE</h1>
          <h1 className="heading-2">ENGINEER</h1>
          <p className="sub-heading col-md-8">
            Passionate about creating intuitive and engaging user experiences.
            Specialized in transforming ideas into beautifully crafted products.
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

        <h3 className="section-heading-1 fw-bold mb-2">RECENT</h3>
        <h3 className="section-heading-2 text-gray-600 mb-4">PROJECTS</h3>

        <div className="project-cards">
          {[
            {
              name: "Wedding Wise",
              description:
                "A wedding planning application with vendor management.",
              link: `https://weddingwise-ds.netlify.app/`,
            },
            {
              name: "Profile Deck",
              description: "An app for managing user profiles and settings.",
              link: `https://codesandbox.io/p/sandbox/keeper-pjv54?file=%2Fsrc%2Findex.js`,
            },
            {
              name: "Keeper",
              description: "A note-taking app inspired by Google Keep.",
              link: `https://coruscating-crostata-d691f8.netlify.app/`,
            },
          ].map((project) => (
            <div
              key={project.name}
              className="project bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
            >
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h4 className="project-heading fw-bold mb-1">
                    {project.name}
                  </h4>{" "}
                  <MoveUpRight className="link-icon" size={24} />
                  <p className="description text-gray-500 mb-0">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default Middle;
