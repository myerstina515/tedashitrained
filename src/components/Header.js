import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar id="header" bg="dark" variant="dark">
        <Navbar.Brand href="/" id="heading">Tedashi Trained</Navbar.Brand>
        <Nav className="justify-content-end" id="navBarRight">
          {/* <Nav.Item>
            <Nav.Link id="item" href="/">Home</Nav.Link>
          </Nav.Item> */}
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item id="item" href="/">Home</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id="item" href="/services">Services</NavDropdown.Item>
            <NavDropdown.Item id="item" href="/blog">Blog</NavDropdown.Item>
            <NavDropdown.Item id="item" href="/testimonials">Testimonials</NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Item>
            <Nav.Link id="item" href="/services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="item" href="/blog">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="item" href="/testimonials">Testimonials</Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar>
    </>
  )
}

export default Header;