import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <a href="https://artisanalweb.studio/" className="logo">
        CSWeb
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Témoignages</a>
        <a href="#team">Equipe</a>
        <a href="https://artisanalweb.studio/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
