import React from "react";
import { Col, Image } from "react-bootstrap";

function HeroSection() {
  return (
    <>
      <Col className="col-12 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center mb-5">
          Web Developer <br /> Tools
        </h1>
        <Image
          src="./logoImages/person2.png"
          className="hero-img"
          width={400}
        />
      </Col>
    </>
  );
}

export default HeroSection;
