function Experience() {
  return (
    <div className="section-container">
      <div className="section-header">
        <h3 className="section-heading-1">WORK</h3>
        <h3 className="section-heading-2">EXPERIENCE</h3>
      </div>

      <div className="experience-container">
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
        ].map((job) => (
          <div key={job.name} className="job">
            <div className="job-header">
              <h4 className="job-title">{job.name}</h4>
              <div className="job-meta">
                <span className="job-position">{job.position}</span>
                <span className="job-date">{job.date}</span>
              </div>
            </div>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
