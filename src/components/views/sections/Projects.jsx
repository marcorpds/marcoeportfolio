import "./Projects.scss";
import ProjectCard from "../../entities/projects/ProjectCard.jsx";
import { CardContainer } from "../../assets/ui/Card.jsx";

function Projects() {
  return (
    <>
      <div className="projects">
        <div className="sectionTitle">Projects</div>
        <div className="projectsDisplay">
          <CardContainer>
            <ProjectCard>
              <p>Project 1</p>
            </ProjectCard>
            <ProjectCard>
              <p>Project 2</p>
            </ProjectCard>
            <ProjectCard>
              <p>Project 3</p>
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
