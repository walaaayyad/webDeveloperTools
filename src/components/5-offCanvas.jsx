import { useState } from "react";
import ButtonsBox from "./3-buttonsBox";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="d-md-none" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="md"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ButtonsBox handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
