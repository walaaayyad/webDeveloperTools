import React from "react";
import {Container, Row, Col, Image } from "react-bootstrap";

function HeroSection() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col  xs={12} sm={12} md={6} lg={6}  
                className="d-flex justify-content-center align-items-start flex-column">
          <h1 className="text-start text-uppercase">
          <span className="grade-title me-3">Free tools</span>for<br/>Web Developers
          </h1>
          <p className="lead pe-5 mt-3">Unlock a world of top-tier web development resources—carefully curated to help you code better, design faster, and build like a pro.</p>
          
          </Col>

          <Col  xs={12} sm={12} md={6} lg={6}
                className="d-flex justify-content-center align-items-center">
            <Image
              src="./heroImg2.png" //https://www.freepik.com/free-vector/colorful-gradient-gamification-illustrated_21742931.htm#fromView=search&page=1&position=45&uuid=ee54b3db-3bbd-4a2a-bd9a-d2b299c4a1de&query=3d+web+
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;

//earth img [https://www.pinterest.com/pin/70931762876102460/]
