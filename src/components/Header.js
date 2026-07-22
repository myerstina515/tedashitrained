import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/FBFLogo.JPG'

const Header = () => {
  return (
    <>
      <Navbar id="header" bg="dark" variant="dark">
        <img id="logo" alt="Tedashi Trained Logo Kettlebell" src={Logo}></img>
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