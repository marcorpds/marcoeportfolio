import "./Projects.scss";
import ProjectCard from "../../entities/projects/ProjectCard.jsx";
import { CardContainer } from "../../assets/ui/Card.jsx";

function Projects() {
  return (
    <>
      <div className="projects">
        <div className="sectionTitle">FEATURED PROJECTS</div>
        <div className="projectsDisplay">
          <CardContainer>
            <ProjectCard>
              <img alt="project1image" src="./src/components/assets/images/react.svg" />
              <div className="projectsCardInfo">
                <div className="projectsCardTitle">
                  <p>Project 1</p>
                </div>
                <div className="projectsCardDescription">
                  <p>Some decription about the project</p>
                </div>
                <div className="projectsCardSkills">
                  <p>Fill in with skills</p>
                </div>
              </div>
            </ProjectCard>
            <ProjectCard>
              <img alt="project1image" src="./src/components/assets/images/react.svg" />
              <div className="projectsCardInfo">
                <div className="projectsCardTitle">
                  <p>Project 2</p>
                </div>
                <div className="projectsCardDescription">
                  <p>Some decription about the project</p>
                </div>
                <div className="projectsCardSkills">
                  <p>Fill in with skills</p>
                </div>
              </div>
            </ProjectCard>
            <ProjectCard>
              <img alt="project1image" src="./src/components/assets/images/react.svg" />
              <div className="projectsCardInfo">
                <div className="projectsCardTitle">
                  <p>Project 3</p>
                </div>
                <div className="projectsCardDescription">
                  <p>Some decription about the project</p>
                </div>
                <div className="projectsCardSkills">
                  <p>Fill in with skills</p>
                </div>
              </div>
            </ProjectCard>
          </CardContainer>
          <div className="allProjectsButton">
            <a href="/marcoeportfolio/projectspage">All Projects</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
