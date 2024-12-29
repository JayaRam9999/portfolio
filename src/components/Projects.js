import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Project.css"; // Ensure the CSS is linked

const Project = () => {
  return (
    <div className="project-section">
      <h2 className="project-title">Projects</h2>
      <div className="project-boxes">
        {/* Project 1 Box */}
        <Link to="/project1" className="project-box">
          <img
            src="/device.webp" // Replace with your actual image path
            alt="IoT Device"
            className="project-image"
          />
          <h3 className="project-title-text">IoT Sensor for Species Detection</h3>
          <p className="project-description">
            This project involves detecting chemically grown species using IoT sensors. The system analyzes pH levels, temperature, and gas emissions to distinguish between organic and chemically grown species like fish and hens.
          </p>
        </Link>

        {/* Project 2 Box */}
        <Link to="/project2" className="project-box">
          <img
            src="/printme.png" // Replace with your second image path
            alt="Project 2"
            className="project-image"
          />
          <h3 className="project-title-text">Project 2</h3>
          <p className="project-description">
            Project 2 description goes here. This can be an example of another project you're showcasing.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
