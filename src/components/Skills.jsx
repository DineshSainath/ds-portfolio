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

function Skills() {
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
    <div className="section-container">
      <div className="section-header">
        <h3 data-section="skills" className="section-heading-1 fw-bold mb-2">
          SKILLS &
        </h3>
        <h3 className="section-heading-2 text-gray-600">TOOLS</h3>
      </div>

      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon mb-3">{skill.icon}</div>
            <h4 className="skill-title">{skill.name}</h4>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
