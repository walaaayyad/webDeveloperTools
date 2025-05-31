import React from "react";
import {Row, Col, Button } from "react-bootstrap";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context

function ButtonsBox({ handleClose, onButtonClick }) {
  const { selectedCategory, setSelectedCategory } = useButtonContext(); // Get shared state

  return (
    <>
    <Row className="">
      <Col className="col-12 my-3">
        <div className="btns-box text-center">
          <Button
            variant="outline-primary"
            className={selectedCategory === "inspire" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("inspire"); // Update shared state
              handleClose();
              onButtonClick();
            }}
          >
            Inspiration
          </Button>
          <Button
            variant="outline-primary"
            className={selectedCategory === "design" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("design");
              handleClose();
            }}
          >
            Design
          </Button>
          <Button
            variant="outline-primary"
            className={selectedCategory === "assets" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("assets");
              handleClose();
            }}
          >
            Assets
          </Button>
          <Button
            variant="outline-primary"
            className={selectedCategory === "img" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("img");
              handleClose();
            }}
          >
            CSS Tools
          </Button>
          <Button
            variant="outline-primary"
            className={selectedCategory === "font" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("font");
              handleClose();
            }}
          >
            JS Tools
          </Button>
          <Button
            variant="outline-primary"
            className={selectedCategory === "screenShot" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("screenShot");
              handleClose();
            }}
          >
            Production Tools
          </Button>
        </div>
      </Col>
    </Row>  
    </>
  );
}

export default ButtonsBox;
