import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const HomePage = () => {
  return (
    <>
      <header className="header">
        <h1>Cohort Network</h1>
        <button className="contact-button">
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </button>
      </header>
      <div className="home-container">
        <button className="nav-button">
          <Link to="/cohort-network" className="nav-link">
            Cohort Network
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomePage;
