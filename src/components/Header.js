import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/">
              <Navbar.Brand href="#">User Registration</Navbar.Brand>
            </Link>
            <Link to="/users">
              <Navbar.Brand href="#">Users</Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
