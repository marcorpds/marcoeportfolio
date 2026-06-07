import "./CertificatesCard.scss";
import { Card } from "../../ui/assets/ui/Card.jsx";

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
