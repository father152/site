import React from "react";
import Logo from "../Image/чудак.png";
import { Link } from "react-router-dom";
import "../Header/header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="container__header">
        <div className="image__header">
          <Link to="/home"><img src={Logo} alt="logo"></img></Link>
        </div>
        <div className="navigation__header">
            <ul className="navigation-list">
                <li><Link to="/about">ABOUT AS</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/contacts">CONTACTS</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export { Header };
