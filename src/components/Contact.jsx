import React from 'react';
import '../css/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-logo">ash.</h1>

      <div className="contact-icons">
        <a href="mailto:ashservices.space@outlook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/company/ashservices/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/ashservices.space?igsh=MWNocWYzYjdqZmdweA==" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
