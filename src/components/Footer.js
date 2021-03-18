import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import { MdFingerprint } from "react-icons/md";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the journey with us!</p>
        <div className="input-areas">
          <form action="">
            <input type="email" name="email" placeholder="Email" />
            {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
            <button className="subscribe">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Career</Link>
            <Link to="/">Find Us</Link>
            <Link to="/">Testomonials</Link>
            <Link to="/">Terms and Condition</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
      </div>

      <ul className="icons">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
