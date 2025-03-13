import { MoveUpRight } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";
import { useState } from "react";

// Import project images
import paletteAiImage from "../assets/images/PaletteAI.png";
import weddingWiseImage from "../assets/images/WeddingWise.png";
import expenseTrackerImage from "../assets/images/ExpenseTracker.png";
import profileDeckImage from "../assets/images/ProfileDeck.png";
import keeperImage from "../assets/images/Keeper.png";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Palette AI",
      description:
        "An AI-generated color palette application from user's prompt",
      link: "https://palette-ai-eosin.vercel.app/",
      github: "https://github.com/dineshsainath/ai-color-palette",
      image: paletteAiImage,
    },
    {
      id: 2,
      name: "Expense Tracker",
      description:
        "A web application to track, visualize, and manage daily expenses with interactive charts and graphs.",
      link: "https://eloquent-hamster-56a9c5.netlify.app/",
      github: "https://github.com/DineshSainath/expense-tracker",
      image: expenseTrackerImage,
    },
    {
      id: 3,
      name: "Keeper",
      description:
        "A note-taking application inspired by Google Keep, built with React.",
      link: "https://keeper-app-dinesh.netlify.app/",
      github: "https://github.com/DineshSainath/Keeper-App",
      image: keeperImage,
    },
    {
      id: 4,
      name: "Wedding Wise",
      description:
        "A wedding planning application to help couples organize their big day.",
      link: "https://wedding-wise.netlify.app/",
      github: "https://github.com/DineshSainath/WeddingWise",
      image: weddingWiseImage,
    },
    {
      id: 5,
      name: "Profile Deck",
      description: "An app for managing user profiles and settings.",
      link: "https://super-macaron-b74cb9.netlify.app/login",
      github: "https://github.com/DineshSainath/student-profile-2114",
      image: profileDeckImage,
    },
  ];

  return (
    <div data-section="projects" className="projects-container">
      <div className="section-header">
        <h3 className="section-heading-1">RECENT</h3>
        <h3 className="section-heading-2">PROJECTS</h3>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div
                className={`project-overlay ${
                  hoveredProject === project.id ? "active" : ""
                }`}
              >
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-button"
                  >
                    <MoveUpRight size={20} />
                    <span>Visit Site</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-button"
                  >
                    <RxGithubLogo size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h4 className="project-title">{project.name}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
