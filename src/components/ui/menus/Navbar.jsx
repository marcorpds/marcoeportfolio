import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="topLine" />
        <nav>
          <div className="navItem">
            <NavLink to="/marcoeportfolio/dashboard">Dashboard</NavLink>
          </div>
          <div className="navItem">
            <NavLink to="/marcoeportfolio/projects">Projects</NavLink>
          </div>
          <div className="navItem">
            <NavLink to="/marcoeportfolio/certificates">Certificates</NavLink>
          </div>
          <div className="navItem">
            <NavLink to="/marcoeportfolio/experience">Experience</NavLink>
          </div>
        </nav>
        <div className="bottomLine" />
      </div>
    </>
  );
}

export default Navbar;
