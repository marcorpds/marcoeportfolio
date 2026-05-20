import "./Layout.scss";
import Navbar from "./Navbar";
import Informationbar from "./Informationbar";

// Constructs main pages layout
const Layout = ({ children }) => {
  return (
    <div className="mainLayout">
      <div className="navbarLayout">
        <Navbar />
      </div>
      <main className="displayLayout">{children}</main>
      <div className="informationbarLayout">
        <Informationbar />
      </div>
    </div>
  );
};

export default Layout;
