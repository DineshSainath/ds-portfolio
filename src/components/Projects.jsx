import { MoveUpRight } from "lucide-react";

function Projects() {
  return (
    <div data-section="projects">
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
                <h4 className="project-heading fw-bold mb-1">{project.name}</h4>{" "}
                <MoveUpRight className="link-icon" size={24} />
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
