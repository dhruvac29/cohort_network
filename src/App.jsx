import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUsPage from "./ContactUsPage";
import CohortNetworkPage from "./CohortNetworkPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/cohort-network" element={<CohortNetworkPage />} />
      </Routes>
      <footer className="footer">
        <p>© 2024 Cohort Network. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
