// About.js (React Component for About Page)

import React from "react";
import "./About.css"; // Add styling for the About page

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p className="intro">
        Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. 
        Through comprehensive exposure to the underlying concepts and applying them vividly to various projects, 
        my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms 
        to solve real-world industry problems.
      </p>

      <div className="personal-info">
        <h2>Personal Information</h2>
        <p><strong>Birthday:</strong> 05 April 2002</p>
        <p><strong>Phone:</strong> +91 8333017994</p>
        <p><strong>City:</strong> Guntur, Andhra Pradesh, 522006</p>
        <p><strong>Email:</strong> <a href="mailto:21jr1a05a9@gmail.com">21jr1a05a9@gmail.com</a></p>
      </div>

      {/* Interests Section */}
      <div className="interests">
        <h2>Interests</h2>
        <p>
          I have a deep interest in the fields of software development, web development, and AI. I am passionate about learning new technologies and building solutions that make a real-world impact.
        </p>
        
        {/* Four boxes for Interests */}
        <div className="interest-boxes">
          <div className="interest-box">Web Development</div>
          <div className="interest-box">Web Designing</div>
          <div className="interest-box">Software Development</div>
          <div className="interest-box">Programming</div>
        </div>
      </div>
    </div>
  );
};

export default About;
