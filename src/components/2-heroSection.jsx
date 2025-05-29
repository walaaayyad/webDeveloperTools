import React from "react";
import {Row, Col, Image } from "react-bootstrap";

function HeroSection() {
  return (
    <>
      <Row className="p-5  m-5 border border-danger">
        <Col className="col-6">
        <h1 className="text-center">
         <span className="grade-title">Free</span> Web Developer <br /> Tools
        </h1>
        
      </Col>

      <Col className="col-6">
        <Image
          src="./heroImg.png" //https://www.freepik.com/free-vector/colorful-gradient-gamification-illustrated_21742931.htm#fromView=search&page=1&position=45&uuid=ee54b3db-3bbd-4a2a-bd9a-d2b299c4a1de&query=3d+web+
          className="hero-img"
          width={350}
        />
      </Col>
      </Row>
    </>
  );
}

export default HeroSection;
