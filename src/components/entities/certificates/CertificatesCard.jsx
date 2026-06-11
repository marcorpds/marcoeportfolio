import "./CertificatesCard.scss";
import { Card } from "../../assets/ui/Card.jsx";

function CertificatesCard({ children }) {
  return (
    <>
      <Card>
        <div className="certificatesCard">{children}</div>
      </Card>
    </>
  );
}
export default CertificatesCard;
