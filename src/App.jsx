import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navBar";
import Hero from "./components/heroSection";
import ButtonsBox from "./components/buttonsBox";
import ToolsBox from "./components/toolsBox";

function App() {
  return (
    <Container
      fluid
      className="border hero-section d-flex align-items-center justify-content-center flex-column"
    >
      <NavBar />

      <Container fluid className="d-flex ">
        {/* Start Left Section */}
        <Col className="col-4">
          <Container>
            <Row>
              <Hero />
              <ButtonsBox />
            </Row>
          </Container>
        </Col>
        {/* End Left Section */}

        {/* Start Right Section */}
        <Col className="col-8 glass-bg">
          <ToolsBox />
        </Col>
        {/* End Right Section */}
      </Container>
    </Container>
  );
}

export default App;
