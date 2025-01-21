function Experience() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="section-heading-1 fw-bold mb-2">EXPERIENCE</h2>
          <h3 className="section-heading-2 text-gray-600 mb-4">WORK</h3>

          <div className="project-cards">
            {[
              "Software Engineer",
              "Frontend Developer",
              "Backend Developer",
            ].map((project) => (
              <div
                key={project}
                className="bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <h4 className="fw-bold mb-1">{project}</h4>
                  <p className="text-gray-500 mb-0">Fullstack project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
