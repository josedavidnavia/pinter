// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../img/logo.jpg';
import logoflex from '../img/logoflex.png';
import hamburguesa from '../img/hamburguesa.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Cerrar el menú hamburguesa después del clic
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-desktop" />
          <img src={logoflex} alt="Logo Flex" className="logo-mobile" />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={() => handleLinkClick('#home')}>Home</a></li>
          <li><a href="#game" className={activeLink === '#game' ? 'active' : ''} onClick={() => handleLinkClick('#game')}>Game</a></li>
          <li><a href="#news" className={activeLink === '#news' ? 'active' : ''} onClick={() => handleLinkClick('#news')}>News & Media Gallery</a></li>
          <li><a href="#community" className={activeLink === '#community' ? 'active' : ''} onClick={() => handleLinkClick('#community')}>Community</a></li>
          <li><a href="#merch" className={activeLink === '#merch' ? 'active' : ''} onClick={() => handleLinkClick('#merch')}>Merch</a></li>
          <li><a href="#help" className={activeLink === '#help' ? 'active' : ''} onClick={() => handleLinkClick('#help')}>Help</a></li>
          <li><a href="#Game mode" className={activeLink === '#Game mode' ? 'active' : ''} onClick={() => handleLinkClick('#Game mode')}>Game mode</a></li>
          {/* Agregar botón "Play Now" al final de la lista de enlaces */}
          <li className="play-now-mobile"><button className="play-now">Play Now</button></li>
        </ul>
        <img
          src={hamburguesa}
          alt="Menu"
          className="hamburger-menu"
          onClick={toggleMenu}
        />
        <button className="play-now play-now-desktop">Play Now</button>
      </nav>
    </header>
  );
};

export default Navbar;
