import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to={"/"}>
            <Navbar.Brand> ProShop </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* from here we're gonna start */}
              <LinkContainer to={"/"}>
                <Nav.Link>
                  Home <i className="fas fa-home"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  Cart <i className="fas fa-shopping-cart"></i>
                </Nav.Link>
              </LinkContainer>{" "}
              {userInfo ? (
                <Nav>
                  <i></i>
                  <NavDropdown title={userInfo.name} id="username">
                    {" "}
                    <LinkContainer to={"/profile"}>
                      <NavDropdown.Item>
                        Profile <i className="fas fa-chess-king"></i>
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout{" "}
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    Sign In <i className="fas fa-user"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to={"/admin/userlist"}>
                    <NavDropdown.Item>
                      Users <i className="fa fa-users"></i>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/admin/productlist"}>
                    <NavDropdown.Item>
                      Products <i className="fa fa-product-hunt"></i>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={"/admin/orderlist"}>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
            <SearchBox />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
