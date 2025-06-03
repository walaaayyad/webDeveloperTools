import React, {useEffect} from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import AOS from 'aos';

function ButtonsBox({ onClick }) {
  useEffect(() => {
    AOS.refresh(); // Recalculate AOS positions if dynamic content is used
  }, []);

  const { selectedCategory, setSelectedCategory } = useButtonContext(); // Get shared state
  const btnName = ["inspire","design","assets","cssTools","optimization","production"];
  return (
    <>
      <Container className="" data-aos="fade-up" data-aos-duration="2000">
        <Row className="mt-5">
          <Col className="col-12 my-3">
            <div className="btns-box text-center">
              <Button
                variant="outline-primary"
                className={selectedCategory === "inspire" ? "active" : ""}               
                onClick={() => {
                  onClick();
                  setSelectedCategory("inspire"); 
                }}
              >
                Inspiration
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "design" ? "active" : ""}
                onClick={() => {
                  onClick();
                  setSelectedCategory("design");
                }}
              >
                Design
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "assets" ? "active" : ""}
                onClick={() => {
                  onClick();
                  setSelectedCategory("assets");
                }}
              >
                Assets
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "cssTools" ? "active" : ""}
                onClick={() => {
                  onClick();
                  setSelectedCategory("cssTools");

                }}
              >
                CSS Tools
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "optimization" ? "active" : ""}
                onClick={() => {
                  onClick();
                  setSelectedCategory("optimization");

                }}
              >
                Optimization
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "production" ? "active" : ""}
                onClick={() => {
                  onClick();
                  setSelectedCategory("production");
                }}
              >
                Production
              </Button>
            </div>
          </Col>
        </Row>  
      </Container>
    </>
  );
}

export default ButtonsBox;
