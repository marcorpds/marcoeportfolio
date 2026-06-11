import "./ProjectRow.scss";

function ProjectRow({ year, title, skills, link }) {
  return (
    <div className="projectRow">
      <div className="projectYear">{year}</div>

      <div className="projectTitle">{title}</div>

      <div className="projectSkills">
        {skills.map((skill) => (
          <div className="skillTag" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectRow;
