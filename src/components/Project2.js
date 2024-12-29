import React from "react";
import "./Project2.css"; // Ensure the CSS is linked

const Project2 = () => {
  return (
    <div className="project2-page">
      <h2>PrintMe</h2>

      {/* Image of PrintMe */}
      <div className="project2-image-container">
        <img
          src="/printme.png" // Ensure this image exists in the public folder
          alt="PrintMe Project"
          className="project2-image"
        />
      </div>

      {/* Project Information */}
      <div className="printme-info">
        <p>
          The "PrintMe" project aims to revolutionize the printing industry by introducing an intelligent, IoT-enabled printing solution. This system is designed to enhance the user experience by providing real-time monitoring of the printer’s status, maintenance needs, and operational data. The use of IoT sensors in the printer allows for remote diagnostics, predictive maintenance, and more efficient management of printing resources.
        </p>
        <p>
          By integrating cloud computing, users can monitor their printers' performance from anywhere, receive alerts when supplies are low, or when issues arise, and even track the usage history for analytics. This project also promotes sustainability by reducing unnecessary paper usage and increasing overall efficiency.
        </p>
      </div>
    </div>
  );
};

export default Project2;
