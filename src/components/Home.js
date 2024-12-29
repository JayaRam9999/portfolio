import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [professionIndex, setProfessionIndex] = useState(0);

  const professions = [
    "Web Developer",
    "Programmer",
    "Web Designer",
    "Software Developer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 5000); // Change profession every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [professions.length]); // Add professions.length as a dependency

  return (
    <div className="home">
      <div className="profile">
        {/* Profile image with rotating green circle */}
        <div className="profile-image-container">
          <div className="rotating-circle"></div>
          <img
            src="/jaya.jpg" // Reference the image in the public folder
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Name */}
        <h1>M Jayaram</h1>

        {/* Animated profession */}
        <div className="profession">
          <span key={professionIndex} className="dynamic-profession">
            {professions[professionIndex]}
          </span>
        </div>

        {/* Social Profiles */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jayaram9999"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile" // Added accessibility label
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/jayaram.m9999"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram Profile" // Added accessibility label
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="mailto:21jr1a05a9@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
