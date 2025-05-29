import { useState } from "react";
import { useButtonContext } from "../ButtonContext"; // Import the custom hook to access the context
import data from "../data.json";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Image, Col } from "react-bootstrap";

function ToolsBox({ dataSectionRef }) {
  const { selectedCategory } = useButtonContext(); // Access shared state
  const [index, setIndex] = useState(0); // State to manage the carousel index

  // Handle carousel item select
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Filter data based on the selected category
  const filteredData = data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <Container fluid className="text-dark" ref={dataSectionRef}>
      <Row className="m-5">
        {/* Display message if no data is available
        {filteredData.length === 0 ? (
          <Col className="text-center">
            <h2>Welcome, Creative Mind! 🌟</h2>
            <p className="lead fs-4">
              Let's get started! <br /> Choose a category from the buttons to
              explore some amazing resources.
            </p>
          </Col>
        ) : ( */}
        
          {filteredData.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} 
                 className="text-center d-flex justify-content-center mb-4">
            <Card className="card" key={item.id}>
              <Card.Img className="logoImg" src={item.webLogo} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.desc}
                </Card.Text>
                <Button variant="primary" href={item.link} target="_blank">Visit &rarr;</Button>
              </Card.Body>
            </Card>
            </Col>
          ))}
          
        {/* )} */}
      </Row>
    </Container>
  );
}

export default ToolsBox;
