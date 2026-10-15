import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/FBF_logo_new.png'

const Header = () => {
  return (
    <>
      <Navbar id="header" variant="dark">
        <img id="logo" alt="Forever Body Fitness Logo" src={Logo}></img>
        <Nav className="justify-content-end" id="navBarRight">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item id="item" href="/">Home</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id="item" href="/services">Services</NavDropdown.Item>
            <NavDropdown.Item id="item" href="/blog">Blog</NavDropdown.Item>
            <NavDropdown.Item id="item" href="/testimonials">Testimonials</NavDropdown.Item>
            <NavDropdown.Item id="item" href="/aboutme">About Me</NavDropdown.Item>
            <NavDropdown.Item id="item" href="/contact">Contact Me</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header;