// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>Kolby Boesel</h1>
            <Nav>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;