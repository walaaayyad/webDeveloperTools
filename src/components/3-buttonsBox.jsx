import React, {useEffect} from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import AOS from 'aos';

function ButtonsBox({ handleClose, onButtonClick }) {
  useEffect(() => {
    AOS.refresh(); // Recalculate AOS positions if dynamic content is used
  }, []);

  const { selectedCategory, setSelectedCategory } = useButtonContext(); // Get shared state

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
                  setSelectedCategory("inspire"); // Update shared state
                  handleClose;
                  onButtonClick;
                }}
              >
                Inspiration
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "design" ? "active" : ""}
                onClick={() => {
                  setSelectedCategory("design");
                  handleClose;
                }}
              >
                Design
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "assets" ? "active" : ""}
                onClick={() => {
                  setSelectedCategory("assets");
                  handleClose;
                }}
              >
                Assets
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "cssTools" ? "active" : ""}
                onClick={() => {
                  setSelectedCategory("cssTools");
                  handleClose;
                }}
              >
                CSS Tools
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "optimization" ? "active" : ""}
                onClick={() => {
                  setSelectedCategory("optimization");
                  handleClose;
                }}
              >
                Optimization
              </Button>
              <Button
                variant="outline-primary"
                className={selectedCategory === "production" ? "active" : ""}
                onClick={() => {
                  setSelectedCategory("production");
                  handleClose;
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
