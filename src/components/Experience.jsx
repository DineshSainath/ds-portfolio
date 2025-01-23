function Experience() {
  return (
    <>
      <h3 className="section-heading-1 fw-bold mb-2">WORK</h3>
      <h3 className="section-heading-2 text-gray-600 mb-4">EXPERIENCE</h3>

      <div className="project-cards">
        {[
          {
            name: "Gravvity",
            position: "Software Developer",
            date: "April 2023 - Nov 2024",
            description: " ",
          },
          {
            name: "Gravvity",
            position: "Software Developer",
            date: "April 2023 - Nov 2024",
            description: " ",
          },
          {
            name: "Keeper",
            description: "A note-taking app inspired by Google Keep.",
          },
        ].map((project) => (
          <div
            key={project.name}
            className="bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
          >
            <div>
              <h4 className="fw-bold mb-1">{project.name}</h4>
              <p className="description text-gray-500 mb-0">
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
