import "./Informationbar.scss";
import { NavLink } from "react-router-dom";

import linkedinIcon from "../assets/icons/linkedin/linkedin-svgrepo-comg1.svg";
import githubIcon from "../assets/icons/github/github-svgrepo-comg1.svg";
import codepenIcon from "../assets/icons/codepen/codepen-svgrepo-comg1.svg";
import instagramIcon from "../assets/icons/instagram/instagram-svgrepo-comg1.svg";
import facebookIcon from "../assets/icons/facebook/facebook-svgrepo-comg1.svg";
import youtubeIcon from "../assets/icons/youtube/youtube-svgrepo-comg1.svg";
import emailIcon from "../assets/icons/email/email-svgrepo-comg1.svg";

function Informationbar() {
  return (
    <div className="Informationbar">
      <div className="topLine" />

      <div className="menu">

        {/* LinkedIn */}
        <div className="socialIcon linkedin">
          <NavLink
            to="https://www.linkedin.com/in/YOUR-LINK/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </NavLink>
        </div>

        {/* GitHub */}
        <div className="socialIcon github">
          <NavLink
            to="https://github.com/YOUR-GITHUB/"
            target="_blank"
          >
            <img
              src={githubIcon}
              alt="GitHub"
            />
          </NavLink>
        </div>

        {/* CodePen */}
        <div className="socialIcon codepen">
          <NavLink
            to="https://codepen.io/YOUR-CODEPEN/"
            target="_blank"
          >
            <img
              src={codepenIcon}
              alt="CodePen"
            />
          </NavLink>
        </div>

        {/* Instagram */}
        <div className="socialIcon instagram">
          <NavLink
            to="https://www.instagram.com/YOUR-INSTAGRAM/"
            target="_blank"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
            />
          </NavLink>
        </div>

        {/* Facebook */}
        <div className="socialIcon facebook">
          <NavLink
            to="https://www.facebook.com/YOUR-FACEBOOK/"
            target="_blank"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
            />
          </NavLink>
        </div>

        {/* YouTube */}
        <div className="socialIcon youtube">
          <NavLink
            to="https://www.youtube.com/@YOUR-YOUTUBE/"
            target="_blank"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
            />
          </NavLink>
        </div>

        {/* Email */}
        <div className="socialIcon email">
          <a href="mailto:youremail@email.com">
            <img
              src={emailIcon}
              alt="Email"
            />
          </a>
        </div>

      </div>

      <div className="bottomLine" />
    </div>
  );
}

export default Informationbar;