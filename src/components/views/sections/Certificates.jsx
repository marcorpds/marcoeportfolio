import "./Certificates.scss";
import CertificatesCard from "../../entities/certificates/CertificatesCard.jsx";
import { CardContainer } from "../../ui/assets/ui/Card.jsx";

function Certificates() {
  return (
    <>
      <div className="certificates">
        <div className="sectionTitle">Certificates</div>
        <div className="certificatesDisplay">
          <CardContainer>
            <CertificatesCard>
              <p>Certificate 1</p>
            </CertificatesCard>
            <CertificatesCard>
              <p>Certificate 2</p>
            </CertificatesCard>
            <CertificatesCard>
              <p>Certificate 3</p>
            </CertificatesCard>
            <CertificatesCard>
              <p>Certificate 4</p>
            </CertificatesCard>
            <CertificatesCard>
              <p>Certificate 5</p>
            </CertificatesCard>
          </CardContainer>
          <div className="allCertificatesButton">
            <a href="/marcoeportfolio/certificatespage">All Certificates</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Certificates;
