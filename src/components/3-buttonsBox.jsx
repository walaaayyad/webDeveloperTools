import React from "react";
import { Col, Button } from "react-bootstrap";
import { useButtonContext } from "./5-buttonContext"; // Import the custom hook to access the context

function ButtonsBox() {
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
            }}
          >
            Desigen Inspiration
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "colors" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("colors");
            }}
          >
            Colors
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "icon" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("icon");
            }}
          >
            Icons
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "img" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("img");
            }}
          >
            Images
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "font" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("font");
            }}
          >
            Fonts
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "border" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("border");
            }}
          >
            Borders
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "animation" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("animation");
            }}
          >
            Animation
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "shape" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("shape");
            }}
          >
            Shapes
          </Button>

          <Button
            variant="outline-secondary"
            className={selectedCategory === "ps" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("ps");
            }}
          >
            Photo Editor
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "bgRemover" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("bgRemover");
            }}
          >
            Remove Background
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "imgCompress" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("imgCompress");
            }}
          >
            Compress Images
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "api" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("api");
            }}
          >
            APIs
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "pwa" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("pwa");
            }}
          >
            PWA Tools
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "optimize" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("optimize");
            }}
          >
            Code Optimization
          </Button>
          <Button
            variant="outline-secondary"
            className={selectedCategory === "screenShot" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("screenShot");
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
