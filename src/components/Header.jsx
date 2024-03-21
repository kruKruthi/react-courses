import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  return (
    <div className="app-header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
