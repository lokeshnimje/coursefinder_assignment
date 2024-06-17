import React from "react";
import "./footerStyle.css";
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <br />
      <br />
      <div>
        <p className="footer-title">Stay updated with KC Overseas</p>
        <div className="footer-form">
          <div>
            <input
              className="footer-input-box"
              type="text"
              placeholder="Email ID"
            />
          </div>
          <div>
            <div className="input-container">
              <input
                type="text"
                placeholder="I’m Interested in"
                className="input-field"
              />
              <span className="dropdown-icon">
                <FaAngleDown />
              </span>
            </div>
          </div>
          <div>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
