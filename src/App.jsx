import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Navbar, Button } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="border hero-section d-flex align-items-center justify-content-center flex-column">
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container fluid className='ms-5'>
          <Navbar.Brand href="#">
            <img
              src="public/images/logo.png"
              width="200"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className='d-flex '>
        {/* left section */}
          <Col className='col-4'>
            <Container>
              <Row>
                <Col className='col-12 d-flex justify-content-center align-items-center flex-column'>
                <h1 className='text-center mb-5'>Web Developer <br /> Tools</h1>
                <Image src='public/images/person2.png' className='hero-img' width={400} />
                </Col>
                <Col className='col-12 mt-5'>
                  <div className="btns-box text-center">
                      <Button variant="outline-secondary" className='m-2'>Inspire</Button>
                      <Button variant="outline-secondary" className='m-2'>Colors</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                      <Button variant="outline-secondary" className='m-2'>Secondary</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>

      {/* right section */}
          <Col className='col-8 glass-bg'>
            {/* <Container>
            <Row>
              <Col className='glass-bg'>
              </Col>
            </Row>
          </Container> */}
          </Col>

      </Container>
      
    </Container>
  );
}

export default App;