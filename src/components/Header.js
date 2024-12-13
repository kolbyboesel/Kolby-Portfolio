// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-wrapper">
      <h1>Kolby Boesel</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Header;