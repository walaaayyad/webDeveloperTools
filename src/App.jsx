// App.js
import React, { useRef } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/1-navBar";
import Hero from "./components/2-heroSection";
import ButtonsBox from "./components/3-buttonsBox";
import ToolsBox from "./components/5-toolsBox";
import OffCanvas from "./components/4-offCanvas";
import { ButtonProvider } from "./ButtonContext"; // Import the provider

function App() {
  // Create a reference to the data section (child component)
  const dataSectionRef = useRef(null);

  // Scroll to the data section
  const handleScrollToData = () => {
    if (dataSectionRef.current) {
      dataSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ButtonProvider>
      <Container fluid className="hero-section pt-5">
        <div className="bg-circle bg-left-circle"></div>
        <div className="bg-circle bg-right-circle"></div>
        <div className="bg-circle bg-middle-circle"></div>
        <NavBar />
        <Hero />
        <ButtonsBox />
        <ToolsBox dataSectionRef={dataSectionRef} />
        <Container
          fluid
          className="border border-info"
        >
          {
          /*------------------------ Start Left Section 
          <Col className="hero-left-section col-sm-12 col-md-12 col-lg-3 border">
            <Container fluid>
                
                <ButtonsBox /> 
                <OffCanvas onButtonClick={handleScrollToData} /> 
            </Container>
          </Col>
          ------------------------- End Left Section */}

          {/* Start Right Section */}
          {/* <Col className="hero-right-section text-center mt-5 col-12 col-sm-12 col-md-12 col-lg-9 glass-bg d-flex align-items-center justify-content-center">
            <ToolsBox dataSectionRef={dataSectionRef} />
          </Col> */}
          {/* End Right Section */}
        </Container>
      </Container>
    </ButtonProvider>
  );
}

export default App;
