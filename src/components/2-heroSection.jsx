import React from "react";
import {Row, Col, Image } from "react-bootstrap";

function HeroSection() {
  return (
    <>
      <Row className="mt-5 border border-danger">
        <Col className="col-6 d-flex justify-content-center align-items-start flex-column border">
        <h1 className="text-start text-uppercase">
         <span className="grade-title me-3">Free tools</span>for<br/>Web Developers
        </h1>
        <p className="lead pe-5 mt-3">Unlock a world of top-tier web development resources—carefully curated to help you code better, design faster, and build like a pro.</p>
        
      </Col>

      <Col className="col-6 d-flex justify-content-center align-items-center  border">
        <Image
          src="./hero.png" //https://www.freepik.com/free-vector/colorful-gradient-gamification-illustrated_21742931.htm#fromView=search&page=1&position=45&uuid=ee54b3db-3bbd-4a2a-bd9a-d2b299c4a1de&query=3d+web+
          className="hero-img"
        />
      </Col>
      </Row>
    </>
  );
}

export default HeroSection;

//earth img [https://www.pinterest.com/pin/70931762876102460/]
