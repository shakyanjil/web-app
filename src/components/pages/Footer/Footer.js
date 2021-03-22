import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import "./Footer.css";
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
            <h2>Social Site</h2>
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
        <Link to={{ pathname: "C:/xampp/htdocs/reservation/abc.php"}} target="_blank" className="icon-style">
          <FaFacebook />
        </Link>
        </li>
        <li>
        <Link to={{ pathname: "https://github.com" }} target="_blank" className="icon-style">
          <FaGithub />
        </Link>
        </li>
        <li>
        <Link to={{ pathname: "https://instagram.com" }} target="_blank" className="icon-style">
          <FaInstagram />
        </Link> 
        </li>
        <li>
        <Link to={{ pathname: "https://twitter.com" }} target="_blank" className="icon-style">
          <FaTwitter />
        </Link>
        </li>
        <li>
        <Link to={{ pathname: "https://linkedin.com" }} target="_blank" className="icon-style">
          <FaLinkedin />
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
