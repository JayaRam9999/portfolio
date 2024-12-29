import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Certificates.css"; // Ensure this is correctly linked

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h2 className="section-title">My Certificates</h2>
      <div className="certificates-gallery">
        {/* Image 1 */}
        <div className="certificate-item">
          <Link to="/certificate/1">
            <img
              src="/1.jpg" // Correct path for images in public folder
              alt="Certificate 1"
              className="certificate-image"
            />
          </Link>
        </div>
        {/* Image 2 */}
        <div className="certificate-item">
          <Link to="/certificate/2">
            <img
              src="/2.jpg"
              alt="Certificate 2"
              className="certificate-image"
            />
          </Link>
        </div>
        {/* Image 3 */}
        <div className="certificate-item">
          <Link to="/certificate/3">
            <img
              src="/3.jpg"
              alt="Certificate 3"
              className="certificate-image"
            />
          </Link>
        </div>
        {/* Image 4 */}
        <div className="certificate-item">
          <Link to="/certificate/4">
            <img
              src="/4.jpg"
              alt="Certificate 4"
              className="certificate-image"
            />
          </Link>
        </div>
        {/* Image 5 */}
        <div className="certificate-item">
          <Link to="/certificate/5">
            <img
              src="/5.jpg"
              alt="Certificate 5"
              className="certificate-image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
