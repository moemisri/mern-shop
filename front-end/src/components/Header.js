import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand> ProShop </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to={"/cart"}>
              <Nav.Link>
                Cart <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Nav.Link>
                Sign In <i className="fas fa-user"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
