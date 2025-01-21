// RightNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Home, Folder, Briefcase, Key, Edit } from "lucide-react";

const Right = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Folder, label: "Projects", path: "/projects" },
    { icon: Briefcase, label: "Work", path: "/work" },
    { icon: Key, label: "Access", path: "/access" },
    { icon: Edit, label: "Edit", path: "/edit" },
  ];

  return (
    <div className="right-navbar position-fixed end-0 top-50 translate-middle-y p-4">
      {/* Add a container with background for all buttons */}
      <div className="nav-background rounded-4 p-3">
        <nav>
          <ul className="list-unstyled mb-0">
            {navItems.map((item) => (
              <li key={item.label} className="mb-3">
                <Link
                  to={item.path}
                  className="navButton btn p-3 d-flex justify-content-center align-items-center"
                >
                  <item.icon className="nav-icon" size={35} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Right;
