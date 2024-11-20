import React, { useState } from "react";
import Logo from "../../assets/Logo_image.png"
import menu_bar from "../../assets/menu-burger.svg";
import "./Navigation.css"; 
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();
  return (
    <nav className="navbar">
  
      <div className="navbar-logo" onClick={()=>navigate('/')}>
        <img className="logo-img" src={Logo} alt="Logo" />
        <div className="logo-text" >
          <h2>Girman</h2>
          <p>Technologies</p>
        </div>
      </div>


      <div className="navbar-links">
        <a href="#" className="navbar-link active">SEARCH</a>
        <a href="https://girmantech.com/" className="navbar-link">WEBSITE</a>
        <a href="https://www.linkedin.com/company/girmantech/" className="navbar-link">LINKEDIN</a>
        <a href="mailto:contact@girmantech.com" className="navbar-link">CONTACT</a>
      </div>


      <div className="navbar-menu">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-btn">
          <img src={menu_bar} alt="Menu" className="menu-icon" />
        </button>
      </div>


      {isMenuOpen && (
        <div className="mobile-links">
          <a href="#" className="mobile-link">SEARCH</a>
          <a href='https://girmantech.com/' className="mobile-link">WEBSITE</a>
          <a href="https://www.linkedin.com/company/girmantech/" className="mobile-link">LINKEDIN</a>
          <a href="mailto:contact@girmantech.com" className="mobile-link">CONTACT</a>
        </div>
      )}
    </nav>
  );
}