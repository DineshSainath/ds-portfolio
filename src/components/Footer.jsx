import React from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <div className="container-fluid">
        <h5>
          If you have a project that requires my expertise, let's get in touch!
        </h5>
        <ul className="list-inline ">
          <a
            className="cIcon"
            href="mailto:sainath.dinesh@gmail.com"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <li className="list-inline-item mx-5 icon">
              <SiGmail size={30} />
            </li>{" "}
          </a>
          <a
            className="cIcon"
            href="https://linkedin.com/in/dineshsainath/"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <li className="list-inline-item mx-5 icon">
              <SiLinkedin size={30} />
            </li>
          </a>
          <a
            className="cIcon"
            href="https://github.com/dineshsainath/"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <li className="list-inline-item mx-5 icon">
              <SiGithub size={30} />
            </li>
          </a>
        </ul>
        <footer className="trademark">
          <p>Made by DS</p>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
