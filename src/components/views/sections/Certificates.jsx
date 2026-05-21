import "./Certificates.scss";
import CertificatesCard from "../../entity/certificates/CertificatesCard.jsx";
import { CardContainer } from "../../ui/assets/Card.jsx";

function Certificates() {
  return (
    <>
      <div className="certificates">
        <div className="sectionTitle">Certificates</div>
        <div className="certificatesDisplay">
          <CardContainer>
            <CertificatesCard />
            <CertificatesCard />
          </CardContainer>
          <div className="allCertificatesButton">
            <a href="/marcoeportfolio/certificates">All Certificates</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Certificates;
