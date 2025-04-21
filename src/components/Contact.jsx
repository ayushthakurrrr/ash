import React from 'react';
import '../css/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-logo">ash.</h1>

      <div className="contact-icons">
        <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
