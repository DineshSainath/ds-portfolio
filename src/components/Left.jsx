/* eslint-disable no-unused-vars */
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
const LeftCard = ({ maxWidth = "400px" }) => {
  const imgSrc = `https://i.pinimg.com/564x/d4/50/dc/d450dc5b1dcd30086b0a4199195cdb89.jpg`;
  const ds = `${process.env.PUBLIC_URL}/DS_Image.jpeg`;
  return (
    <div className="left-card p-4" style={{ maxWidth }}>
      <div className="layer-1 rounded-4">
        <div className="image-container">
          <img src={ds} alt="Profile" className="profile-img" />
        </div>
        <h2 className="profile-name">Dinesh Sainath</h2>
        <p className="profile-text">
          A Software Engineer with a passion for building products that make
          life easier.
        </p>
        <div className="socials">
          <a
            href="mailto:sainath.dinesh@gmail.com"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <SiGmail className="sIcon" size={30} />
          </a>
          <a
            href="https://linkedin.com/in/dineshsainath/"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <SiLinkedin className="sIcon" size={30} />
          </a>
          <a
            href="https://github.com/dineshsainath/"
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <SiGithub className="sIcon" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
