import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUsPage from "./ContactUsPage";
import CohortNetworkPage from "./CohortNetworkPage";
import "./App.css";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/cohort-network" element={<CohortNetworkPage />} />
        <Route path="/about" element={<HomePage />} />
      </Routes>
      
    </Router>
  );
};

export default App;
