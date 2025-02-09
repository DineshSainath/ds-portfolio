function Landing() {
  return (
    <div>
      <div data-section="landing" className="mb-5">
        <h1 className="heading-1">SOFTWARE</h1>
        <h1 className="heading-2">ENGINEER</h1>
        <p className="sub-heading">
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
    </div>
  );
}

export default Landing;
