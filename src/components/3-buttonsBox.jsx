import React from "react";
import { useState } from "react";
import { Col, Button } from "react-bootstrap";

function ButtonsBox() {
  const [activeBtn, setActiveBtn] = useState();

  // Create function to handle active button
  const handleActiveBtn = (toolName) => {
    console.log(toolName);
  };
  // return (
  //   data.filter((item) => item.category.includes(toolName))
  // )};

  return (
    <>
      <Col className="col-12 mt-5">
        <div className="btns-box text-center">
          <Button
            variant="outline-secondary"
            className={activeBtn === "inspire" && "active"}
            onClick={() => {
              setActiveBtn("inspire");
              handleActiveBtn("inspire");
            }}
          >
            Desigen Inspiration
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "colors" && "active"}
            onClick={() => {
              setActiveBtn("colors");
              handleActiveBtn("colors");
            }}
          >
            Colors
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "icon" && "active"}
            onClick={() => {
              setActiveBtn("icon");
              handleActiveBtn("icon");
            }}
          >
            Icons
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "img" && "active"}
            onClick={() => {
              setActiveBtn("img");
              handleActiveBtn("img");
            }}
          >
            Images
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "font" && "active"}
            onClick={() => {
              setActiveBtn("font");
              handleActiveBtn("font");
            }}
          >
            Fonts
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "border" && "active"}
            onClick={() => {
              setActiveBtn("border");
              handleActiveBtn("border");
            }}
          >
            Borders
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "animation" && "active"}
            onClick={() => {
              setActiveBtn("animation");
              handleActiveBtn("animation");
            }}
          >
            Animation
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "shape" && "active"}
            onClick={() => {
              setActiveBtn("shape");
              handleActiveBtn("shape");
            }}
          >
            Shapes
          </Button>

          <Button
            variant="outline-secondary"
            className={activeBtn === "ps" && "active"}
            onClick={() => {
              setActiveBtn("ps");
              handleActiveBtn("ps");
            }}
          >
            Photo Editor
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "bgRemover" && "active"}
            onClick={() => {
              setActiveBtn("bgRemover");
              handleActiveBtn("bgRemover");
            }}
          >
            Remove Background
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "imgCompress" && "active"}
            onClick={() => {
              setActiveBtn("imgCompress");
              handleActiveBtn("imgCompress");
            }}
          >
            Compress Images
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "api" && "active"}
            onClick={() => {
              setActiveBtn("api");
              handleActiveBtn("api");
            }}
          >
            APIs
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "pwa" && "active"}
            onClick={() => {
              setActiveBtn("pwa");
              handleActiveBtn("pwa");
            }}
          >
            PWA Tools
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "optimize" && "active"}
            onClick={() => {
              setActiveBtn("optimize");
              handleActiveBtn("optimize");
            }}
          >
            Code Optimization
          </Button>
          <Button
            variant="outline-secondary"
            className={activeBtn === "screenShot" && "active"}
            onClick={() => {
              setActiveBtn("screenShot");
              handleActiveBtn("screenShot");
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
