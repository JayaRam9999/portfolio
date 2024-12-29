import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates"; // Import Certificates
import CertificateDetail from "./components/CertificateDetail"; // Import CertificateDetail

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} /> {/* Route for Certificates */}
        <Route path="/certificate/:id" element={<CertificateDetail />} /> {/* Route for Certificate Detail */}
      </Routes>
    </Router>
  );
}

export default App;
