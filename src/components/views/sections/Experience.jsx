import "./Experience.scss";
import ExperienceCard from "../../entity/experience/ExperienceCard.jsx";
import { CardContainer } from "../../ui/assets/Card.jsx";

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="sectionTitle">Experience</div>
        <div className="experienceDisplay">
          <CardContainer>
            <ExperienceCard />
            <ExperienceCard />
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