import React from "react";
import { useCart } from "./CartContext"; // Import the useCart hook
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const { cartItems } = useCart(); // Use the useCart hook to get cartItems

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/reservation">Reservation</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/admindashboard">Admin</Nav.Link>
              <Nav.Link as={Link} to="/staffdashboard">Staff</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-cart-fill"></i>
                  <em className="roundpoint">{cartItems.length}</em>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <div className="cart">
                  <i className="bi bi-person-circle"></i>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
