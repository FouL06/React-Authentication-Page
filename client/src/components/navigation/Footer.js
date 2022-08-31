//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import CSS
import "./Footer.css";

//Display Footer
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <p>&copy; Authentication Test. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
