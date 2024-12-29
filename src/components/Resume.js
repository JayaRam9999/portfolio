import React from "react";
import "./Resume.css"; // Optional for styling

const ResumePage = () => {
  return (
    <div className="resume-page">
      <h2>My Resume</h2>

      {/* Button to download the resume */}
      <a
        href="/Resume.pdf"  // Path to the resume in the public folder
        download="Resume.pdf"  // Name for the downloaded file
      >
        <button className="download-btn">Download Resume</button>
      </a>
    </div>
  );
};

export default ResumePage;
