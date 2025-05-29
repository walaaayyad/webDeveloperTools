import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="bg-body-transparent border-bottom border-dark"
      >
        <Container className="ms-5 pt-2">
          <Navbar.Brand href="#">
            {/* <img
              src="./logoImages/logo.png"
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            <p className="lead fw-bold">WEB TOOLS</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
