/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={require("../../images/logo.png")}
          alt="logo"
          className="logo-img"
        />
      </div>
      <nav className="first-nav">
        <ul className="first-nav-list">
          <li className="first-nav-item">
            <a href="#" className="first-nav-link">
              <FaSearch />
              Search
            </a>
          </li>
          <li className="first-nav-item">
            <a href="#" className="first-nav-link">
              Contact Us
            </a>
          </li>
          <li className="first-nav-item">
            <a href="#" className="first-nav-link">
              Sign In
            </a>
          </li>
          <li className="first-nav-item">
            <a href="#" className="first-nav-link">
              <FaShoppingCart />
              (0)
            </a>
          </li>
        </ul>
      </nav>
      <div className="heading">
        <h1 className="heading-text">Clothes Store</h1>
      </div>
      <nav className="second-nav">
        <ul className="second-nav-list">
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              Shop
            </a>
          </li>
          <li className="second-nav-item dropdown-li">
            <a href="#" className="second-nav-link">
              Gift Ideas
            </a>
            <ul className="dropdown">
              <li className="dropdown-item">
                <a href="#" className="dropdown-link">
                  Under $25
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link">
                  $25 - $50
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link">
                  Above $50
                </a>
              </li>
            </ul>
          </li>
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              About Us
            </a>
          </li>
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              Our Team
            </a>
          </li>
          <li className="second-nav-item">
            <a href="#" className="second-nav-link">
              News
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
