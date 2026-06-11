import { projectsData } from "../../data/projectsData";
import Header from "../layout/Header";
import ProjectRow from "../entities/projects/ProjectRow";

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="pageContent">
        {projectsData.map((project) => (
          <ProjectRow key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectsPage;
