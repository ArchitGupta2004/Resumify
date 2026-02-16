import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Resumify</h3>

        <p>
          Build professional resumes easily with modern templates and AI support.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/builder">Builder</a>
          <a href="/templates">Templates</a>
          <a href="/about">About</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Resumify by Archit • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
