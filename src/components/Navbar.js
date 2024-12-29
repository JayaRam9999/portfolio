import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyPortfolio</h1>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/education" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            My Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            My Skills
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/certificates" 
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            My Certificates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
