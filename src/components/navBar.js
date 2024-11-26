import React from "react";
import styled from "styled-components";
import logo from "../images/traicon_logo.svg"
// import { NavContainer, NavLogo, NavMenu, NavItem, NavLink } from "./Navbar.styles";
// Navbar container //
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f9cda;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;

  .tce-logo{
    width: 6.5vw;
    height: auto;
  }
  `;


// Logo
export const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

// Menu container
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #2f9cda;
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    padding: 1rem;
    display: none;
  }
`;
// Individual menu item
export const NavItem = styled.li`
  font-size: 1rem;
`;

// Links
export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <img src={logo} className="tce-logo" alt="" />
      <NavMenu>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
