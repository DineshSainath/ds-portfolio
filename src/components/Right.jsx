import React from "react";
import { Home, Folder, Briefcase, Key } from "lucide-react";

const Right = () => {
  const navItems = [
    { icon: Home, label: "Home", section: "landing" },
    { icon: Folder, label: "Projects", section: "projects" },
    { icon: Briefcase, label: "Work", section: "experience" },
    { icon: Key, label: "Skills", section: "skills" },
  ];

  return (
    <div className="right-navbar position-fixed end-0 top-50 translate-middle-y p-4">
      <div className="nav-background rounded-4 p-3">
        <nav>
          <ul className="list-unstyled mb-0">
            {navItems.map((item) => (
              <li key={item.label} className="mb-3">
                <button
                  onClick={() => {
                    const section = document.querySelector(
                      `[data-section="${item.section}"]`
                    );
                    if (section) {
                      const offset = 100; // Adjust this value to control how far back it scrolls
                      const elementPosition =
                        section.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: elementPosition - offset,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="navButton btn p-3 d-flex justify-content-center align-items-center"
                >
                  <item.icon className="nav-icon" size={35} />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Right;
