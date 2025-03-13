import React from "react";
import { Home, Folder, Briefcase, Key } from "lucide-react";
import "./Right.css";

const Right = () => {
  const navItems = [
    { icon: Home, label: "Home", section: "landing" },
    { icon: Folder, label: "Projects", section: "projects" },
    { icon: Briefcase, label: "Work", section: "experience" },
    { icon: Key, label: "Skills", section: "skills" },
  ];

  return (
    <div className="top-navbar">
      <div className="nav-background">
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
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
                  className="navButton btn"
                  title={item.label}
                >
                  <item.icon className="nav-icon" size={24} />
                  <span className="nav-label">{item.label}</span>
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
