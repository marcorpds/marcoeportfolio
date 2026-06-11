import "./ExperienceCard.scss";
import { Card } from "../../assets/ui/Card.jsx";

function ExperienceCard({ children }) {
  return (
    <>
      <Card>
        <div className="experienceCard">{children}</div>
      </Card>
    </>
  );
}
export default ExperienceCard;
