import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs for sending the email

import "./Contact.css"; // Ensure your CSS is linked

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For displaying success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the email using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Error in sending message, please try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-boxes">
        <div className="contact-box">
          <h3>Location</h3>
          <p>krishna nagar, Guntur, Andhra Pradesh</p>
        </div>
        <div className="contact-box">
          <h3>Email</h3>
          <p>21jr1a05a9@gmail.com</p>
        </div>
        <div className="contact-box">
          <h3>Contact</h3>
          <p>8333017994</p>
        </div>
        <div className="contact-box">
          <h3>Working Hours</h3>
          <p>Mon-Fri: 9 AM - 5 PM</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send us a Message</h3>
        {status && <p className="status-message">{status}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
