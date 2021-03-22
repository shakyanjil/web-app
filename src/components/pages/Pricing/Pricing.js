import React from "react";
import { FaCrown, FaFeather, FaFire, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { IconContext } from "react-icons/lib";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaStar />
                </div>
                <h3>Plan A</h3>
                <h4>$24.99/</h4>
                <p>per month</p>
                <ul className="offer-items">
                  <li>Unlimited Transactions</li>
                  <li>Exclusive Plans</li>
                  <li>Platinum Cards</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Sign Up
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <span className="offer"></span>
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaCrown />
                </div>
                <h3>Plan A++</h3>
                <h4>$30.99/</h4>
                <p>per month</p>
                <ul className="offer-items">
                  <li>Unlimited Transactions</li>
                  <li>Exclusive Plans</li>
                  <li>Platinum Cards</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Sign Up
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFeather />
                </div>
                <h3>Plan B</h3>
                <h4>$40.00/</h4>
                <p>per month</p>
                <ul className="offer-items">
                  <li>Unlimited Transactions</li>
                  <li>Exclusive Plans</li>
                  <li>Platinum Cards</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Sign Up
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
