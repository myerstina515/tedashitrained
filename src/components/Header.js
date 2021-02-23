import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" id="heading">Tedashi Trained</Navbar.Brand>
        <Nav className="justify-content-end" id="navBarRight">
          <Nav.Item>
            <Nav.Link id="item" href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="item" href="/services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="item" href="/blog">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="item" href="/testimonials">Testimonials</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header;