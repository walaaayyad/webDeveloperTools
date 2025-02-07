import React from "react";
import { Col, Button } from "react-bootstrap";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context

function ButtonsBox({ handleClose }) {
  const { selectedCategory, setSelectedCategory } = useButtonContext(); // Get shared state

  return (
    <>
      <Col className="col-12 mt-5">
        <div className="btns-box text-center">
          <Button
            variant="outline-secondary"
            className={selectedCategory === "inspire" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("inspire"); // Update shared state
              handleClose();
            }}
          >
            Desigen Inspiration
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "colors" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("colors");
              handleClose();
            }}
          >
            Colors
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "icon" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("icon");
              handleClose();
            }}
          >
            Icons
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "img" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("img");
              handleClose();
            }}
          >
            Images
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "font" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("font");
              handleClose();
            }}
          >
            Fonts
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "border" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("border");
              handleClose();
            }}
          >
            Borders
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "animation" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("animation");
              handleClose();
            }}
          >
            Animation
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "shape" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("shape");
              handleClose();
            }}
          >
            Shapes
          </Button>

          <Button
            variant="outline-secondary"
            className={selectedCategory === "ps" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("ps");
              handleClose();
            }}
          >
            Photo Editor
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "bgRemover" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("bgRemover");
              handleClose();
            }}
          >
            Remove Background
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "imgCompress" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("imgCompress");
              handleClose();
            }}
          >
            Compress Images
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "api" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("api");
              handleClose();
            }}
          >
            APIs
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "pwa" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("pwa");
              handleClose();
            }}
          >
            PWA Tools
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "optimize" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("optimize");
              handleClose();
            }}
          >
            Code Optimization
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "screenShot" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("screenShot");
              handleClose();
            }}
          >
            Full Page Screenshot
          </Button>
        </div>
      </Col>
    </>
  );
}

export default ButtonsBox;
