/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav-wrapper">
        <h3 className="footer-nav-heading">More Info</h3>
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Company
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Sales
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Return
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Privacy Policy
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h2 className="contact-heading">Sing Up for our Newspaper</h2>
        <p className="contact-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form>
          <div className="inputs-group">
            <input
              type="text"
              className="inputs-group-text"
              placeholder="First Name"
            />
            <input
              type="text"
              className="inputs-group-text"
              placeholder="Last Name"
            />
          </div>
          <div className="inputs-group">
            <input
              type="email"
              className="inputs-group-email"
              placeholder="Your Email Adress"
            />
            <input type="submit" className="inputs-group-btn" value="Sing Up" />
          </div>
        </form>

        <ul className="social-icons">
          <li className="social-icons-item">
            <a href="#" className="social-icons-link">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#" className="social-icons-link">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#" className="social-icons-link">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#" className="social-icons-link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#" className="social-icons-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-icons-item">
            <a href="#" className="social-icons-link">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-list-wrapper">
        <h3 className="contact-list-heading">Clothes Store</h3>
        <ul className="contact-list">
          <li className="contact-list-item">
            <a href="#" className="contact-list-link">
              555 7777 7777
            </a>
          </li>
          <li className="contact-list-item">
            <a href="#" className="contact-list-link">
              Info@gmail.com
            </a>
          </li>
          <li className="contact-list-item">
            <a href="#" className="contact-list-link">
              New York, Broadway
            </a>
          </li>
          <li className="contact-list-item">
            <a href="#" className="contact-list-link">
              FREE US Delivery
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
