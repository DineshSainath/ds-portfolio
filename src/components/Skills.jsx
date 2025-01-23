import {
  DiHtml5,
  DiNodejsSmall,
  DiCss3,
  DiMysql,
  DiMongodb,
  DiReact,
  DiJava,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";

function Experience() {
  const skills = [
    {
      icon: <FaFigma size={30} />,
      name: "Figma",
      description: "UI/UX Design Tool",
    },
    {
      icon: <DiHtml5 size={30} />,
      name: "HTML5",
      description: "Markup Language",
    },
    {
      icon: <DiCss3 size={30} />,
      name: "CSS3",
      description: "Styling Language",
    },
    {
      icon: <DiReact size={30} />,
      name: "React",
      description: "Frontend Framework",
    },
    {
      icon: <DiNodejsSmall size={30} />,
      name: "Node.js",
      description: "Backend Runtime",
    },
    {
      icon: <DiMongodb size={30} />,
      name: "MongoDB",
      description: "NoSQL Database",
    },
    {
      icon: <DiMysql size={30} />,
      name: "MySQL",
      description: "Relational Database",
    },

    {
      icon: <DiJava size={30} />,
      name: "Java",
      description: "Object-Oriented Programming",
    },
  ];

  return (
    <>
      <h3 className="section-heading-1 fw-bold mb-2">SKILLS &</h3>
      <h3 className="section-heading-2 text-gray-600 mb-4">TOOLS</h3>

      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              {skill.icon}
              <div className="ms-3">
                <h4 className="job-title fw-bold mb-1">{skill.name}</h4>
                <p className="job-description text-gray-500 mb-0">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
