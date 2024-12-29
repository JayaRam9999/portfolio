import React from "react";
import "./Skills.css"; // Ensure to link the corresponding CSS file

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {/* Python Skill */}
        <div className="skill-box">
          <img
            src="/python.png" // Image for Python (add image in the public folder)
            alt="Python"
            className="skill-icon"
          />
          <h3>Python</h3>
          <div className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-alt"></i>
          </div>
        </div>

        {/* HTML Skill */}
        <div className="skill-box">
          <img
            src="/html.png" // Image for HTML5 (add image in the public folder)
            alt="HTML"
            className="skill-icon"
          />
          <h3>HTML</h3>
          <div className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>

        {/* CSS Skill */}
        <div className="skill-box">
          <img
            src="/css.png" // Image for CSS3 (add image in the public folder)
            alt="CSS"
            className="skill-icon"
          />
          <h3>CSS</h3>
          <div className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>

        {/* C Skill */}
        <div className="skill-box">
          <img
            src="/c.png" // Image for C (add image in the public folder)
            alt="C"
            className="skill-icon"
          />
          <h3>C</h3>
          <div className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-alt"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>

        {/* ReactJS Skill */}
        <div className="skill-box">
          <img
            src="/react.png" // Image for ReactJS (add image in the public folder)
            alt="ReactJS"
            className="skill-icon"
          />
          <h3>ReactJS</h3>
          <div className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
