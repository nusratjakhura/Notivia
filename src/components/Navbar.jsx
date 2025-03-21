import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#afe9ff", padding: "1rem" }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.jpg" alt="Logo" style={{ width: "50px", height: "50px", marginRight: "10px" }} />
          <span style={{ fontWeight: "bold", fontSize: "1.8rem", color: "#333" }}>Notivia</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ fontSize: "1.2rem", color: "#333", margin: "0 10px" }}>Home</Nav.Link>
            <Nav.Link href="/features" style={{ fontSize: "1.2rem", color: "#333", margin: "0 10px" }}>Features</Nav.Link>
            <Nav.Link href="/about" style={{ fontSize: "1.2rem", color: "#333", margin: "0 10px" }}>About</Nav.Link>
            <Nav.Link href="/contact" style={{ fontSize: "1.2rem", color: "#333", margin: "0 10px" }}>Contact</Nav.Link>
            <Nav.Link href="/login" style={{
              fontSize: "1.2rem",
              backgroundColor: "#ff758c",
              color: "white",
              padding: "8px 15px",
              borderRadius: "5px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
            }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
