import { MoveUpRight } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";

function Projects() {
  return (
    <div data-section="projects">
      <div className="subHeadings">
        <h3 className="section-heading-1 fw-bold mb-2">RECENT</h3>
        <h3 className="section-heading-2 text-gray-600 mb-4">PROJECTS</h3>
      </div>
      <div className="project-cards">
        {[
          {
            name: "Palette AI",
            description:
              "An AI-generated color palette application from user's prompt",
            link: `https://ai-color-palette.onrender.com/`,
            github: `https://github.com/dineshsainath/ai-color-palette`,
          },
          {
            name: "Wedding Wise",
            description:
              "A wedding planning application with vendor management.",
            link: `https://weddingwise-ds.netlify.app/`,
            github: `https://github.com/dineshsainath/weddingwise`,
          },
          {
            name: "Profile Deck",
            description: "An app for managing user profiles and settings.",
            link: `https://super-macaron-b74cb9.netlify.app/login`,
            github: `https://github.com/DineshSainath/student-profile-2114`,
          },
          {
            name: "Keeper",
            description: "A note-taking app inspired by Google Keep.",
            link: `https://coruscating-crostata-d691f8.netlify.app/`,
            github: `https://github.com/dineshsainath/Keeper`,
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
                <h4 className="project-heading fw-bold mb-1">{project.name}</h4>{" "}
                <MoveUpRight className="link-icon" size={24} />
                <a
                  href={project.github}
                  target="_blank"
                  rel={"noopener noreferrer"}
                >
                  <RxGithubLogo className="projectIcon" size={30} />
                </a>
                <p className="description text-gray-500 mb-0">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
