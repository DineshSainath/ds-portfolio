import React from "react";
import { Link } from "react-router-dom";
import { Home, Folder, Briefcase, Key, Edit } from "lucide-react";

const App = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Folder, label: "Projects", path: "/projects" },
    { icon: Briefcase, label: "Work", path: "/work" },
    { icon: Key, label: "Access", path: "/access" },
    { icon: Edit, label: "Edit", path: "/edit" },
  ];

  return (
    <div className="d-flex vh-100 bg-black text-white">
      {/* Left Static Card */}
      <div className="left-card p-4">
        <div className="bg-dark/20 rounded-3 p-4">
          <div className="image-container mb-4">
            <div className="position-relative">
              <div className="bg-orange-600 rounded-3 overflow-hidden">
                <img
                  src="/api/placeholder/300/300"
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
          <h2 className="text-center mb-4">Dinesh Sainath</h2>
          <div className="position-relative mb-4">
            <div
              className="rounded-circle bg-orange-500"
              style={{ width: "24px", height: "24px", margin: "0 auto" }}
            />
            <div
              className="border-start border-2 border-dashed border-orange-500"
              style={{ height: "48px", width: "1px", margin: "4px auto" }}
            />
          </div>
          <p className="text-center text-gray-400 small">
            A Software Engineer with a passion for building products that make
            life easier.
          </p>
        </div>
      </div>

      {/* Scrollable Middle Section */}
      <div className="flex-grow-1 overflow-auto ps-[300px] pe-[100px] py-4">
        <div className="container-fluid">
          <div className="mb-5">
            <h1 className="display-4 fw-bold mb-2">SOFTWARE</h1>
            <h2 className="display-4 text-gray-600 mb-4">ENGINEER</h2>
            <p className="text-gray-400 col-md-8">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-md-4 text-center">
              <h3 className="display-6 fw-bold">+12</h3>
              <p className="text-gray-600 text-uppercase">
                Years of
                <br />
                Experience
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="display-6 fw-bold">+46</h3>
              <p className="text-gray-600 text-uppercase">
                Projects
                <br />
                Completed
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="display-6 fw-bold">+20</h3>
              <p className="text-gray-600 text-uppercase">
                Worldwide
                <br />
                Clients
              </p>
            </div>
          </div>

          <h2 className="display-4 fw-bold mb-2">RECENT</h2>
          <h3 className="display-4 text-gray-600 mb-4">PROJECTS</h3>

          <div className="project-cards">
            {["Wedding Wise", "Profile Manager", "Keeper"].map((project) => (
              <div
                key={project}
                className="bg-dark/20 rounded-3 p-4 mb-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <h4 className="fw-bold mb-1">{project}</h4>
                  <p className="text-gray-500 mb-0">Fullstack project</p>
                </div>
                <div className="text-gray-500">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Static Navigation Bar */}
      <div className="position-fixed end-0 top-50 translate-middle-y p-4">
        <nav>
          <ul className="list-unstyled">
            {navItems.map((item) => (
              <li key={item.label} className="mb-3">
                <Link
                  to={item.path}
                  className="btn btn-dark rounded-3 p-3 d-flex justify-content-center align-items-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <item.icon size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default App;
