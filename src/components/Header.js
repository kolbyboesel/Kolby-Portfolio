import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
                    <div className='logo-div'>
                        <img src="/logo512.png" alt="Logo" className="logo-image" />
                        <h2>Kolby Boesel</h2>
                    </div>
                </a>
                <button
                    className={`menu-toggle ${isDropdownOpen ? 'open' : ''}`}
                    onClick={toggleDropdown}
                    aria-label="Menu Toggle"
                >
                    {isDropdownOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <nav className={`nav ${isDropdownOpen ? 'open' : ''}`}>
                    <button
                        onClick={() => handleNavigation('/')}
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavigation('/Projects')}
                        className={location.pathname === '/Projects' ? 'active' : ''}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleNavigation('/Experience')}
                        className={location.pathname === '/Experience' ? 'active' : ''}
                    >
                        Experience
                    </button>
                    <a
                        href="/Kolby_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="resume-link"
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;