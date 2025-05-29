import React from "react";
import {Row, Col, Image } from "react-bootstrap";

function HeroSection() {
  return (
    <>
      <Row className="border">
        <Col className="col-6">
        <h1 className="text-center">
          Web Developer <br /> Tools
        </h1>
        
      </Col>

      <Col className="col-6">
        <Image
          src="./heroImg.png"
          className="hero-img"
          width={350}
        />
      </Col>
      </Row>
    </>
  );
}

export default HeroSection;
