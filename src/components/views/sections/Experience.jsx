import "./Experience.scss";
import ExperienceCard from "../../entities/experience/ExperienceCard.jsx";
import { CardContainer } from "../../assets/ui/Card.jsx";

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="sectionTitle">Experience</div>
        <div className="experienceDisplay">
          <CardContainer>
            <ExperienceCard>Experience 1</ExperienceCard>
            <ExperienceCard>Experience 2</ExperienceCard>
            <ExperienceCard>Experience 3</ExperienceCard>
          </CardContainer>
          <div className="allExperienceButton">
            <a href="/marcoeportfolio/experience">Download CV</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
