import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <header className="header-wrapper">
            <h2>Kolby Boesel</h2>
            <button
                className={`menu-toggle ${isDropdownOpen ? 'open' : ''}`}
                onClick={toggleDropdown}
                aria-label="Menu Toggle"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav className={`nav ${isDropdownOpen ? 'open' : ''}`}>
                <a href="mailto:kolbyzboesel@gmail.com">Email</a>
                <a href="https://github.com/kolbyboesel" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/kolby-boesel" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
                <a href="/Kolby_Resume.pdf" target="_blank" rel="noreferrer">
                    Resume
                </a>
            </nav>
        </header>
    );
};

export default Header;