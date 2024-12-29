import React from "react";
import "./Education.css"; // Ensure the CSS is linked

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-boxes">
        <div className="education-box">
          <img src="/kits.jpg" alt="Kits" className="education-image" />
          <h3 className="education-title">B.Tech</h3>
          <p className="education-description">
            Computer Science And Engineering<br />
            [KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES]
            [2025]
            [score=84%]
          </p>
        </div>
        <div className="education-box">
          <img
            src="/bhashyam.png" // Make sure this path is correct in your public folder
            alt="Bhashyam Junior College"
            className="education-image"
          />
          <h3 className="education-title">Intermediate</h3>
          <p className="education-description">
            Intermediate in MPC (Maths, Physics, Chemistry)<br />
            [Bhashyam Junior College ] 
            [2021] 
            [score=96%]
          </p>
        </div>
        <div className="education-box">
          <img src="/gsr.jpg" alt="GSR EM High School" className="education-image" />
          <h3 className="education-title">School</h3>
          <p className="education-description">
            SSC (10th Grade)<br />
            [GSR EM HIGH SCHOOL] [2019] [score=93%]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
