import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setDropdownOpen(false); // Close the dropdown after navigation
    };

    return (
        <header className="header-wrapper">
            <div className="header-content">
                <a href="/" className="logo">
                    <h2>Kolby Boesel</h2>
                </a>
                <button
                    className={`menu-toggle ${isDropdownOpen ? 'open' : ''}`}
                    onClick={toggleDropdown}
                    aria-label="Menu Toggle"
                >
                    {isDropdownOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <nav className={`nav ${isDropdownOpen ? 'open' : ''}`}>
                    <button onClick={() => handleNavigation('/Projects')}>
                        Projects
                    </button>
                    <button onClick={() => handleNavigation('/Experience')}>
                        Experience
                    </button>
                    <a href="/Kolby_Resume.pdf" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;