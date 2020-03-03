import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

class Header extends Component {

  render = () => {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Mon beau blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Text>
                <Link to="/">Home</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/contact">Contact</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/pouet">404</Link>
              </Navbar.Text>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <SearchForm />
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  };
}

export default Header;
