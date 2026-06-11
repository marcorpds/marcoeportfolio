import "./ProjectCard.scss";
import { Card } from "../../assets/ui/Card.jsx";

function ProjectCard({ children }) {
  return (
    <>
      <Card>
        <div className="projectCard">{children}</div>
      </Card>
    </>
  );
}
export default ProjectCard;
