import React from "react";
import "./App.css";
import bookImg from "./assets/esthag.2023.57.issue-22.xlargecover-3.jpeg";
import diagramImg from "./assets/CD59C193-D6B5-4892-8913-C63B979DD7D9_1_201_a.jpeg";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="grid-container">
          <div className="grid-item content-section">
            <p className="large-text">
              Cohort Network is a multi-layer knowledge graph to extract
              exposures, outcomes, and their connections in cohort.
            </p>
            <p className="medium-text">
              The utilities of Cohort Network include:
            </p>
            <ol className="small-text">
              <li>
                Provide visualization of cohort studies in a multi-layer fashion
              </li>
              <li>Reveal key exposures and outcomes studied</li>
              <li>Assist new research question design</li>
              <li>Enhance collaboration</li>
            </ol>
          </div>
          <div className="grid-item image-section">
            <img src={bookImg} className="cover-image" width="300" />
          </div>
        </div>
        <div className="grid-item diagram-section">
          <img src={diagramImg} className="diagram-image" />
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Cohort Network. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
