import React from "react";
import "./Project1.css"; // Ensure the CSS is linked

const Project1 = () => {
  return (
    <div className="project1-page">
      <h2>IoT Device for Detecting Chemically Grown Species</h2>

      {/* Image of Device */}
      <div className="project1-image-container">
        <img
          src="/device.webp" // Path to the device image in the public folder
          alt="IoT Device"
          className="project1-image"
        />
      </div>

      {/* Project Information */}
      <div className="project1-info">
        <p>
          This project focuses on detecting chemically grown species using IoT sensors to promote sustainability and efficient monitoring across various domains. A network of IoT sensors, including pH, temperature, and gas sensors, is utilized to collect real-time environmental and chemical data. The system primarily distinguishes between organic and chemically grown species by analyzing pH levels, gas emissions, and temperature variations. 
        </p>
        <p>
          The IoT-based system monitors species like fish and hens, providing accurate and immediate identification of chemical influences. By integrating advanced algorithms, the solution ensures precise analysis and offers real-time notifications for anomalies. This project addresses the limitations of traditional methods by offering a portable, user-friendly IoT-based alternative.
        </p>
      </div>
    </div>
  );
};

export default Project1;
