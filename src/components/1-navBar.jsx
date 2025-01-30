import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container fluid className="ms-5">
          <Navbar.Brand href="#">
            <img
              src="./logoImages/logo.png"
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
