function Experience() {
  return (
    <>
      <h3 className="section-heading-1 fw-bold mb-2">WORK</h3>
      <h3 className="section-heading-2 text-gray-600 mb-4">EXPERIENCE</h3>

      <div className="project-cards">
        {[
          {
            name: "Gravvity, Toronto",
            position: "Software Developer",
            date: "April 2023 - Nov 2024",
            description:
              "Developed and optimized a cutting-edge e-commerce interface in React.js, integrating VR capabilities and boosting performance and user engagement through strategic API implementation and collaboration.",
          },
          {
            name: "Vankay Systems, Raleigh",
            position: "Frontend Developer Intern",
            date: "Jan 2022 - Dec 2022",
            description:
              "Developed and maintained responsive web applications, optimizing performance and improving user experience using frontend technologies for 5+ clients",
          },
          {
            name: "iCommunity, Toronto",
            position: "UI/UX Intern",
            date: "June 2020 - Dec 2020",
            description:
              "Led the design and optimization of user interfaces, conducted user research, and created wireframes and prototypes to enhance overall user experience for a student community platform.",
          },
        ].map((project) => (
          <div
            key={project.name}
            className="bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
          >
            <div>
              <h4 className="job-title fw-bold mb-1">{project.name}</h4>
              <p className="job-description text-gray-500 mb-0">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
