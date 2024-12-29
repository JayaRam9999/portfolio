import React from "react";
import { useParams } from "react-router-dom"; // To read the URL parameter
import "./CertificateDetail.css"; // Optional: Add styling

const certificates = [
  { id: 1, image: "/1.jpg" },
  { id: 2, image: "/2.jpg" },
  { id: 3, image: "/3.jpg" },
  { id: 4, image: "/4.jpg" },
  { id: 5, image: "/5.jpg" }
];

const CertificateDetail = () => {
  const { id } = useParams(); // Get the certificate ID from the URL
  const certificate = certificates.find((cert) => cert.id === parseInt(id));

  if (!certificate) {
    return <div>Certificate not found!</div>; // Handle case if certificate is not found
  }

  return (
    <div className="certificate-detail">
      <h1>Certificate {certificate.id}</h1>
      <img
        src={certificate.image}
        alt={`Certificate ${certificate.id}`}
        className="full-certificate-image"
      />
    </div>
  );
};

export default CertificateDetail;
