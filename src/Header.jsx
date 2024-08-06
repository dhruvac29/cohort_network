import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Cohort Network</h1>
        <div className="button-group">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/cohort-network" className="nav-link">
            Cohort Network
          </Link>
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
