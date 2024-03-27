import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  return (
    <div className="app-header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-button" onClick={() => {
            buttonText === "Login" ? setButtonText("Logout") : setButtonText("Login");
          }}>{buttonText}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
