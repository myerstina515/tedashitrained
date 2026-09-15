import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/FBF_logo_new.png'
import './Header.scss';

const Header = () => {
  return (
    <>
      <Navbar id="header" variant="dark">
        <img id="logo" alt="Forever Body Fitness Logo" src={Logo}></img>
        <Nav className="justify-content-end" id="navBarRight">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item id="item" href="/">Home</NavDropdown.Item>
            <NavDropdown.Divider />
            <div className="services-menu">
              <NavDropdown.Item id="item" href="/services">
                Services <span className="submenu-arrow">›</span>
              </NavDropdown.Item>

              <div className="services-submenu">
                <NavDropdown.Item href="/services/inperson">
                  In Person Training
                </NavDropdown.Item>

                <NavDropdown.Item href="/services/online">
                  Online Training
                </NavDropdown.Item>

                <NavDropdown.Item href="/services/wellness">
                  Health & Wellness Coaching
                </NavDropdown.Item>

                <NavDropdown.Item href="/services/inbody">
                  InBody Scans
                </NavDropdown.Item>
              </div>
            </div>
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