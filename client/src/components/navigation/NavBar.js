//Import React
import React from "react";

//Import CSS
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          Your Logo
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
