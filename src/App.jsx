// App.js
import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/1-navBar";
import Hero from "./components/2-heroSection";
import ButtonsBox from "./components/3-buttonsBox";
import ToolsBox from "./components/4-toolsBox";
import { ButtonProvider } from "./ButtonContext"; // Import the provider

function App() {
  return (
    <ButtonProvider>
      <Container fluid className="hero-section pt-5">
        <NavBar />

        <Container
          fluid
          className="d-flex flex-wrap align-items-center justify-content-center pt-5"
        >
          {/* Start Left Section */}
          <Col className="hero-left-section col-sm-12 col-md-12 col-lg-4">
            <Container>
              <Row>
                <Hero />
                <ButtonsBox />
              </Row>
            </Container>
          </Col>
          {/* End Left Section */}

          {/* Start Right Section */}
          <Col className="hero-right-section text-center mt-5 col-sm-12 col-md-12 col-lg-8 glass-bg d-flex align-items-center justify-content-center">
            <ToolsBox />
          </Col>
          {/* End Right Section */}
        </Container>
      </Container>
    </ButtonProvider>
  );
}

export default App;
