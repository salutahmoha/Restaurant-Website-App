import React from "react";
import logo from "../../assets/restaurant-web0logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <section id="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <div className="nav-items">
          <ul className="nav-lists">
            <li className="nav-list">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-list">
              <Link to="/Services">Services</Link>
            </li>
            <li className="nav-list">
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
